const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  // entry: "./app/entry", // string | object | array
  entry: {
    main: "./src/index.js"
  },
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "assets"), // string (default)
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "[name].js", // string (default)
    // // entry chunk 的文件名模板
    // publicPath: "../assets/", // string
  },
  module: {
    // 模块配置相关
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' }
        }
          , 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
              name: 'img/[name]_[hash:8].[ext]'
            }
          },
        ],
        type: 'javascript/auto',
      }
    ]
  },
  // 通过为浏览器调试工具提供极其详细的源映射的元信息来增强调试能力，
  // 但会牺牲构建速度。
  // enum
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 模板文件
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: "./css/[name].css" })
  ],
}