/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * 配置文件，主要是个各类属性默认值
 * 整张表命名为：sheet
 * 表格上半部分叫做：sheetTool
 * 表格叫做：sheetGrid
 *
 */

/**
 * 整张表-Sheet的属性默认值
 *
 */
var SheetConfig = {
	height: 600,
	width: 920
}

/**
 * 表头-SheetTool的属性默认值
 *
 */
var SheetToolConfig = {
	height: 40,
	width: SheetConfig.width
}

/**
 * 单元格-Cell属性默认值
 *
 */
var CellConfig = {
	height: 20,
	width: 50
}

/**
 * 表单-SheetGrid的属性默认值
 *
 */
var SheetGridConfig = {
	height: SheetConfig.height - SheetToolConfig.height,
	width: SheetConfig.width,
	headWidth: 20,
	headHeight: 20,

	rowNum: (SheetConfig.height - SheetToolConfig.height - 20)/CellConfig.height,
	colNum: (SheetConfig.width-20)/CellConfig.width
}

/**
 * 输出模块
 *
 */
module.exports.SheetConfig = SheetConfig
module.exports.SheetToolConfig = SheetToolConfig
module.exports.SheetGridConfig = SheetGridConfig
module.exports.CellConfig = CellConfig


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/7.
 */


var Controller = function () {}

Controller.prototype.init = function (parentNode) {

	//实例化初始化需要的对象

	var sheetGridModule = __webpack_require__(5)
	var sheetToolModule = __webpack_require__(6)
	var sheetModule = __webpack_require__(4)
	var renderModule = __webpack_require__(3)

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/5.
 */

var controllerModule = __webpack_require__(1)
var Controller = controllerModule.Controller

var parentNode = document.getElementById('QianMoApp')

var controller = new Controller()
controller.init(parentNode)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/5.
 */

/**
 * SheetView Class
 *  负责
 *  @渲染表格
 *  @改变样式
 *
 *  总之，跟dom的直接交互，全由SheetView完成
 */

/**
 * 这段代码还有很多地方需要重构
 * 包括各种样式
 * 希望不要动
 */
var config = __webpack_require__(0)

var Render = function () {}

Render.prototype.renderSheet = function (sheet, parentNode) {
	var sheetDiv = document.createElement('div')

	sheetDiv.style.width = sheet.width + 'px'
	sheetDiv.style.height = sheet.height + 'px'

	parentNode.appendChild(sheetDiv)

	var sheetTool = sheet.SheetTool
	// console.log(sheet)
	var sheetToolDiv = document.createElement('div')

	sheetToolDiv.style.width = sheetTool.width + 'px'
	sheetToolDiv.style.height = sheetTool.height + 'px'
	sheetToolDiv.style.backgroundColor = '#aaaaaa'
	sheetToolDiv.innerHTML = "&#xe900;&#xe901;&#xe14d;&#xe14e;&#xe14f;"

	sheetDiv.appendChild(sheetToolDiv)

	var sheetGrid = sheet.SheetGrid
	var sheetGridTable = document.createElement('table')
	sheetDiv.appendChild(sheetGridTable)
	sheetGridTable.style.width = sheetGrid.width + 'px'
	sheetGridTable.style.height = sheetGrid.height + 'px'

	var sheeGridModel = createModel(sheetGrid.rowNum,  sheetGrid.colNum)
	fillGrid(sheeGridModel, sheetGridTable, config.CellConfig.height,config.CellConfig.width, config.SheetGridConfig.headWidth, config.SheetGridConfig.headHeight)

}

/**
 * 构建表格的数据模型
 * 一个二维数组
 *
 * 感觉这个应该放在controller里面
 * 但是先这样写
 * 你们不要改
 *
 * 表头存放表头显示的值
 * 其他为空，表示要放input
 *
 * @param rowNum
 * @param colNum
 */
function createModel(rowNum, colNum) {
	var sheetGridModel =  []
	for(var a=0;a<rowNum+1;a++){
		sheetGridModel[a] = []

		for(var b=0;b<colNum+1;b++){
			sheetGridModel[a][b] = null
		}
	}
	var startString = "A"

	for(var i=1; i<colNum+1; i++){
		sheetGridModel[0][i] = String.fromCharCode(startString.charCodeAt(0) + i - 1)
	}

	for(var j=1; j<rowNum+1; j++){
		sheetGridModel[j][0] = j
	}

	return sheetGridModel
}

function fillGrid(sheetGridModel, sheetGridTable, cellHeight, cellWidth, headWidth, headHeight) {
	var rowNum = sheetGridModel.length
	var colNum = sheetGridModel[0].length


	var rowHead = document.createElement('tr')
	sheetGridTable.appendChild(rowHead)

	for(var i=0;i<colNum;i++){
		var rowHeadTH  = document.createElement('th')
		rowHead.appendChild(rowHeadTH)

		var rowHeadDiv = document.createElement('div')
		rowHeadTH.appendChild(rowHeadDiv)

		if(i === 0){
			rowHeadTH.style.width = headWidth + 'px'
			rowHeadTH.style.height = headHeight + 'px'
			rowHeadDiv.style.width = headWidth-2 + 'px'
			rowHeadDiv.style.height = headHeight-2 + 'px'
		}else{
			rowHeadTH.style.height = headHeight + 'px'
			rowHeadTH.style.width = cellWidth + 'px'
			rowHeadDiv.style.height = headHeight-2 + 'px'
			rowHeadDiv.style.width = cellWidth-2 + 'px'

			rowHeadDiv.innerHTML = sheetGridModel[0][i]
		}

	}

	for(var j = 1;j<rowNum;j++){
		var rowTR = document.createElement('tr')
		sheetGridTable.appendChild(rowTR)

		for(var k=0; k<colNum;k++){
			if(k === 0){
				var rowTH = document.createElement('th')
				rowTR.appendChild(rowTH)
				var rowDiv = document.createElement('div')
				rowTH.appendChild(rowDiv)

				rowTH.style.width = headWidth + 'px'
				rowTH.style.height = cellHeight + 'px'
				rowDiv.style.width = headWidth-2 + 'px'
				rowDiv.style.height = cellHeight-2 + 'px'
				rowDiv.innerHTML = sheetGridModel[j][k]
			}else {
				var rowTD = document.createElement('td')
				rowTR.appendChild(rowTD)
				var rowInput = document.createElement('input')
				rowTD.appendChild(rowInput)

				rowTD.style.width = cellWidth + 'px'
				rowTD.style.height = cellHeight + 'px'
				rowInput.style.width = cellWidth-2 + 'px'
				rowInput.style.height = cellHeight-2 + 'px'
			}
		}
	}
}
module.exports.Render = Render

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/7.
 */

var configModule = __webpack_require__(0)

var sheetConfig = configModule.SheetConfig

var Sheet = function (SheetTool, SheetGrid) {

	this.width = sheetConfig.width
	this.height = sheetConfig.height

	this.SheetTool = SheetTool
	this.SheetGrid = SheetGrid
}

module.exports.Sheet = Sheet

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/7.
 */

/**
 * 表格对象
 */


var configModule = __webpack_require__(0)

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Ian on 17/6/7.
 */

var configModule = __webpack_require__(0)

var sheetToolConfig = configModule.SheetToolConfig

var SheetTool = function () {
	this.width = sheetToolConfig.width
	this.height = sheetToolConfig.height
}

module.exports.SheetTool = SheetTool

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map