const path = require("path");

module.exports = {

	entry: {
		app: "./src/app.js"
	},

	output: {
		filename: "[name].bundle.js",
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
