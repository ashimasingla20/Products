/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.scss":
/*!*****************************!*\
  !*** ./src/client/App.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/App.scss?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ProductsListPage = __webpack_require__(/*! ./containers/ProductsListPage */ \"./src/client/containers/ProductsListPage.js\");\n\nvar _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);\n\nvar _ProductPage = __webpack_require__(/*! ./containers/ProductPage */ \"./src/client/containers/ProductPage.js\");\n\nvar _ProductPage2 = _interopRequireDefault(_ProductPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routesArr = [_extends({}, _ProductsListPage2.default, {\n  path: '/products'\n}), _extends({}, _ProductPage2.default, {\n  path: '/pdp/:id'\n})];\nexports.default = routesArr;\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/constants.js":
/*!*****************************************!*\
  !*** ./src/client/actions/constants.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_PRODUCTS_REQUEST = exports.FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';\nvar FETCH_PRODUCTS_SUCCESS = exports.FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';\nvar FETCH_PRODUCTS_FAILURE = exports.FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';\nvar RESET_PRODUCTS = exports.RESET_PRODUCTS = 'RESET_PRODUCT';\n\nvar FETCH_PRODUCT_BY_ID_REQUEST = exports.FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';\nvar FETCH_PRODUCT_BY_ID_SUCCESS = exports.FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';\nvar FETCH_PRODUCT_BY_ID_FAILURE = exports.FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';\nvar RESET_PRODUCT_BY_ID = exports.RESET_PRODUCT_BY_ID = 'RESET_PRODUCT_BY_ID';\n\n//# sourceURL=webpack:///./src/client/actions/constants.js?");

/***/ }),

/***/ "./src/client/actions/product.js":
/*!***************************************!*\
  !*** ./src/client/actions/product.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchProductById = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/client/actions/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchProductById = exports.fetchProductById = function fetchProductById() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, id) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({ type: _constants.FETCH_PRODUCT_BY_ID_REQUEST });\n              _context.prev = 1;\n              _context.next = 4;\n              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products/1');\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({\n                type: _constants.FETCH_PRODUCT_BY_ID_SUCCESS,\n                payload: res.data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](1);\n\n              dispatch({\n                type: _constants.FETCH_PRODUCT_BY_ID_FAILURE,\n                payload: _context.t0\n              });\n\n            case 11:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[1, 8]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/product.js?");

/***/ }),

/***/ "./src/client/actions/products.js":
/*!****************************************!*\
  !*** ./src/client/actions/products.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchAllProducts = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/client/actions/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchAllProducts = exports.fetchAllProducts = function fetchAllProducts() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({ type: _constants.FETCH_PRODUCTS_REQUEST });\n              _context.prev = 1;\n              _context.next = 4;\n              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products?page=1');\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({\n                type: _constants.FETCH_PRODUCTS_SUCCESS,\n                payload: res.data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](1);\n\n              dispatch({\n                type: _constants.FETCH_PRODUCTS_FAILURE,\n                payload: _context.t0\n              });\n\n            case 11:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[1, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/products.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  return _react2.default.createElement(\n    'footer',\n    null,\n    'Footer'\n  );\n};\n\n//# sourceURL=webpack:///./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    'nav',\n    null,\n    'Header'\n  );\n};\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/containers/ProductPage.js":
/*!**********************************************!*\
  !*** ./src/client/containers/ProductPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _product = __webpack_require__(/*! ../actions/product */ \"./src/client/actions/product.js\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! ../components/Footer */ \"./src/client/components/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _ErrorBoundaries = __webpack_require__(/*! ../components/ErrorBoundaries */ \"./src/client/components/ErrorBoundaries.js\");\n\nvar _ErrorBoundaries2 = _interopRequireDefault(_ErrorBoundaries);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ProductPage(props) {\n  var _useState = (0, _react.useState)(props.product),\n      _useState2 = _slicedToArray(_useState, 2),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    props.fetchProductById();\n  }, []);\n\n  if (!product) return null;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      'div',\n      null,\n      'Here\\'s a ProductPage:'\n    ),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _ErrorBoundaries2.default,\n        null,\n        product.productInfo.name\n      )\n    ),\n    _react2.default.createElement(_Footer2.default, null)\n  );\n}\nfunction mapStateToProps(state) {\n  return { product: state.product };\n}\nfunction loadData(store) {\n  return store.dispatch((0, _product.fetchProductById)());\n}\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProductById: _product.fetchProductById })(ProductPage)\n};\n\n//# sourceURL=webpack:///./src/client/containers/ProductPage.js?");

/***/ }),

/***/ "./src/client/containers/ProductsListPage.js":
/*!***************************************************!*\
  !*** ./src/client/containers/ProductsListPage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ProductElements = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _products = __webpack_require__(/*! ../actions/products */ \"./src/client/actions/products.js\");\n\nvar _Header = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! ../components/Footer */ \"./src/client/components/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductElements = exports.ProductElements = function ProductElements(props) {\n  return props.products.map(function (product, index) {\n    return _react2.default.createElement(\n      'li',\n      { key: index },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/pdp/' + product.id },\n        _react2.default.createElement('img', { src: product.img, alt: '' + product.name })\n      ),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/pdp/' + product.id },\n        product.name\n      )\n    );\n  });\n};\n\nvar ProductsList = function (_Component) {\n  _inherits(ProductsList, _Component);\n\n  function ProductsList() {\n    _classCallCheck(this, ProductsList);\n\n    return _possibleConstructorReturn(this, (ProductsList.__proto__ || Object.getPrototypeOf(ProductsList)).apply(this, arguments));\n  }\n\n  _createClass(ProductsList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchAllProducts();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.props.products);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n          'div',\n          null,\n          'Here\\'s a big list of users:'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _react2.default.createElement(ProductElements, { products: this.props.products })\n        ),\n        _react2.default.createElement(_Footer2.default, null)\n      );\n    }\n  }]);\n\n  return ProductsList;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return { products: state.products.data };\n}\nfunction loadData(store) {\n  return store.dispatch((0, _products.fetchAllProducts)());\n}\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAllProducts: _products.fetchAllProducts })(ProductsList)\n};\n\n//# sourceURL=webpack:///./src/client/containers/ProductsListPage.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _products = __webpack_require__(/*! ./products */ \"./src/client/reducers/products.js\");\n\nvar _products2 = _interopRequireDefault(_products);\n\nvar _product = __webpack_require__(/*! ./product */ \"./src/client/reducers/product.js\");\n\nvar _product2 = _interopRequireDefault(_product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  products: _products2.default,\n  product: _product2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ../actions/constants */ \"./src/client/actions/constants.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar INITIAL_STATE = {\n  fetching: false,\n  data: [],\n  error: false,\n  page: 1\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.FETCH_PRODUCTS_REQUEST:\n      return _extends({}, state, {\n        fetching: true\n      });\n    case _constants.FETCH_PRODUCTS_SUCCESS:\n      return _extends({}, state, {\n        fetching: false,\n        data: state.page === 1 ? action.payload.data : [].concat(_toConsumableArray(state.data), [action.payload.data])\n      });\n    case _constants.FETCH_PRODUCTS_FAILURE:\n      return _extends({}, state, {\n        fetching: false,\n        error: true,\n        errorMessage: action.error\n      });\n    case _constants.RESET_PRODUCTS:\n      return INITIAL_STATE;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/products.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar creatingStore = function creatingStore() {\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n  return store;\n};\nexports.default = creatingStore;\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n  var context = {\n    insertCss: function insertCss() {\n      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {\n        styles[_key] = arguments[_key];\n      }\n\n      var removeCss = styles.map(function (x) {\n        return x._insertCss();\n      });\n      return function () {\n        removeCss.forEach(function (f) {\n          return f();\n        });\n      };\n    }\n  };\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { context: { content: content }, location: req.path },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n  return '\\n    <html>\\n      <head>\\n        <link rel=\"stylesheet\" href=\"main.css\">\\n      </head>\\n      <body>\\n        <div id=\"root\">' + content + '</div>\\n        <script>\\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n        </script>\\n        <script type=\"text/babel\" src=\"bundle.js\"></script>\\n      </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\n__webpack_require__(/*! ./client/App.scss */ \"./src/client/App.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//const path = require('path');\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)();\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send((0, _renderer2.default)(req, store));\n  });\n  //res.send(renderer(req, store));\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

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