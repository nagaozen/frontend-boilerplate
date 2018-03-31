const webpack = require("webpack");
const path    = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CopyWebpackPlugin  = require("copy-webpack-plugin");

const pages = [
	{ entry: "landing", title: "Landing Page", filename: "index.html" },
	{ entry: "collection", title: "Collection Page", filename: "collection.html" },
	{ entry: "document", title: "Document Page", filename: "document.html" }
];

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
		new CleanWebpackPlugin(["dist"])
	].concat(
		pages.map(function( data ){
			return new HtmlWebpackPlugin({
				template: path.join( __dirname, "src", "templates", "simple.html" ),
				chunks: [ "manifest", "vendor", data.entry ],
				title: data.title,
				filename: data.filename,
				inject: "body",
				xhtml: true
			})
		})
	).concat([
		new CopyWebpackPlugin([
			{ from: path.join( __dirname, "src", "assets" ), to: path.join( __dirname, "dist", "assets" ) }
		])
	]), 

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
