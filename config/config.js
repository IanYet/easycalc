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
