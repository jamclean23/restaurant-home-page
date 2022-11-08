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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Portillo Bryant.otf */ \"./src/Portillo Bryant.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Louis George Cafe.ttf */ \"./src/Louis George Cafe.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./peakpx.jpg */ \"./src/peakpx.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*CSS Stylesheet*/\\n\\n:root {\\n    --cream: #FEFFC6;\\n    --gamboge: #E1982D;\\n    --dark-moss-green: #4C5A24;\\n    --sepia: #784A10;\\n    --maximum-blue-purple: #AEAFF0;\\n}\\n\\n@font-face {\\n    font-family: 'amstera';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n    font-family: 'cafe';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'cafe';\\n}\\n\\nbody {\\n    min-height: 100vh;\\n    max-height: 100vh;\\n    background-color: brown;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    display: grid;\\n    grid-template-rows: min-content min-content  1rem 1fr;\\n}\\n\\nheader {\\n    background-color: var(--maximum-blue-purple);\\n    display: grid;\\n    justify-content: center;\\n    align-content: center;\\n    min-width: 100vw;\\n    height: 6rem;\\n    font-family: 'amstera';\\n    font-size: 3rem;\\n    font-weight: 100;\\n    color: white;\\n    text-shadow: 0 0 4px black;\\n    box-shadow: 0 0 4px 0 var(--cream);\\n}\\n\\n/*Nav and Tabs-----------------------------------------------------*/\\nnav {\\n    display: flex;\\n    justify-content: center;\\n    gap: 1rem;\\n}\\nnav button {\\n    font-family: 'cafe';\\n    border-style: none;\\n    padding: .5rem 1rem;\\n    font-size: 1rem;\\n    border-bottom-left-radius: 8px;\\n    border-bottom-right-radius: 8px;\\n}\\nbutton:hover {\\n    box-shadow: 0 0 12px 0 var(--maximum-blue-purple);\\n}\\nbutton:active {\\n    background-color: var(--maximum-blue-purple);\\n}\\n/*-------------------------------------------------------------------*/\\n\\nmain {\\n    min-height: 0;\\n    overflow-y: auto;\\n    grid-row-start: 4;\\n}\\n\\n/*Articles*/\\narticle {\\n    background-color: var(--cream);\\n    border-radius: 8px;\\n    padding: 2rem;\\n    margin-left: auto;\\n    margin-right: auto;\\n    margin-bottom: 1rem;\\n    box-shadow: 0 0 8px 0 var(--sepia);\\n\\n\\n}\\n\\n/*Home tab-----------------------------------------------------------*/\\nmain.home {\\n    gap: 1rem;\\n    padding: 1rem;\\n}\\n/*Restaurant description*/\\nmain.home > article:first-child {\\n    min-height: 10rem;\\n    width: 70vw;\\n    font-size: 1.5rem;\\n}\\nmain.home > article:first-child > h2 {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: .5rem;\\n    margin-bottom: 1rem;\\n}\\n/*Testimonials*/\\nmain.home > article:nth-child(n + 2) {\\n    min-height: 10rem;\\n    width: 60vw;\\n    font-style: italic;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\nmain.home > article:nth-child(n + 2) > p:last-child {\\n    align-self: flex-end;\\n    margin-top: 1rem;\\n} \\n\\n/*---------------------------------------------------------------------*/\\n\\n/*Menu tab-------------------------------------------------------------*/\\n\\n/*Title card*/\\nmain.menu > article.title {\\n    white-space: nowrap;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: fit-content;\\n    height: 4rem;\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n/*Menu card*/\\n\\nmain.menu > article.content h3 {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-bottom: 2rem;\\n}\\nmain.menu > article.content > article > img {\\n    width: 15rem;\\n    height: 10rem;\\n    border-radius: 8px;\\n    display: block;\\n    margin-left: auto;\\n    margin-right: auto;\\n    margin-bottom: 2rem;\\n    object-fit: fill;\\n    box-shadow: 0 0 4px 0 var(--sepia);\\n}\\n\\nmain.menu > article.content {\\n    background-color: transparent;\\n    box-shadow: none;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\\n    gap: 2rem;\\n}\\n\\n/*---------------------------------------------------------------------*/\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-home-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent),\n/* harmony export */   \"restaurantDescription\": () => (/* binding */ restaurantDescription),\n/* harmony export */   \"testamonials\": () => (/* binding */ testamonials)\n/* harmony export */ });\n/* harmony import */ var _eggs_benedict_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eggs-benedict.jpg */ \"./src/eggs-benedict.jpg\");\n/* harmony import */ var _frittata_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frittata.jpeg */ \"./src/frittata.jpeg\");\n/* harmony import */ var _gnocchi_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gnocchi.jpeg */ \"./src/gnocchi.jpeg\");\n/* harmony import */ var _chicken_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken.jpeg */ \"./src/chicken.jpeg\");\n/* harmony import */ var _manhattan_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manhattan.jpeg */ \"./src/manhattan.jpeg\");\n/* harmony import */ var _mule_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mule.jpeg */ \"./src/mule.jpeg\");\n/* harmony import */ var _pie_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pie.jpeg */ \"./src/pie.jpeg\");\n/* harmony import */ var _piperade_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piperade.jpeg */ \"./src/piperade.jpeg\");\n/* harmony import */ var _boulevardier_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boulevardier.jpeg */ \"./src/boulevardier.jpeg\");\n//Text content for populating webpage\n\n\n\n\n\n\n\n\n\n\n\nlet restaurantDescription = \"Come to this restaurant to enjoy the best in farm-to-table cuisine and atmosphere. With a wide selection of delectable dishes and a creative twist on traditional French cooking, this is the place for any occasion. From weddings to graduations, from proposals to anniversaries, this restaurant is perfect for any life event. Treat yourself in the near future! The dining room is both relaxed and intimate, so you can feel comfortable enjoying your meal.\";\nlet testamonials = [\n    {\n        review: \"This restaurant is amazing. Always clean, the staff is always smiling and the food is second to none. The menu has a large selection, with lots of creative and fine dining options. It specializes in fusion cuisine which I love because of it's creativity and different flavors.\",\n        author: \"Augustine Barnhart\",\n    },\n    {\n        review: \"I absolutely love this restaurant. I have never had anything so delicious before in my life and I will be back again and again. The food is made of all locally sourced ingredients, the staff are friendly and the atmosphere is one that makes you want to linger. A truly delightful experience!\",\n        author: \"Kasandra Lumpkin\",\n    }\n];\nlet menuContent = [\n    {\n        title: \"Brunch\",\n        menu: {\n            eggsBenedict: {\n                title: \"Eggs Benedict\",\n                description: \"Eggs Benedict is one of the most iconic breakfast dishes in the world. A dish so simple yet so elegant and tasty. We've taken the classic dish and whipped it up into an amazing meal. Our Hollandaise sauce is made with top quality butter and served with a side of ham and toasted English muffins. Trust us, you'll love this meal!\",\n                image: _eggs_benedict_jpg__WEBPACK_IMPORTED_MODULE_0__,\n            },\n            frittata: {\n                title: \"Asparagus Frittata\",\n                description: \"Our frittata is the perfect breakfast or brunch dish! Served hot and fresh from the cast iron, this fluffy and layered frittata is packed full of asparagus and aged cheddar for a flavor you will love.\",\n                image: _frittata_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n            },\n            piperade: {\n                title: \"Pancetta & pepper piperade\",\n                description: \"Ancetta & Pepper Piperade takes eggs to a whole new level. Cracked into a rich and smoky tomato and pancetta sauce, this traditional Basque-inspired dish is perfect for brunch or a midweek meal. This is a fantastic twist on a classic breakfast favorite.\",\n                image: _piperade_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n            }\n        }\n    },\n    {\n        title: \"Dinner\",\n        menu: {\n            raisedPie: {\n                title: \"Ham and Cider Raised Pie\",\n                description: \"This pie is full of flavor, and perfect for a hearty meal. The flaky crust is filled with shredded cider ham, mushrooms, and sausage, and served with a side of slaw.\",\n                image: _pie_jpeg__WEBPACK_IMPORTED_MODULE_6__,\n            },\n            mustardChicken: {\n                title: \"Mustard Stuffed Chicken\",\n                description: \"This dish is a roasted chicken breast that is stuffed with a delicious mixture of mustard, cheddar cheese, and mozzarella cheese. The chicken is then wrapped in bacon to give it an extra layer of flavor and juiciness.\",\n                image: _chicken_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n            },\n            gnocchi: {\n                title: \"Gnocchi Bowl\",\n                description: \"This pot of creamy gnocchi is just the dish to cozy up to. Crispy bacon, wilted spinach and Creme de Saint Agur cheese lend their delicious flavors to this Italian favorite, while a bechamel sauce pulls it all together.\",\n                image: _gnocchi_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n            },\n        },\n    },\n    {\n        title: \"Cocktail Menu\",\n        menu: {\n            manhattan: {\n                title: \"Manhattan\",\n                description: \"A Manhattan is a classic cocktail that is perfect for any occasion. The whiskey, sweet vermouth, and bitters combine to create a delicious and smooth drink that everyone will love.\",\n                image: _manhattan_jpeg__WEBPACK_IMPORTED_MODULE_4__,\n            },\n            moscowMule: {\n                title: \"Moscow Mule\",\n                description: \"The Moscow mule is a popular cocktail made with vodka, ginger beer, and lime juice. This cocktail is served in a copper mug, which takes on the cold temperature of the liquid.\",\n                image: _mule_jpeg__WEBPACK_IMPORTED_MODULE_5__,\n            },\n            boulevardier: {\n                title: \"Boulevardier\",\n                description: \"The Boulevardier cocktail is an alcoholic drink composed of whiskey, sweet vermouth, and Campari. It's a smooth and easy drinking cocktail that will please any whiskey lover. its perfect for those long summer evenings when you want something a bit more indulgent\",\n                image: _boulevardier_jpeg__WEBPACK_IMPORTED_MODULE_8__,\n            }\n        },\n    },\n]\n\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/content.js?");

/***/ }),

/***/ "./src/domGenerator.js":
/*!*****************************!*\
  !*** ./src/domGenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"generateHome\": () => (/* binding */ generateHome),\n/* harmony export */   \"generateInitial\": () => (/* binding */ generateInitial),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n//Javascript for generating DOM \n\n\n\nfunction generateInitial() {\n    //Add the header\n    const header = document.createElement('header');\n    header.innerText = \"A Random Restaurant\";\n    document.body.appendChild(header);\n\n    //Add the navBar and attach buttons\n    const navBar = document.createElement('nav');\n    document.body.appendChild(navBar);\n    for (let i = 0; i < 3; i++) {\n        const tab = document.createElement('button');\n        navBar.appendChild(tab);\n\n    }\n    //Add text to the tab buttons\n    const tabButtons = navBar.querySelectorAll('button');\n    tabButtons[0].innerText = \"Home\";\n    tabButtons[1].innerText = \"Menu\";\n    tabButtons[2].innerText = \"Contact Us\";\n\n}\n\nfunction generateHome() {\n    //Add the main\n    const main = addMain(\"home\");\n    \n    for (let i = 0; i < 3; i++) {\n        const article = document.createElement('article');\n        main.appendChild(article);\n        if (i == 0) {\n            const h2 = document.createElement('h2');\n            article.appendChild(h2);\n            h2.innerText = \"A Random Restaurant\";\n            \n            const p = document.createElement('p');\n            article.appendChild(p);\n        } else {\n            for (let j = 0; j < 2; j++) {\n                const p = document.createElement('p');\n                article.appendChild(p);\n            }\n        }\n    }\n\n    //Add text to articles-----\n\n    const articles = main.querySelectorAll('article');\n\n    articles.forEach((article, index)=>{\n        //Restaurant description\n        if (index == 0) {\n            article.querySelector('p').innerText = _content_js__WEBPACK_IMPORTED_MODULE_0__.restaurantDescription;\n        //Testimonials\n        } else {\n            article.querySelectorAll('p')[0].innerText = '\"' + _content_js__WEBPACK_IMPORTED_MODULE_0__.testamonials[index-1].review + '\"';\n            article.querySelectorAll('p')[1].innerText = \"- \" + _content_js__WEBPACK_IMPORTED_MODULE_0__.testamonials[index-1].author;\n        }\n    });\n\n    //-------------------------   \n}\n\nfunction generateMenu() {\n    const main = addMain(\"menu\");\n    for (let i = 0; i < 3; i++){\n        for (let j = 0; j < 2; j++) {\n            const article = document.createElement('article');\n            main.appendChild(article);\n            //populate title cards\n            if (j == 0) {\n                article.classList.add('title');\n                article.innerText = _content_js__WEBPACK_IMPORTED_MODULE_0__.menuContent[i].title;\n            //populate menu item cards\n            } else {\n                article.classList.add('content');\n                //iterate through menu items for each meal\n                for (const item in _content_js__WEBPACK_IMPORTED_MODULE_0__.menuContent[i].menu){\n                    const menuItem = document.createElement('article');\n                    //title of menu item\n                    const h3 = document.createElement('h3');\n                    h3.innerText = _content_js__WEBPACK_IMPORTED_MODULE_0__.menuContent[i].menu[item].title;\n                    menuItem.appendChild(h3);\n                    //image of dish\n                    const image = document.createElement(\"img\");\n                    image.src = _content_js__WEBPACK_IMPORTED_MODULE_0__.menuContent[i].menu[item].image;\n                    menuItem.appendChild(image);\n                    //description of dish\n                    const p = document.createElement('p');\n                    p.innerText = _content_js__WEBPACK_IMPORTED_MODULE_0__.menuContent[i].menu[item].description;\n                    menuItem.appendChild(p);\n                    //Create the card\n                    article.appendChild(menuItem);\n                }\n\n            }\n        }\n    }\n}\n\nfunction clear() {\n    const main = document.querySelector('main');\n    if (main) {\n        document.body.removeChild(main);\n    }\n}\n\nfunction addMain(className) {\n    const main = document.createElement('main');\n    main.classList.add(className);\n    document.body.appendChild(main);\n    return main;\n}\n\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/domGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domGenerator.js */ \"./src/domGenerator.js\");\n\n\n\n//Initialize on home screen\n_domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generateInitial();\n_domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generateHome();\n\n//Event Listeners\nconst [homeButton, menuButton, contactButton] = document.querySelectorAll('button');\n//Home tab\nhomeButton.addEventListener('click', ()=>{\n    _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.clear();\n    _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generateHome();\n});\n//Menu tab\nmenuButton.addEventListener('click', ()=>{\n    _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.clear();\n    _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generateMenu();\n});\n//Contact tab\ncontactButton.addEventListener('click', ()=>{\n    _domGenerator_js__WEBPACK_IMPORTED_MODULE_1__.clear();\n});\n\n\n//# sourceURL=webpack://restaurant-home-page/./src/index.js?");

/***/ }),

/***/ "./src/Louis George Cafe.ttf":
/*!***********************************!*\
  !*** ./src/Louis George Cafe.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eacd87871e9a39013626.ttf\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/Louis_George_Cafe.ttf?");

/***/ }),

/***/ "./src/Portillo Bryant.otf":
/*!*********************************!*\
  !*** ./src/Portillo Bryant.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cddebe31935113d73f5a.otf\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/Portillo_Bryant.otf?");

/***/ }),

/***/ "./src/boulevardier.jpeg":
/*!*******************************!*\
  !*** ./src/boulevardier.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90fe5544cd23fee78784.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/boulevardier.jpeg?");

/***/ }),

/***/ "./src/chicken.jpeg":
/*!**************************!*\
  !*** ./src/chicken.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"834d8571004d76b3c009.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/chicken.jpeg?");

/***/ }),

/***/ "./src/eggs-benedict.jpg":
/*!*******************************!*\
  !*** ./src/eggs-benedict.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9de5838598d02bdde73.jpg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/eggs-benedict.jpg?");

/***/ }),

/***/ "./src/frittata.jpeg":
/*!***************************!*\
  !*** ./src/frittata.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac3476ee1021bb642a5d.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/frittata.jpeg?");

/***/ }),

/***/ "./src/gnocchi.jpeg":
/*!**************************!*\
  !*** ./src/gnocchi.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f37dc23c17d51ac0bba.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/gnocchi.jpeg?");

/***/ }),

/***/ "./src/manhattan.jpeg":
/*!****************************!*\
  !*** ./src/manhattan.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e43c41e73c875f0ea13.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/manhattan.jpeg?");

/***/ }),

/***/ "./src/mule.jpeg":
/*!***********************!*\
  !*** ./src/mule.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b1efba4603a385119b17.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/mule.jpeg?");

/***/ }),

/***/ "./src/peakpx.jpg":
/*!************************!*\
  !*** ./src/peakpx.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47d403f1fe75a5bd2653.jpg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/peakpx.jpg?");

/***/ }),

/***/ "./src/pie.jpeg":
/*!**********************!*\
  !*** ./src/pie.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3532963f3acf98a9a2e4.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/pie.jpeg?");

/***/ }),

/***/ "./src/piperade.jpeg":
/*!***************************!*\
  !*** ./src/piperade.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00d625fbf4bdb752ab42.jpeg\";\n\n//# sourceURL=webpack://restaurant-home-page/./src/piperade.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;