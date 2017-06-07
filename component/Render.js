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
var config = require('config')

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