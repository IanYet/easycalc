/**
 * Created by Ian on 17/6/7.
 */

var configModule = require('config')

var sheetConfig = configModule.SheetConfig

var Sheet = function (SheetTool, SheetGrid) {

	this.width = sheetConfig.width
	this.height = sheetConfig.height

	this.SheetTool = SheetTool
	this.SheetGrid = SheetGrid
}

module.exports.Sheet = Sheet