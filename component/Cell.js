/**
 * Created by Ian on 17/6/7.
 */

var configModule = require('config')

var cellConfig = configModule.CellConfig

var Cell = function (coord) {

	//成员属性
	//设置默认值
	this.height = cellConfig.height
	this.width = cellConfig.width

	this.coord = coord
}

module.exports.Cell = Cell