const webpack = require("webpack");
const path    = require("path");

const merge  = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge( common, {

	output: {
		filename: "[name].js"
	},

	devtool: "eval",

	devServer: {
		contentBase: "./dist",
		hot: true
	},

	plugins: [

		new webpack.HotModuleReplacementPlugin(),

		new webpack.HashedModuleIdsPlugin(),

		new webpack.optimize.ModuleConcatenationPlugin(),

		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		})

	],

	module: {
		rules: [
			{
				test: /\.styl$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "stylus-loader",
						options: {
							preferPathResolver: "webpack"
						}
					}
				],
				include: path.join( __dirname, "src" )
			}
		]
	}

} );
