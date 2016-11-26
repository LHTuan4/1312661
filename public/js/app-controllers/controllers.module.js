var appControllers = angular.module('appControllers', []);
utils.loadScripts(
	"js/app-controllers/post.controller.js",
    "js/app-controllers/put.controller.js",
	"js/app-controllers/get.controller.js",
    "js/app-controllers/delete.controller.js",
    "js/app-controllers/response.controller.js"
);