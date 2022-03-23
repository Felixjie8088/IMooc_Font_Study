const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 拼接路径
const resolve = __dirname => path.resolve(__dirname, dir);

module.exports = {
	mode: "development",//"production" | "development"
	entry: {
		index: "./src/pages/index/index.js"
	},
	output: {
		path: resolve("assets"),
		filename: "js/[name].js",
	},
	devtool: "source-map",
	resolve: {
		// 自动补全（可以省略）的扩展名
		extensions: ['.js'],
		// 路径别名
		alias: {
			api: resolve('src/api'),
			fonts: resolve('src/assets/fonts'),
			images: resolve('src/assets/images'),
			styles: resolve('src/assets/styles'),
			components: resolve('src/components'),
			pages: resolve('src/pages'),
		}
	},
	module: {
		rules: [
			// css
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			// 模板文件
			{
				test: /\.art$/,
				loader: 'art-template-loader'
			},
			// 图片
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader',
				options: {
					// 小于10k的图片转成base64编码的dataURL字符串写到代码中
					limit: 10000,
					// 其他的图片转移到指定目录
					name: 'images/[name].[ext]',
					esModule: false
				}
			},
			// 字体文件
			{
				test: /\.(woff2?|et|ttf|otf)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		// 自动将依赖注入html模板，并输出最终的html文件到目标文件夹
		new HtmlWebpackPlugin({
			template: './src/pages/index/index.art',//模板文件
			filename: 'index.html',
			chunks: ['index']
		}),
	]
}