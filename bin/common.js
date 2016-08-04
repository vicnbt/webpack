var common =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	document.write("header");
	
	var modName = location.pathname.slice(1);
	
	console.log(modName);
	var route = __webpack_require__(1)("./" + modName);
	route();
	
	//document.getElementById("login").onclick = function(e){
	//    console.log("click",e);
	//
	//    require.ensure([],function(require){
	//        let login = require("./login");
	//
	//        login();
	//    },'auth')
	//}
	//
	//document.getElementById("logout").onclick = function(e){
	//    console.log("click",e);
	//
	//    require.ensure([],function(require){
	//        let logout = require("./logout");
	//
	//        logout();
	//    },'auth')
	//}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./about": 2,
		"./about.js": 2,
		"./content": 3,
		"./content.js": 3,
		"./home": 4,
		"./home.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {
	    document.write(" about");
	    debug;
	    exports.textContent = "about";
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = " It works from content.js";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function () {
	    var textContent = __webpack_require__(3);
	
	    console.log(textContent);
	
	    document.write(textContent);
	
	    //if(NODE_ENV == "dev"){
	    //    console.log("this is dev");
	    //}
	
	    exports.textContent = textContent;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map