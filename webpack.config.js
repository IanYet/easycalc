/**
 * Created by Ian on 17/6/5.
 */
var path = require('path')

module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: "dist/",
		filename: "app.js"
	},
	resolve: {
		alias: {
			defaultStyle: path.resolve(__dirname, "./config/defaultStyle.json")
		}
	},
	devtool: "source-map"
}