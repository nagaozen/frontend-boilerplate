const webpack = require("webpack");
const path    = require("path");

module.exports = {

	entry: {
		vendor: [
			"react",
			"react-dom",
			"mobx",
			"mobx-react"
		],
		app: path.join( __dirname, "src", "main.js" )
	},

	output: {
		path: path.join( __dirname, "dist" )
	},

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
