/**
 * Created by Ian on 17/6/7.
 */

/**
 * 表格对象
 */


var configModule = require('config')

var sheetGridConfig = configModule.SheetGridConfig

var SheetGrid = function () {
	this.height = sheetGridConfig.height
	this.width = sheetGridConfig.width

	this.headWidth = sheetGridConfig.headWidth
	this.headHeight = sheetGridConfig.headHeight

	this.rowNum = sheetGridConfig.rowNum
	this.colNum = sheetGridConfig.colNum

	this.cells = {}
}

module.exports.SheetGrid = SheetGrid