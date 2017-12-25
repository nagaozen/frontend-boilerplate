const webpack = require("webpack");
const path = require("path");

module.exports = {

	entry: {
		vendor: [
			"react",
			"react-dom",
			"mobx",
			"mobx-react"
		],
		app: "./src/app.js"
	},

	output: {
		filename: "[name].bundle.js",
		path: path.join( __dirname, "dist" )
	},

	plugins: [

		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.js",
			minChunks: Infinity
		}),

		new webpack.optimize.ModuleConcatenationPlugin()

	],

	resolve: {
		extensions: [ ".js", ".jsx" ]
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ "babel-loader" ],
				include: path.join( __dirname, "src" )
			}
		]
	}

};
