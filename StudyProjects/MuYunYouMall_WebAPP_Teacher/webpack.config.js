const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 拼接路径
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
	mode: "development", // "production" | "development" | "none"
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	// entry: "./app/entry", // string | object | array
	entry: {
		index: "./src/pages/index",
		destination: "./src/pages/destination",
		details: "./src/pages/details",
		personal: "./src/pages/personal",
	},
	// 默认为 ./src
	// 这里应用程序开始执行
	// webpack 开始打包
	output: {
		// webpack 如何输出结果的相关选项
		path: resolve("assets"), // string (default)
		// 所有输出文件的目标路径
		// 必须是绝对路径（使用 Node.js 的 path 模块）
		filename: "js/[name].js", // string (default)
		// // entry chunk 的文件名模板
		// publicPath: "../assets/", // string
	},
	// 通过为浏览器调试工具提供极其详细的源映射的元信息来增强调试能力，
	// 但会牺牲构建速度。
	// enum
	//source-map,调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码 cheap-module-eval-source-map
	devtool: "cheap-module-eval-source-map",
	resolve: {
		// 自动补全（可以省略）的扩展名
		extensions: ['.js'],
		// 路径别名
		alias: {
			api: resolve('src/api'),
			icons: resolve('src/assets/icons'),
			fonts: resolve('src/assets/fonts'),
			styles: resolve('src/assets/styles'),
			components: resolve('src/components'),
			pages: resolve('src/pages'),
			utils: resolve('src/utils'),
		}
	},
	module: {
		// 模块配置相关
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
			template: './src/pages/index/index.art', // 模板文件
			filename: 'index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/destination/destination.art', // 模板文件
			filename: 'destination.html',
			chunks: ['destination']
		}), new HtmlWebpackPlugin({
			template: './src/pages/details/details.art', // 模板文件
			filename: 'details.html',
			chunks: ['details']
		}), new HtmlWebpackPlugin({
			template: './src/pages/personal/personal.art', // 模板文件
			filename: 'personal.html',
			chunks: ['personal']
		}),
	],
}