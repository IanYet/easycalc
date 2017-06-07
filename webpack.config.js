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
			config: path.resolve(__dirname, "./config/config.js"),
			Cell: path.resolve(__dirname, "./component/Cell.js"),
			SheetGrid: path.resolve(__dirname, "./component/SheetGrid.js"),
			SheetTool: path.resolve(__dirname, "./component/SheetTool.js"),
			Sheet: path.resolve(__dirname, "./component/Sheet.js"),
			Render: path.resolve(__dirname, "./component/Render.js"),
			Controller: path.resolve(__dirname, "./component/Controller.js")
		}
	},
	devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: './app.html' }
			]
		},
		noInfo: false
	},
	devtool: "source-map"
}