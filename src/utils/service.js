import { getData, postData, deleteData } from './axios';

function login (params) {
  return postData('/login', params)
}
// 修改账号
function resetPwd (params) {
  return postData('/api/v1/user/resetPwd', params)
}

// 获取渠道所有列表
function getAllChannel (params) {
  return getData('/api/v1/channel/queryAllList', params)
}
export {
  login,
  resetPwd,
  getAllChannel
}