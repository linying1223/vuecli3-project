// const path = require("path")
// webpack打包工具
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
// 加入文件
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// https://cli.vuejs.org/zh/config/#publicpath
module.exports = {
  // 基本路径 vue-cli2中的baseUrl
  publicPath: './',
  // 输出文件路径
  outputDir: 'dist',
  // 是否使用eslint
  lintOnSave: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    compress: false, // 开启压缩
    proxy: {
      '/cupay-admin/': { // 代理api
        target: 'http://192.168.0.106:8080', // 域名
        changeOrigin: true // 是否允许跨域
      }
    }
  },
  // css相关配置
  css: {
    // 分离插件
    extract: true,
    // 用于开发人员定位问题
    sourceMap: false,
    modules: false
  },
  configureWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
      config.plugins.push(
        new UglifyJsPlugin({
          // 删除debugger和打印
          uglifyOptions: {
            compress: {
              drop_debugger: false,
              drop_console: false
            }
          },
          // 多进程并行来提高构建速度
          parallel: true,
          sourceMap: false
        })
      )
    }
  },
  chainWebpack: config => {
    // 配置别名
    // 若项目用到sass,全局引入sass，src/assets/common
    // config.resolve.alias
    //   .set('@', resolve('src'))
    //   .set('@img', resolve('src/assets'))
    //   .set('@scss', resolve('src/assets/common'))

    if (isProduction) {
      // 删除预加载,生产环境已编译，预加载不需要
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割成块
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  parallel: require('os').cpus().length > 1
}