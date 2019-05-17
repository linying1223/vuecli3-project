module.exports = {
  devServer: {
    proxy: {
      '/cupay-admin': { // 代理api
        target: "http://192.168.0.106:8080/", // 域名
        changeOrigin: true
      }
    }
  }
}