const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Detecting HMR state - css-hot-loader plugin require the output css file name static
const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js'

// Extract text from a bundle, or bundles, into a separate file
const cssPlugin = new MiniCssExtractPlugin({
	filename: isHot ? 'css/[name].css' : 'css/[name].[hash].css'
})

// Enabled HMR while the application is running, without a full reload
const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

// Displayed module name when HMR is enabled
const namedModulePlugin = new webpack.NamedModulesPlugin()

// Keeping it clean and fresh
const cleanPlugin = new CleanWebpackPlugin('dist', {})

// Generates an HTML file with <script> injected
const htmlPlugin = new HtmlWebPackPlugin({
	title: 'React app with Webpack 4 | Boilerplate',
	favicon: 'src/favicon.ico',
	template: 'src/index.html',
	filename: 'index.html'
})

module.exports = {
	entry: { app: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		port: 9099
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				loader: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		cleanPlugin,
		htmlPlugin,
		cssPlugin,
		hotModulePlugin,
		namedModulePlugin
	]
}
