/**
 * Created by Ian on 17/6/5.
 */

var controllerModule = require('Controller')
var Controller = controllerModule.Controller

var parentNode = document.getElementById('QianMoApp')

var controller = new Controller()
controller.init(parentNode)