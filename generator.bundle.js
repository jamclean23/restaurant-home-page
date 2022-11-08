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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurantDescription\": () => (/* binding */ restaurantDescription),\n/* harmony export */   \"testamonials\": () => (/* binding */ testamonials)\n/* harmony export */ });\n//Text content for populating webpage\n\nlet restaurantDescription = \"Come to this restaurant to enjoy the best in farm-to-table cuisine and atmosphere. With a wide selection of delectable dishes and a creative twist on traditional French cooking, this is the place for any occasion. From weddings to graduations, from proposals to anniversaries, this restaurant is perfect for any life event. Treat yourself in the near future! The dining room is both relaxed and intimate, so you can feel comfortable enjoying your meal.\";\nlet testamonials = [\n    {\n        review: \"This restaurant is amazing. Always clean, the staff is always smiling and the food is second to none. The menu has a large selection, with lots of creative and fine dining options. It specializes in fusion cuisine which I love because of it's creativity and different flavors.\",\n        author: \"Augustine Barnhart\",\n    },\n    {\n        review: \"I absolutely love this restaurant. I have never had anything so delicious before in my life and I will be back again and again. The food is made of all locally sourced ingredients, the staff are friendly and the atmosphere is one that makes you want to linger. A truly delightful experience!\",\n        author: \"Kasandra Lumpkin\",\n    }\n];\n\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/content.js?");

/***/ }),

/***/ "./src/domGenerator.js":
/*!*****************************!*\
  !*** ./src/domGenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"generateHome\": () => (/* binding */ generateHome),\n/* harmony export */   \"generateInitial\": () => (/* binding */ generateInitial),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n//Javascript for generating DOM \n\n\n\nfunction generateInitial() {\n    //Add the header\n    const header = document.createElement('header');\n    header.innerText = \"A Random Restaurant\";\n    document.body.appendChild(header);\n\n    //Add the navBar and attach buttons\n    const navBar = document.createElement('nav');\n    document.body.appendChild(navBar);\n    for (let i = 0; i < 3; i++) {\n        const tab = document.createElement('button');\n        navBar.appendChild(tab);\n\n    }\n    //Add text to the tab buttons\n    const tabButtons = navBar.querySelectorAll('button');\n    tabButtons[0].innerText = \"Home\";\n    tabButtons[1].innerText = \"Menu\";\n    tabButtons[2].innerText = \"Contact Us\";\n\n}\n\nfunction generateHome() {\n    //Add the main\n    const main = addMain(\"home\");\n    \n    for (let i = 0; i < 3; i++) {\n        const article = document.createElement('article');\n        main.appendChild(article);\n        if (i == 0) {\n            const h2 = document.createElement('h2');\n            article.appendChild(h2);\n            h2.innerText = \"A Random Restaurant\";\n            \n            const p = document.createElement('p');\n            article.appendChild(p);\n        } else {\n            for (let j = 0; j < 2; j++) {\n                const p = document.createElement('p');\n                article.appendChild(p);\n            }\n        }\n    }\n\n    //Add text to articles-----\n\n    const articles = main.querySelectorAll('article');\n\n    articles.forEach((article, index)=>{\n        //Restaurant description\n        if (index == 0) {\n            article.querySelector('p').innerText = _content_js__WEBPACK_IMPORTED_MODULE_0__.restaurantDescription;\n        //Testimonials\n        } else {\n            article.querySelectorAll('p')[0].innerText = '\"' + _content_js__WEBPACK_IMPORTED_MODULE_0__.testamonials[index-1].review + '\"';\n            article.querySelectorAll('p')[1].innerText = \"- \" + _content_js__WEBPACK_IMPORTED_MODULE_0__.testamonials[index-1].author;\n        }\n    });\n\n    //-------------------------   \n}\n\nfunction generateMenu() {\n    const main = addMain(\"menu\");\n    for (let i = 0; i < 3; i++){\n        for (let j = 0; j < 2; j++) {\n            const article = document.createElement('article');\n            main.appendChild(article);\n        }\n    }\n}\n\nfunction clear() {\n    const main = document.querySelector('main');\n    if (main) {\n        document.body.removeChild(main);\n    }\n}\n\nfunction addMain(className) {\n    const main = document.createElement('main');\n    main.classList.add(className);\n    document.body.appendChild(main);\n    return main;\n}\n\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/domGenerator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domGenerator.js");
/******/ 	
/******/ })()
;