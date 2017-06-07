/**
 * Created by Ian on 17/6/7.
 */


var Controller = function () {}

Controller.prototype.init = function (parentNode) {

	//实例化初始化需要的对象

	var sheetGridModule = require('SheetGrid')
	var sheetToolModule = require('SheetTool')
	var sheetModule = require('Sheet')
	var renderModule = require('Render')

	var SheetGrid = sheetGridModule.SheetGrid
	var SheetTool = sheetToolModule.SheetTool
	var Sheet = sheetModule.Sheet
	var Render = renderModule.Render

	this.sheetGrid = new SheetGrid()
	this.sheetTool = new SheetTool()
	this.sheet = new Sheet(this.sheetTool, this.sheetGrid)
	this.render = new Render()

	this.render.renderSheet(this.sheet, parentNode)
}

module.exports.Controller = Controller