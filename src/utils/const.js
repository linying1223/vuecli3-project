// 环境变量 process.env.NODE_ENV
let isProduction = process.env.NODE_ENV === 'production'
let projectUrl = "http://119.23.71.110"
let host = projectUrl + ":2000/cupay-admin" // 线上
// 图片地址
let imageURL = projectUrl + "/images"
// 商户图片地址
let imageMerchantURL = projectUrl + "/images/merchant"
// 二维码图片地址
let imageCodeURL = projectUrl + "/images/wechatCode"
/**
 * 客户信息
 */
// let host = "http://149.28.152.141:2000/cupay-admin" // 客户ip
// let imageURL = "http://149.28.152.141/images"

// 非生产环境
if (!isProduction) {
  host = "http://192.168.0.106:8080/cupay-admin" // 本地服务器
  // imageCodeURL = "http://192.168.0.106:8080/images/wechatCode"
}

export {
  host,
  imageURL,
  imageMerchantURL,
  imageCodeURL
}