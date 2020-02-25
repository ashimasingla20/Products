/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Carousel.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Carousel.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2bZ6mD_iCPbgnQRdtOiuk- {\\n  max-width: 1160px;\\n  margin: 0 auto;\\n  margin-top: 50px;\\n  height: 200px; }\\n\\n.uFRRMWARYByTi043IHGaE {\\n  height: 200px; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"carousel\": \"_2bZ6mD_iCPbgnQRdtOiuk-\",\n\t\"element\": \"uFRRMWARYByTi043IHGaE\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/Carousel.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Footer.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Footer.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2Hrw14TUTshCYOkSeTYs93 {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 0 12px;\\n  height: 64px;\\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.1);\\n  background: #FFFFFF; }\\n\\n._12JANv-JpGRlqv09pZjHq5 {\\n  width: 1148px;\\n  display: flex;\\n  justify-content: center;\\n  font-size: 18px;\\n  margin: 0 auto; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"footer\": \"_2Hrw14TUTshCYOkSeTYs93\",\n\t\"text\": \"_12JANv-JpGRlqv09pZjHq5\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/Footer.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Header.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Header.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._1nxBcnsmhw-KMVL7lwgZ0 {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  padding: 0 12px;\\n  height: 64px;\\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.1);\\n  background: #FFFFFF; }\\n\\n._3m-koDE0e_HZSJ9s1L-d_e {\\n  width: 1160px;\\n  display: flex;\\n  justify-content: flex-start;\\n  font-size: 22px;\\n  margin: 0 auto; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"_1nxBcnsmhw-KMVL7lwgZ0\",\n\t\"company\": \"_3m-koDE0e_HZSJ9s1L-d_e\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/Header.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Product.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Product.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  background: #F4f4f4; }\\n\\n.bC_Dep_hZ-QwK1czkpJhD {\\n  margin: 0 auto;\\n  max-width: 1140px;\\n  display: flex;\\n  margin-top: 50px;\\n  margin-bottom: 250px;\\n  position: relative; }\\n\\n._3RRwegWy2NnkoBXYmy7155 {\\n  margin-right: 50px; }\\n\\n._1bkBhS3XQKqmlBrE9ZnY4j {\\n  display: flex;\\n  justify-content: flex-start; }\\n\\n._3I__izPjqOoQ9UgUG8GEq3 {\\n  display: flex; }\\n\\n.i7gPwKpJ3PJ1SilqNUARz {\\n  font-size: 18px;\\n  font-weight: 600;\\n  margin-right: 20px;\\n  min-width: 150px; }\\n\\n._2Sgf9-PKGCJsjmeMNaZreV {\\n  font-size: 18px;\\n  font-weight: 100; }\\n\\n._18e0sFiNhWisZtP27Cevx0 {\\n  padding: 10px;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n  background: #FFFFFF;\\n  margin-top: 25px; }\\n\\n._2mpDCmW0t_qvUJHJGgkSwj {\\n  position: absolute;\\n  top: 0;\\n  left: -65px; }\\n\\n._1fkE_vp1AZ4k2pRYwvcpE0 {\\n  cursor: pointer; }\\n\\n._1Dkpz4Zckgo8xt-N8rR8WV {\\n  display: flex;\\n  align-items: center; }\\n\\n._2SRfqfKjckoBMYEFnNv3Qh {\\n  display: flex; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"bC_Dep_hZ-QwK1czkpJhD\",\n\t\"imagebox\": \"_3RRwegWy2NnkoBXYmy7155\",\n\t\"image\": \"_1bkBhS3XQKqmlBrE9ZnY4j\",\n\t\"block\": \"_3I__izPjqOoQ9UgUG8GEq3\",\n\t\"head\": \"i7gPwKpJ3PJ1SilqNUARz\",\n\t\"value\": \"_2Sgf9-PKGCJsjmeMNaZreV\",\n\t\"description\": \"_18e0sFiNhWisZtP27Cevx0\",\n\t\"back\": \"_2mpDCmW0t_qvUJHJGgkSwj\",\n\t\"icon\": \"_1fkE_vp1AZ4k2pRYwvcpE0\",\n\t\"stars\": \"_1Dkpz4Zckgo8xt-N8rR8WV\",\n\t\"ratingcontainer\": \"_2SRfqfKjckoBMYEFnNv3Qh\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/Product.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductElements.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductElements.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2HO4wwRMSNMYamiRZP8Zsy {\\n  display: flex;\\n  flex-direction: column;\\n  margin-right: 10px;\\n  margin-bottom: 20px;\\n  background: #FFFFFF; }\\n\\n.OyBu5zbofkBi2gU97_k_R {\\n  cursor: pointer;\\n  text-decoration: none;\\n  color: #4990e2;\\n  font-weight: 700;\\n  line-height: 1.5;\\n  word-break: break-word;\\n  text-transform: uppercase; }\\n\\n._1HUsASCSvtoqac8S_xxgWM {\\n  font-size: 14px;\\n  color: #171717;\\n  font-weight: 500;\\n  line-height: 1.5;\\n  word-break: break-word;\\n  overflow: hidden;\\n  margin: 5px 0;\\n  width: 100%; }\\n\\n._2syRu0rphssnWm5YBCobX6 {\\n  width: 200px;\\n  height: 200px;\\n  object-fit: contain; }\\n\\n._3BL8oUyQzWcRmbsHxQEKpz {\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\n  border-radius: 5px;\\n  padding: 10px; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"element\": \"_2HO4wwRMSNMYamiRZP8Zsy\",\n\t\"name\": \"OyBu5zbofkBi2gU97_k_R\",\n\t\"price\": \"_1HUsASCSvtoqac8S_xxgWM\",\n\t\"image\": \"_2syRu0rphssnWm5YBCobX6\",\n\t\"block\": \"_3BL8oUyQzWcRmbsHxQEKpz\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/ProductElements.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductList.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductList.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  background: #F4f4f4; }\\n\\n.ky4uaz0RtPesvRPgHbXG1 {\\n  display: flex;\\n  list-style: none;\\n  max-width: 1160px;\\n  flex-wrap: wrap;\\n  margin: 0 auto;\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n  justify-content: center;\\n  padding: 0; }\\n\\n._2FhwZom4yK9UL_SHGIffks {\\n  margin: 0 auto;\\n  align-items: center;\\n  display: flex;\\n  margin-bottom: 30px;\\n  padding: 20px;\\n  border: 0;\\n  border-radius: 10px;\\n  background-color: rgba(73, 144, 226, 0.8);\\n  outline: 0;\\n  cursor: pointer; }\\n\\n.k5oli6rJD08yyxdmTaP2C {\\n  color: #FFFFFF;\\n  font-size: 18px;\\n  font-weight: 500; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"ky4uaz0RtPesvRPgHbXG1\",\n\t\"button\": \"_2FhwZom4yK9UL_SHGIffks\",\n\t\"text\": \"k5oli6rJD08yyxdmTaP2C\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/ProductList.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ProductsListPage = __webpack_require__(/*! ./containers/ProductsListPage */ \"./src/client/containers/ProductsListPage.js\");\n\nvar _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);\n\nvar _ProductPage = __webpack_require__(/*! ./containers/ProductPage */ \"./src/client/containers/ProductPage.js\");\n\nvar _ProductPage2 = _interopRequireDefault(_ProductPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routesArr = [_extends({}, _ProductsListPage2.default, {\n  path: '/',\n  exact: true\n}), _extends({}, _ProductsListPage2.default, {\n  path: '/products'\n}), _extends({}, _ProductPage2.default, {\n  path: '/pdp/:id'\n})];\nexports.default = routesArr;\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/carousel.js":
/*!****************************************!*\
  !*** ./src/client/actions/carousel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCarousel = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/client/actions/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchCarousel = exports.fetchCarousel = function fetchCarousel() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, id) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({ type: _constants.FETCH_CAROUSEL_REQUEST });\n              _context.prev = 1;\n              _context.next = 4;\n              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/home');\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({\n                type: _constants.FETCH_CAROUSEL_SUCCESS,\n                payload: res.data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](1);\n\n              dispatch({\n                type: _constants.FETCH_CAROUSEL_FAILURE,\n                payload: _context.t0\n              });\n\n            case 11:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[1, 8]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/carousel.js?");

/***/ }),

/***/ "./src/client/actions/constants.js":
/*!*****************************************!*\
  !*** ./src/client/actions/constants.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//Get all elements\nvar FETCH_PRODUCTS_REQUEST = exports.FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';\nvar FETCH_PRODUCTS_SUCCESS = exports.FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';\nvar FETCH_PRODUCTS_FAILURE = exports.FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';\nvar RESET_PRODUCTS = exports.RESET_PRODUCTS = 'RESET_PRODUCT';\n//Get single Item\nvar FETCH_PRODUCT_BY_ID_REQUEST = exports.FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';\nvar FETCH_PRODUCT_BY_ID_SUCCESS = exports.FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';\nvar FETCH_PRODUCT_BY_ID_FAILURE = exports.FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';\nvar RESET_PRODUCT_BY_ID = exports.RESET_PRODUCT_BY_ID = 'RESET_PRODUCT_BY_ID';\n//Get Carousel Item \nvar FETCH_CAROUSEL_REQUEST = exports.FETCH_CAROUSEL_REQUEST = 'FETCH_CAROUSEL_REQUEST';\nvar FETCH_CAROUSEL_SUCCESS = exports.FETCH_CAROUSEL_SUCCESS = 'FETCH_CAROUSEL_SUCCESS';\nvar FETCH_CAROUSEL_FAILURE = exports.FETCH_CAROUSEL_FAILURE = 'FETCH_CAROUSEL_FAILURE';\n\n//# sourceURL=webpack:///./src/client/actions/constants.js?");

/***/ }),

/***/ "./src/client/actions/product.js":
/*!***************************************!*\
  !*** ./src/client/actions/product.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchProductById = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/client/actions/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchProductById = exports.fetchProductById = function fetchProductById(id) {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({ type: _constants.FETCH_PRODUCT_BY_ID_REQUEST });\n              _context.prev = 1;\n              _context.next = 4;\n              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products/' + id);\n\n            case 4:\n              res = _context.sent;\n\n              console.log('here in action');\n              dispatch({\n                type: _constants.FETCH_PRODUCT_BY_ID_SUCCESS,\n                payload: res.data\n              });\n              // console.log('get state in product action');\n              // console.log(store.getState());\n              //return store.getState();\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context['catch'](1);\n\n              dispatch({\n                type: _constants.FETCH_PRODUCT_BY_ID_FAILURE,\n                payload: _context.t0\n              });\n\n            case 12:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[1, 9]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n// export const fetchProductById = (id) => {\n//     return dispatch => {\n//       dispatch({type: FETCH_PRODUCT_BY_ID_REQUEST})\n//       return axios.get(`https://node-sample-api.herokuapp.com/api/products/${id}`)\n//           .then(response => {\n//               // let res = response.json();\n//               // console.log('res is_-------->')\n//               // console.log(res);\n//               dispatch({\n//                 type: FETCH_PRODUCT_BY_ID_SUCCESS,\n//                 payload: response.data\n//               })\n//               return store.getState();\n//               //return successData;\n//           })\n//           .catch(error => {\n//             dispatch({\n//               type: FETCH_PRODUCT_BY_ID_FAILURE,\n//               payload: error\n//             })\n//             return false\n//           })\n//     }\n// }\n\n//# sourceURL=webpack:///./src/client/actions/product.js?");

/***/ }),

/***/ "./src/client/actions/products.js":
/*!****************************************!*\
  !*** ./src/client/actions/products.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchAllProducts = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/client/actions/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchAllProducts = exports.fetchAllProducts = function fetchAllProducts(page) {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({ type: _constants.FETCH_PRODUCTS_REQUEST });\n              _context.prev = 1;\n              _context.next = 4;\n              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products?page=' + page);\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({\n                type: _constants.FETCH_PRODUCTS_SUCCESS,\n                payload: res.data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](1);\n\n              dispatch({\n                type: _constants.FETCH_PRODUCTS_FAILURE,\n                payload: _context.t0\n              });\n\n            case 11:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[1, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/products.js?");

/***/ }),

/***/ "./src/client/components/ErrorBoundaries.js":
/*!**************************************************!*\
  !*** ./src/client/components/ErrorBoundaries.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ErrorBoundary = function (_React$Component) {\n  _inherits(ErrorBoundary, _React$Component);\n\n  function ErrorBoundary(props) {\n    _classCallCheck(this, ErrorBoundary);\n\n    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));\n\n    _this.state = { hasError: false };\n    return _this;\n  }\n\n  _createClass(ErrorBoundary, [{\n    key: 'componentDidCatch',\n    value: function componentDidCatch(error, errorInfo) {\n      logErrorToMyService(error, errorInfo);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.state.hasError) {\n        return _react2.default.createElement(\n          'h1',\n          null,\n          'Something went wrong.'\n        );\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: 'getDerivedStateFromError',\n    value: function getDerivedStateFromError(error) {\n      return { hasError: true };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(_react2.default.Component);\n\nexports.default = ErrorBoundary;\n\n//# sourceURL=webpack:///./src/client/components/ErrorBoundaries.js?");

/***/ }),

/***/ "./src/client/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/Footer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _Footer = __webpack_require__(/*! ../styles/Footer.scss */ \"./src/client/styles/Footer.scss\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function Footer() {\n  return _react2.default.createElement(\n    'footer',\n    { className: _Footer2.default.footer },\n    _react2.default.createElement(\n      'div',\n      { className: _Footer2.default.text },\n      _react2.default.createElement(\n        'span',\n        null,\n        'Made with \\u2764\\uFE0F in India'\n      )\n    )\n  );\n};\nexports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);\n\n//# sourceURL=webpack:///./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _Header = __webpack_require__(/*! ../styles/Header.scss */ \"./src/client/styles/Header.scss\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    'nav',\n    { className: _Header2.default.header },\n    _react2.default.createElement(\n      'div',\n      { className: _Header2.default.company },\n      _react2.default.createElement(\n        'span',\n        { className: _Header2.default.companyText },\n        'Tokopedia'\n      )\n    )\n  );\n};\nexports.default = (0, _withStyles2.default)(_Header2.default)(Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/ProductList/Carousel.js":
/*!*******************************************************!*\
  !*** ./src/client/components/ProductList/Carousel.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactSlick = __webpack_require__(/*! react-slick */ \"react-slick\");\n\nvar _reactSlick2 = _interopRequireDefault(_reactSlick);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _Carousel = __webpack_require__(/*! ../../styles/Carousel.scss */ \"./src/client/styles/Carousel.scss\");\n\nvar _Carousel2 = _interopRequireDefault(_Carousel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sliderSettings = {\n  dots: true,\n  infinite: true,\n  slidesToShow: 3,\n  slidesToScroll: 1,\n  centerMode: true,\n  autoplay: true\n};\nvar Carousel = function Carousel(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: _Carousel2.default.carousel },\n    _react2.default.createElement(\n      _reactSlick2.default,\n      sliderSettings,\n      props.carouselData.map(function (carouselEle, carouselIndex) {\n        return _react2.default.createElement('img', { key: 'carousle-' + carouselIndex,\n          className: _Carousel2.default.element,\n          src: carouselEle.url,\n          alt: carouselEle.title });\n      })\n    )\n  );\n};\nexports.default = (0, _withStyles2.default)(_Carousel2.default)(Carousel);\n\n//# sourceURL=webpack:///./src/client/components/ProductList/Carousel.js?");

/***/ }),

/***/ "./src/client/components/ProductList/ProductElements.js":
/*!**************************************************************!*\
  !*** ./src/client/components/ProductList/ProductElements.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _ProductElements = __webpack_require__(/*! ../../styles/ProductElements.scss */ \"./src/client/styles/ProductElements.scss\");\n\nvar _ProductElements2 = _interopRequireDefault(_ProductElements);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductElements = function ProductElements(props) {\n  return props.products.map(function (product, index) {\n    return _react2.default.createElement(\n      'li',\n      { key: index, className: _ProductElements2.default.element },\n      _react2.default.createElement(\n        'div',\n        { className: _ProductElements2.default.block },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/pdp/' + product.id },\n          _react2.default.createElement('img', { src: product.img,\n            alt: '' + product.name,\n            className: _ProductElements2.default.image })\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/pdp/' + product.id, className: _ProductElements2.default.name },\n          product.name\n        ),\n        _react2.default.createElement(\n          'p',\n          { className: _ProductElements2.default.price },\n          'Price: Rs',\n          product.price\n        )\n      )\n    );\n  });\n};\nexports.default = (0, _withStyles2.default)(_ProductElements2.default)(ProductElements);\n\n//# sourceURL=webpack:///./src/client/components/ProductList/ProductElements.js?");

/***/ }),

/***/ "./src/client/containers/ProductPage.js":
/*!**********************************************!*\
  !*** ./src/client/containers/ProductPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _product = __webpack_require__(/*! ../actions/product */ \"./src/client/actions/product.js\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! ../components/Footer */ \"./src/client/components/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _ErrorBoundaries = __webpack_require__(/*! ../components/ErrorBoundaries */ \"./src/client/components/ErrorBoundaries.js\");\n\nvar _ErrorBoundaries2 = _interopRequireDefault(_ErrorBoundaries);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _Product = __webpack_require__(/*! ../styles/Product.scss */ \"./src/client/styles/Product.scss\");\n\nvar _Product2 = _interopRequireDefault(_Product);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _fa = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n\nvar _io = __webpack_require__(/*! react-icons/io */ \"react-icons/io\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar Rating = function Rating(_ref) {\n  var rating = _ref.rating;\n\n  var totalStars = 5;\n  return _react2.default.createElement(\n    'div',\n    { className: _Product2.default.stars },\n    [].concat(_toConsumableArray(Array(totalStars))).map(function (n, i) {\n      return i < rating ? _react2.default.createElement(_io.IoIosStar, {\n        size: 25,\n        key: 'star-' + i }) : _react2.default.createElement(_io.IoMdStarOutline, {\n        size: 25,\n        key: 'star-' + i });\n    })\n  );\n};\nfunction ProductPage(props) {\n  var id = props.match.params.id;\n\n  var _useState = (0, _react.useState)(props.product),\n      _useState2 = _slicedToArray(_useState, 2),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (!product.productInfo || product.productInfo && id != product.productInfo.id) {\n      props.fetchProductById(id);\n    }\n  }, []);\n  (0, _react.useEffect)(function () {\n    setProduct(props.product);\n  }, [props.product]);\n  var productInfo = product.productInfo;\n\n  if (!product || !productInfo) return null;\n  var setRedirect = function setRedirect() {\n    props.history.push('/products');\n  };\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      'div',\n      { className: _Product2.default.container },\n      _react2.default.createElement(\n        'div',\n        { className: _Product2.default.imagebox },\n        _react2.default.createElement(\n          'span',\n          { className: _Product2.default.back, onClick: setRedirect },\n          _react2.default.createElement(_fa.FaArrowLeft, { size: 25, className: _Product2.default.icon })\n        ),\n        _react2.default.createElement(\n          _ErrorBoundaries2.default,\n          null,\n          _react2.default.createElement('img', {\n            className: _Product2.default.image,\n            src: productInfo.img,\n            alt: productInfo.name })\n        )\n      ),\n      _react2.default.createElement(\n        _ErrorBoundaries2.default,\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            { className: _Product2.default.block },\n            _react2.default.createElement(\n              'p',\n              { className: _Product2.default.head },\n              'Product Info'\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: _Product2.default.value },\n              productInfo.name,\n              ' '\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: _Product2.default.block },\n            _react2.default.createElement(\n              'p',\n              { className: _Product2.default.head },\n              'Rating'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: _Product2.default.ratingcontainer },\n              _react2.default.createElement(Rating, { rating: productInfo.rating })\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: _Product2.default.block },\n            _react2.default.createElement(\n              'p',\n              { className: _Product2.default.head },\n              'Description'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: (0, _classnames2.default)(_Product2.default.value, _Product2.default.description) },\n              productInfo.description\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(_Footer2.default, null)\n  );\n}\nfunction mapStateToProps(state) {\n  return { product: state.product };\n}\nfunction loadData(store) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  return store.dispatch((0, _product.fetchProductById)(id));\n}\nexports.default = {\n  loadData: loadData,\n  component: (0, _withStyles2.default)(_Product2.default)((0, _reactRedux.connect)(mapStateToProps, { fetchProductById: _product.fetchProductById })(ProductPage))\n};\n\n//# sourceURL=webpack:///./src/client/containers/ProductPage.js?");

/***/ }),

/***/ "./src/client/containers/ProductsListPage.js":
/*!***************************************************!*\
  !*** ./src/client/containers/ProductsListPage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _products = __webpack_require__(/*! ../actions/products */ \"./src/client/actions/products.js\");\n\nvar _carousel = __webpack_require__(/*! ../actions/carousel */ \"./src/client/actions/carousel.js\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! ../components/Footer */ \"./src/client/components/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _withStyles = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nvar _ProductList = __webpack_require__(/*! ../styles/ProductList.scss */ \"./src/client/styles/ProductList.scss\");\n\nvar _ProductList2 = _interopRequireDefault(_ProductList);\n\nvar _ProductElements = __webpack_require__(/*! ../components/ProductList/ProductElements */ \"./src/client/components/ProductList/ProductElements.js\");\n\nvar _ProductElements2 = _interopRequireDefault(_ProductElements);\n\nvar _Carousel = __webpack_require__(/*! ../components/ProductList/Carousel */ \"./src/client/components/ProductList/Carousel.js\");\n\nvar _Carousel2 = _interopRequireDefault(_Carousel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ProductsList(props) {\n  var _useState = (0, _react.useState)(props.products),\n      _useState2 = _slicedToArray(_useState, 2),\n      products = _useState2[0],\n      setProducts = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(props.carousel),\n      _useState4 = _slicedToArray(_useState3, 2),\n      carousel = _useState4[0],\n      setCarousel = _useState4[1];\n\n  console.log(carousel);\n  (0, _react.useEffect)(function () {\n    if (!products.data.length) {\n      props.fetchAllProducts(1);\n    }\n    if (!carousel.length) {\n      props.fetchCarousel();\n    }\n  }, []);\n  (0, _react.useEffect)(function () {\n    setProducts(props.products);\n  }, [props.products]);\n  (0, _react.useEffect)(function () {\n    setCarousel(props.carousel);\n  }, [props.carousel]);\n  var getMoreProducts = function getMoreProducts(e, page) {\n    props.fetchAllProducts(page);\n  };\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    !!carousel && carousel.carousel && _react2.default.createElement(_Carousel2.default, { carouselData: carousel.carousel }),\n    !!products && _react2.default.createElement(\n      'ul',\n      { className: _ProductList2.default.container },\n      _react2.default.createElement(_ProductElements2.default, { products: products.data })\n    ),\n    _react2.default.createElement(\n      'button',\n      {\n        type: 'button',\n        className: _ProductList2.default.button,\n        onClick: function onClick(e) {\n          return getMoreProducts(e, products.page);\n        } },\n      'Load More'\n    ),\n    _react2.default.createElement(_Footer2.default, null)\n  );\n}\nfunction mapStateToProps(state) {\n  return {\n    products: state.products,\n    carousel: state.carousel.data\n  };\n}\nfunction loadData(store) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  return Promise.all([store.dispatch((0, _products.fetchAllProducts)(1)), store.dispatch((0, _carousel.fetchCarousel)())]);\n}\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _withStyles2.default)(_ProductList2.default)((0, _reactRedux.connect)(mapStateToProps, { fetchAllProducts: _products.fetchAllProducts, fetchCarousel: _carousel.fetchCarousel })(ProductsList))\n};\n\n//# sourceURL=webpack:///./src/client/containers/ProductsListPage.js?");

/***/ }),

/***/ "./src/client/reducers/carousel.js":
/*!*****************************************!*\
  !*** ./src/client/reducers/carousel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ../actions/constants */ \"./src/client/actions/constants.js\");\n\nvar INITIAL_STATE = {\n  fetching: false,\n  data: [],\n  error: false,\n  page: 1\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.FETCH_CAROUSEL_REQUEST:\n      return _extends({}, state, {\n        fetching: true\n      });\n    case _constants.FETCH_CAROUSEL_SUCCESS:\n      return _extends({}, state, {\n        fetching: false,\n        data: action.payload\n      });\n    case _constants.FETCH_CAROUSEL_FAILURE:\n      return _extends({}, state, {\n        fetching: false,\n        error: true,\n        errorMessage: action.error\n        // case RESET_PRODUCTS: \n        //   return INITIAL_STATE\n      });default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/carousel.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _products = __webpack_require__(/*! ./products */ \"./src/client/reducers/products.js\");\n\nvar _products2 = _interopRequireDefault(_products);\n\nvar _product = __webpack_require__(/*! ./product */ \"./src/client/reducers/product.js\");\n\nvar _product2 = _interopRequireDefault(_product);\n\nvar _carousel = __webpack_require__(/*! ./carousel */ \"./src/client/reducers/carousel.js\");\n\nvar _carousel2 = _interopRequireDefault(_carousel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  products: _products2.default,\n  product: _product2.default,\n  carousel: _carousel2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/product.js":
/*!****************************************!*\
  !*** ./src/client/reducers/product.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ../actions/constants */ \"./src/client/actions/constants.js\");\n\nvar INITIAL_STATE = {\n  fetching: false,\n  productInfo: null,\n  error: false,\n  page: 1\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.FETCH_PRODUCT_BY_ID_REQUEST:\n      return _extends({}, state, {\n        fetching: true\n      });\n    case _constants.FETCH_PRODUCT_BY_ID_SUCCESS:\n      return _extends({}, state, {\n        fetching: false,\n        productInfo: action.payload\n      });\n    case _constants.FETCH_PRODUCT_BY_ID_FAILURE:\n      return _extends({}, state, {\n        fetching: false,\n        error: true,\n        errorMessage: action.error\n      });\n    case _constants.RESET_PRODUCT_BY_ID:\n      return INITIAL_STATE;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/product.js?");

/***/ }),

/***/ "./src/client/reducers/products.js":
/*!*****************************************!*\
  !*** ./src/client/reducers/products.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ../actions/constants */ \"./src/client/actions/constants.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar INITIAL_STATE = {\n  fetching: false,\n  data: [],\n  error: false,\n  page: 1\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.FETCH_PRODUCTS_REQUEST:\n      return _extends({}, state, {\n        fetching: true\n      });\n    case _constants.FETCH_PRODUCTS_SUCCESS:\n      return _extends({}, state, {\n        fetching: false,\n        data: state.page === 1 ? action.payload.data : [].concat(_toConsumableArray(state.data), _toConsumableArray(action.payload.data)),\n        page: action.payload.nextPage\n      });\n    case _constants.FETCH_PRODUCTS_FAILURE:\n      return _extends({}, state, {\n        fetching: false,\n        error: true,\n        errorMessage: action.error\n      });\n    case _constants.RESET_PRODUCTS:\n      return INITIAL_STATE;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/products.js?");

/***/ }),

/***/ "./src/client/styles/Carousel.scss":
/*!*****************************************!*\
  !*** ./src/client/styles/Carousel.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./Carousel.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Carousel.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/Carousel.scss?");

/***/ }),

/***/ "./src/client/styles/Footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Footer.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/Footer.scss?");

/***/ }),

/***/ "./src/client/styles/Header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Header.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/Header.scss?");

/***/ }),

/***/ "./src/client/styles/Product.scss":
/*!****************************************!*\
  !*** ./src/client/styles/Product.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./Product.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/Product.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/Product.scss?");

/***/ }),

/***/ "./src/client/styles/ProductElements.scss":
/*!************************************************!*\
  !*** ./src/client/styles/ProductElements.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./ProductElements.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductElements.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/ProductElements.scss?");

/***/ }),

/***/ "./src/client/styles/ProductList.scss":
/*!********************************************!*\
  !*** ./src/client/styles/ProductList.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./ProductList.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/ProductList.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles/ProductList.scss?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar creatingStore = function creatingStore() {\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n  return store;\n};\nexports.default = creatingStore;\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _StyleContext = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n\nvar _StyleContext2 = _interopRequireDefault(_StyleContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = function (req, store) {\n  var css = new Set(); // CSS for all rendered React components\n  var insertCss = function insertCss() {\n    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {\n      styles[_key] = arguments[_key];\n    }\n\n    return styles.forEach(function (style) {\n      return css.add(style._getCss());\n    });\n  };\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _StyleContext2.default.Provider,\n      { value: { insertCss: insertCss } },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { context: {}, location: req.path },\n        _react2.default.createElement(\n          'div',\n          null,\n          (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n        )\n      )\n    )\n  ));\n  return '<!DOCTYPE html>\\n    <html>\\n      <head>\\n        <style>' + [].concat(_toConsumableArray(css)).join('') + '</style>\\n        <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\" />\\n      </head>\\n      <body>\\n        <div id=\"root\">' + content + '</div>\\n        <script>\\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n        </script>\\n         <script src=\"/bundle.js\" defer></script>\\n      </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n// import './client/App.scss';\n//const path = require('path');\nvar app = (0, _express2.default)();\n//app.use(express.static(path.join(__dirname, 'public/')));\napp.use(_express2.default.static('public/'));\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)();\n  var id = '';\n  if (req.params && req.params['0'] && req.params['0'].includes('pdp')) {\n    console.log('request param id');\n    id = req.params['0'].split('/')[2];\n    console.log(id);\n  }\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store, id) : null;\n  });\n  //console.log('promise is ----->')\n  console.log(promises);\n  // promises.map((promise) => {\n  //   promise.then((data) => {\n  //     console.log('here is data we get');\n  //     console.log(data);\n  //   })\n  // })\n  Promise.all(promises).then(function (data) {\n    console.log('data returned is');\n    console.log(data);\n    console.log(\"store get state\");\n    console.log(store.getState());\n    res.send((0, _renderer2.default)(req, store));\n  });\n  //res.send(renderer(req, store));\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");\n\n//# sourceURL=webpack:///external_%22react-icons/fa%22?");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io\");\n\n//# sourceURL=webpack:///external_%22react-icons/io%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });