/**
 * 样式常量类
 * 整张表命名为：sheetBoard
 * 表格上半部分叫做：sheetTool
 * 表格叫做：sheetBody
 *
 * 这里只设置默认尺寸
 * 即：如果没有SheetView里面设置尺寸，则取这里的值
 */


var DefaultStyle =  {

	sheetBoard: {
		defaultHeight: 600,
		defaultWidth: 800
	},
	sheetTool: {
		defaultHeight: 50,
		defaultWidth: 800
	},
	sheetBody: {
		defaultHeight: 750,
		defaultWidth: 800
	}
}

module.exports.DefaultStyle = DefaultStyle
