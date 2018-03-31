const webpack = require("webpack");
const path    = require("path");

const ExtractTextPlugin    = require("extract-text-webpack-plugin");
const CssoWebpackPlugin    = require("csso-webpack-plugin").default;
const CompressionPlugin    = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const merge   = require("webpack-merge");
const common  = require("./webpack.common.js");

module.exports = merge( common, {

	output: {
		filename: "[name].[chunkhash].js"
	},

	devtool: "source-map",

	plugins: [

		new ExtractTextPlugin("styles.[chunkhash].css"),

		new CssoWebpackPlugin(),

		new webpack.HashedModuleIdsPlugin(),

		new webpack.optimize.ModuleConcatenationPlugin(),

		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest"
		}),

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		}),

		new CompressionPlugin({
			test: /\.js$|\.css$|\.html$/
		}),

		new BundleAnalyzerPlugin()

	],

	module: {
		rules: [
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						{
							loader: "stylus-loader",
							options: {
								preferPathResolver: "webpack"
							}
						}
					]
				}),
				include: path.join( __dirname, "src" )
			}
		]
	}

} );
