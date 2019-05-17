import { getData, postData, deleteData } from './axios';
import Vue from 'vue';

function login (params){
  // console.log(Vue.prototype, this)
  return postData('/login', params)
}
// 修改账号
function resetPwd (params){
  // console.log(Vue.prototype, this)
  return postData('/api/v1/user/resetPwd', params)
}
export {
  login,
  resetPwd
}