
import Vue from 'vue';
import axios from "axios";
import router from '@/router'
import mystorage from "@/utils/storage";
import { host } from "./const";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 10 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else if (response.data.code === 500) {
      return Promise.reject(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  function(error) {
    // Do something with response error
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.message = throwErr(error.response.status, error.response)
      return Promise.reject(res)
    }
    return Promise.reject(error);
  }
);

function throwErr(code, response) {
  let message = '请求错误'
  switch (code) {
    case 400:
        message = '请求错误'
        break
    case 401:
        router.push({
            name: 'login'
        })
        message = '未授权，请登录'
        break
    case 403:
        message = '拒绝访问'
        break
    case 404:
        message = `请求地址出错: ${response.config.url}`
        break
    case 408:
        message = '请求超时'
        break
    case 500:
        message = '服务器内部错误'
        break
    case 501:
        message = '服务未实现'
        break
    case 502:
        message = '网关错误'
        break
    case 503:
        message = '服务不可用'
        break
    case 504:
        message = '网关超时'
        break
    case 505:
        message = 'HTTP版本不受支持'
        break
    default:
  }
  return message
}

const getData = function(url, params) {
  let config = {
    params
  }
  if (mystorage.get('token')) {
    Object.assign(config, {headers: {'Authorization': mystorage.get('token') || ''}})
  }
  return _axios.get(host + url, config)
}

const postData = function(url, data) {
  let config = {}
  if (mystorage.get('token')) {
    Object.assign(config, {headers: {'Authorization': mystorage.get('token') || ''}})
  }
  return _axios.post(host + url, data, config)
}
const deleteData = function(url, data) {
  let config = {
    params: data
  }
  if (mystorage.get('token')) {
    Object.assign(config, {headers: {'Authorization': mystorage.get('token') || ''}})
  }
   return _axios.delete(host + url, config)
}
// Vue.use(_axios)
export {
  getData,
  postData,
  deleteData
};
