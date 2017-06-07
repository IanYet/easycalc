/**
 * Created by Ian on 17/6/7.
 */

var configModule = require('config')

var sheetToolConfig = configModule.SheetToolConfig

var SheetTool = function () {
	this.width = sheetToolConfig.width
	this.height = sheetToolConfig.height
}

module.exports.SheetTool = SheetTool