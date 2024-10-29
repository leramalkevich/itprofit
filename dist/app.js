/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\nclass App {\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_0__.Router();\n    }\n}\n\n(new App());\n\n//# sourceURL=webpack://test_itprofit/./src/app.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\nclass Router {\n    constructor() {\n        this.titlePageElement = document.getElementById('title-page');\n        this.contentPageElement = document.getElementById('content');\n        this.viewportElement = document.getElementById('viewport');\n\n        this.routes = [\n            {\n                route: '/feedback',\n                title: 'Форма обратной связи',\n                filePathTemplate: '/templates/feedback.html',\n                load:()=>{\n\n            }\n            }\n        ]\n    }\n\n    async openNewRoute(url) {\n        const currentRoute = window.location.pathname;\n        history.pushState({}, '', url);\n        await this.activateRoute(null, currentRoute);\n    }\n\n    async activateRoute(e, oldRoute = null) {\n        if (oldRoute) {\n            const currentRoute = this.routes.find(item => item.route === oldRoute);\n            if (currentRoute.styles && currentRoute.styles.length > 0) {\n                currentRoute.styles.forEach(style => {\n                    document.querySelector(`link[href='/css/${style}']`).remove();\n                })\n            }\n            if (currentRoute.scripts && currentRoute.scripts.length > 0) {\n                currentRoute.scripts.forEach(script => {\n                    document.querySelector(`script[src='/js/${script}']`).remove();\n                })\n            }\n\n            if (currentRoute.unload && typeof currentRoute.unload === 'function') {\n                currentRoute.unload();\n            }\n        }\n        const urlRoute = window.location.pathname;\n        const newRoute = this.routes.find(item => item.route === urlRoute);\n\n        if (newRoute) {\n            if (newRoute.styles && newRoute.styles.length > 0) {\n                newRoute.styles.forEach(style => {\n                    const link = document.createElement('link');\n                    link.rel = 'stylesheet';\n                    link.href = '/css/' + style;\n                    document.head.insertBefore(link, this.viewportElement);\n                })\n            }\n\n            if (newRoute.scripts && newRoute.scripts.length > 0) {\n                for (const script of newRoute.scripts) {\n                    const scriptBlock = document.createElement('script');\n                    scriptBlock.src = '/js/' + script;\n                    scriptBlock.setAttribute('type', 'module');\n                    document.body.appendChild(scriptBlock);\n                }\n            }\n\n            if (newRoute.title) {\n                this.titlePageElement.innerText = newRoute.title;\n            }\n\n            if (newRoute.template) {\n                this.contentPageElement.innerHTML = await fetch(newRoute.template).then(response => response.text());\n            }\n\n            if (newRoute.load && typeof newRoute.load === 'function') {\n                newRoute.load();\n            }\n        } else {\n            console.log('No route found');\n            history.pushState({}, '', '/404');\n            await this.activateRoute();\n        }\n    }\n}\n\n//# sourceURL=webpack://test_itprofit/./src/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;