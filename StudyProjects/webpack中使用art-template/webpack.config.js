const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  // entry: "./app/entry", // string | object | array
  entry: {
    index: "./src/index.js",
    list: "./src/list.js"
  },
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "assets"), // string (default)
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "js/[name].js", // string (default)
    // // entry chunk 的文件名模板
    // publicPath: "../assets/", // string
  },
  module: {
    // 模块配置相关
    rules: [
      {
        test: /\.art$/,
        loader: 'art-template-loader'
      }
    ]
  },
  // 通过为浏览器调试工具提供极其详细的源映射的元信息来增强调试能力，
  // 但会牺牲构建速度。
  // enum
  //source-map,调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码 cheap-module-eval-source-map
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.art', // 模板文件
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/list.art', // 模板文件
      filename: 'list.html',
      chunks: ['list']
    }),
  ],
}