webpackHotUpdate("static/development/pages/list.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcz8xZGExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ }),

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/omega/dev/try/next-js/next-3-ways/ssr/pages/list.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar List = function List(props) {\n  _s();\n\n  // const [users, setUsers] = useState(props.users);\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      users = _useState[0],\n      setUsers = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getAsync = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://jsonplaceholder.typicode.com/users');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setUsers(data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getAsync() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getAsync();\n  }, []);\n\n  var renderItem = function renderItem(_item) {\n    var item = _objectSpread(_objectSpread({}, _item), {}, {\n      image: \"https://api.adorable.io/avatars/\".concat(_item.id)\n    });\n\n    return __jsx(\"div\", {\n      className: \"media\",\n      key: item.id,\n      style: {\n        marginBottom: '10px',\n        alignItems: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      src: item.image,\n      className: \"mr-3\",\n      width: \"30rem\",\n      height: \"30rem\",\n      alt: \"\",\n      style: {\n        borderRadius: '15rem'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }), __jsx(\"div\", {\n      className: \"media-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }, __jsx(\"h5\", {\n      className: \"mt-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, item.name)), __jsx(\"button\", {\n      type: \"button\",\n      className: \"btn btn-outline-primary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: {\n        pathname: \"/details\",\n        query: {\n          user: JSON.stringify(item)\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, \"Details\"))));\n  };\n\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"List of Users\"), users.map(function (user) {\n    return renderItem(user);\n  }));\n}; // List.getInitialProps = async () => {\n//     // if (typeof window === 'undefined') {\n//     // console.log('server side');\n//   // }\n//   console.log('getInitialProps')\n//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')\n//   return { users: data };\n// }\n// export const getServerSideProps = async (ctx) => {\n//   // Fetch data from external API\n//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')\n//   // Pass data to the page via props\n//   return { props: { users: data } }\n// }\n\n\n_s(List, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzP2ExNWMiXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlRWZmZWN0IiwiZ2V0QXN5bmMiLCJheGlvcyIsImdldCIsImRhdGEiLCJyZW5kZXJJdGVtIiwiX2l0ZW0iLCJpdGVtIiwiaW1hZ2UiLCJpZCIsIm1hcmdpbkJvdHRvbSIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJuYW1lIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFdEI7QUFGc0Isa0JBSUlDLHNEQUFRLENBQUMsRUFBRCxDQUpaO0FBQUEsTUFJZkMsS0FKZTtBQUFBLE1BSVJDLFFBSlE7O0FBS3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRO0FBQUEsa01BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw0Q0FBVixDQURSOztBQUFBO0FBQUE7QUFDUEMsb0JBRE8sb0JBQ1BBLElBRE87QUFFZkwsd0JBQVEsQ0FBQ0ssSUFBRCxDQUFSOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVJILFFBQVE7QUFBQTtBQUFBO0FBQUEsT0FBZDs7QUFJQUEsWUFBUTtBQUNULEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFFBQU1DLElBQUksbUNBQ0xELEtBREs7QUFFUkUsV0FBSyw0Q0FBcUNGLEtBQUssQ0FBQ0csRUFBM0M7QUFGRyxNQUFWOztBQUlBLFdBQ0U7QUFDRSxlQUFTLEVBQUMsT0FEWjtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRSxFQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xDLG9CQUFZLEVBQUUsTUFEVDtBQUVMQyxrQkFBVSxFQUFFO0FBRlAsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0U7QUFDRSxTQUFHLEVBQUVKLElBQUksQ0FBQ0MsS0FEWjtBQUVFLGVBQVMsRUFBQyxNQUZaO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxZQUFNLEVBQUMsT0FKVDtBQUtFLFNBQUcsRUFBQyxFQUxOO0FBTUUsV0FBSyxFQUFFO0FBQUVJLG9CQUFZLEVBQUU7QUFBaEIsT0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFlRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0JMLElBQUksQ0FBQ00sSUFBM0IsQ0FERixDQWZGLEVBa0JFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLHlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUNFLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFLFVBRE47QUFFSkMsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLElBQWY7QUFBUjtBQUZILE9BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsQ0FERixDQWxCRixDQURGO0FBK0JELEdBcENEOztBQXNDQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR1QsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUFILElBQUk7QUFBQSxXQUFJWCxVQUFVLENBQUNXLElBQUQsQ0FBZDtBQUFBLEdBQWQsQ0FGSCxDQURGO0FBTUQsQ0F6REQsQyxDQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F6RU1yQixJOztLQUFBQSxJO0FBMkVTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHtcblxuICAvLyBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJzKTtcblxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICAgICAgc2V0VXNlcnMoZGF0YSk7XG4gICAgfVxuICAgIGdldEFzeW5jKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJJdGVtID0gKF9pdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIC4uLl9pdGVtLFxuICAgICAgaW1hZ2U6IGBodHRwczovL2FwaS5hZG9yYWJsZS5pby9hdmF0YXJzLyR7X2l0ZW0uaWR9YCxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWVkaWFcIlxuICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgfX0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItM1wiXG4gICAgICAgICAgd2lkdGg9XCIzMHJlbVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzByZW1cIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMTVyZW0nIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0wXCI+e2l0ZW0ubmFtZX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvZGV0YWlsc1wiLFxuICAgICAgICAgICAgICBxdWVyeTogeyB1c2VyOiBKU09OLnN0cmluZ2lmeShpdGVtKSB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxhPkRldGFpbHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGgxPkxpc3Qgb2YgVXNlcnM8L2gxPlxuICAgICAge3VzZXJzLm1hcCh1c2VyID0+IHJlbmRlckl0ZW0odXNlcikpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBMaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgICAvLyBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnc2VydmVyIHNpZGUnKTtcbi8vICAgLy8gfVxuLy8gICBjb25zb2xlLmxvZygnZ2V0SW5pdGlhbFByb3BzJylcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4vLyAgIHJldHVybiB7IHVzZXJzOiBkYXRhIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4vLyAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4vLyAgIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlcnM6IGRhdGEgfSB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

})