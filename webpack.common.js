const webpack = require("webpack");
const path    = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CopyWebpackPlugin  = require("copy-webpack-plugin");

module.exports = {

	entry: {
		vendor: [
			"react",
			"react-dom",
			"mobx",
			"mobx-react"
		],
		landing: path.join( __dirname, "src", "landing.js" ),
		collection: path.join( __dirname, "src", "collection.js" ),
		document: path.join( __dirname, "src", "document.js" )
	},

	output: {
		path: path.join( __dirname, "dist" )
	},

	plugins: [

		new CleanWebpackPlugin(["dist"]),

		new HtmlWebpackPlugin({
			template: path.join( __dirname, "src", "templates", "simple.html" ),
			chunks: [ "manifest", "vendor", "landing" ],
			title: "Landing Page Example",
			filename: "index.html",
			inject: "body",
			xhtml: true
		}),

		new HtmlWebpackPlugin({
			template: path.join( __dirname, "src", "templates", "simple.html" ),
			chunks: [ "manifest", "vendor", "collection" ],
			title: "Collection Page Example",
			filename: "collection.html",
			inject: "body",
			xhtml: true
		}),

		new HtmlWebpackPlugin({
			template: path.join( __dirname, "src", "templates", "simple.html" ),
			chunks: [ "manifest", "vendor", "document" ],
			title: "Document Page Example",
			filename: "document.html",
			inject: "body",
			xhtml: true
		}),

		new CopyWebpackPlugin([
			{ from: path.join( __dirname, "src", "assets" ), to: path.join( __dirname, "dist", "assets" ) }
		])

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
