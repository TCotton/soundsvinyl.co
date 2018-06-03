const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		alias: {
			Nav: path.resolve(__dirname, 'app/front/nav.js'),
			Main: path.resolve(__dirname, 'app/front/main.js'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: (/node_modules|bower_components/),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,
					'css-loader?modules="true"&importLoaders="1"&localIdentName=[name]__[local]___[hash:base64:5]',
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader?classPrefix'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
