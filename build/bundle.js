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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_PRODUCTS_REQUEST = exports.FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
var FETCH_PRODUCTS_SUCCESS = exports.FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
var FETCH_PRODUCTS_FAILURE = exports.FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
var RESET_PRODUCTS = exports.RESET_PRODUCTS = 'RESET_PRODUCT';

var FETCH_PRODUCT_BY_ID_REQUEST = exports.FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
var FETCH_PRODUCT_BY_ID_SUCCESS = exports.FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
var FETCH_PRODUCT_BY_ID_FAILURE = exports.FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';
var RESET_PRODUCT_BY_ID = exports.RESET_PRODUCT_BY_ID = 'RESET_PRODUCT_BY_ID';

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("react-router-dom");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ProductsListPage = __webpack_require__(16);

var _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);

var _ProductPage = __webpack_require__(15);

var _ProductPage2 = _interopRequireDefault(_ProductPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routesArr = [_extends({}, _ProductsListPage2.default, {
  path: '/products'
}), _extends({}, _ProductPage2.default, {
  path: '/pdp/:id'
})];
exports.default = routesArr;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'footer',
    null,
    'Footer'
  );
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'nav',
    null,
    'Header'
  );
};
exports.default = Header;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("react-router-config");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(22);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(21);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(20);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(8);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
  //res.send(renderer(req, store));
});
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProductById = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchProductById = exports.fetchProductById = function fetchProductById() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, id) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: _constants.FETCH_PRODUCT_BY_ID_REQUEST });
              _context.prev = 1;
              _context.next = 4;
              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products/1');

            case 4:
              res = _context.sent;

              console.log(res.data);
              dispatch({
                type: _constants.FETCH_PRODUCT_BY_ID_SUCCESS,
                payload: res.data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](1);

              dispatch({
                type: _constants.FETCH_PRODUCT_BY_ID_FAILURE,
                payload: _context.t0
              });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllProducts = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAllProducts = exports.fetchAllProducts = function fetchAllProducts() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: _constants.FETCH_PRODUCTS_REQUEST });
              _context.prev = 1;
              _context.next = 4;
              return _axios2.default.get('https://node-sample-api.herokuapp.com/api/products?page=1');

            case 4:
              res = _context.sent;

              dispatch({
                type: _constants.FETCH_PRODUCTS_SUCCESS,
                payload: res.data
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              dispatch({
                type: _constants.FETCH_PRODUCTS_FAILURE,
                payload: _context.t0
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = { hasError: false };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, errorInfo) {
      logErrorToMyService(error, errorInfo);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasError) {
        return _react2.default.createElement(
          'h1',
          null,
          'Something went wrong.'
        );
      }

      return this.props.children;
    }
  }], [{
    key: 'getDerivedStateFromError',
    value: function getDerivedStateFromError(error) {
      return { hasError: true };
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

exports.default = ErrorBoundary;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _product = __webpack_require__(12);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

var _ErrorBoundaries = __webpack_require__(14);

var _ErrorBoundaries2 = _interopRequireDefault(_ErrorBoundaries);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductPage(props) {
  var _useState = (0, _react.useState)(props.product),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  (0, _react.useEffect)(function () {
    props.fetchProductById();
  }, []);
  console.log(product);
  if (!product) return null;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      null,
      'Here\'s a ProductPage:'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ErrorBoundaries2.default,
        null,
        product.productInfo.name
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
}
function mapStateToProps(state) {
  console.log('getting data');
  return { product: state.product };
}
function loadData(store) {
  return store.dispatch((0, _product.fetchProductById)());
}
exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProductById: _product.fetchProductById })(ProductPage)
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductElements = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _products = __webpack_require__(13);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductElements = exports.ProductElements = function ProductElements(props) {
  return props.products.map(function (product, index) {
    return _react2.default.createElement(
      'li',
      { key: index },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/pdp/' + product.id },
        _react2.default.createElement('img', { src: product.img, alt: '' + product.name })
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/pdp/' + product.id },
        product.name
      )
    );
  });
};

var ProductsList = function (_Component) {
  _inherits(ProductsList, _Component);

  function ProductsList() {
    _classCallCheck(this, ProductsList);

    return _possibleConstructorReturn(this, (ProductsList.__proto__ || Object.getPrototypeOf(ProductsList)).apply(this, arguments));
  }

  _createClass(ProductsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAllProducts();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.products);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          null,
          'Here\'s a big list of users:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(ProductElements, { products: this.props.products })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return ProductsList;
}(_react.Component);

function mapStateToProps(state) {
  return { products: state.products.data };
}
function loadData(store) {
  return store.dispatch((0, _products.fetchAllProducts)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAllProducts: _products.fetchAllProducts })(ProductsList)
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _products = __webpack_require__(19);

var _products2 = _interopRequireDefault(_products);

var _product = __webpack_require__(18);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  products: _products2.default,
  product: _product2.default
});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var INITIAL_STATE = {
  fetching: false,
  productInfo: null,
  error: false,
  page: 1
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.FETCH_PRODUCT_BY_ID_REQUEST:
      return _extends({}, state, {
        fetching: true
      });
    case _constants.FETCH_PRODUCT_BY_ID_SUCCESS:
      return _extends({}, state, {
        fetching: false,
        productInfo: action.payload
      });
    case _constants.FETCH_PRODUCT_BY_ID_FAILURE:
      return _extends({}, state, {
        fetching: false,
        error: true,
        errorMessage: action.error
      });
    case _constants.RESET_PRODUCT_BY_ID:
      return INITIAL_STATE;
    default:
      return state;
  }
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  fetching: false,
  data: [],
  error: false,
  page: 1
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.FETCH_PRODUCTS_REQUEST:
      return _extends({}, state, {
        fetching: true
      });
    case _constants.FETCH_PRODUCTS_SUCCESS:
      return _extends({}, state, {
        fetching: false,
        data: state.page === 1 ? action.payload.data : [].concat(_toConsumableArray(state.data), [action.payload.data])
      });
    case _constants.FETCH_PRODUCTS_FAILURE:
      return _extends({}, state, {
        fetching: false,
        error: true,
        errorMessage: action.error
      });
    case _constants.RESET_PRODUCTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var creatingStore = function creatingStore() {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};
exports.default = creatingStore;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(8);

var _reactRedux = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(25);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var context = {
    insertCss: function insertCss() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      var removeCss = styles.map(function (x) {
        return x._insertCss();
      });
      return function () {
        removeCss.forEach(function (f) {
          return f();
        });
      };
    }
  };
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: { content: content }, location: req.path },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script type="text/babel" src="bundle.js"></script>\n      </body>\n    </html>';
};

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(10);


/***/ }
/******/ ]);