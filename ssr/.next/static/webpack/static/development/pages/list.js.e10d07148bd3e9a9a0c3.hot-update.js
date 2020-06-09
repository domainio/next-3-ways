webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/omega/dev/try/next-js/next-3-ways/ssr/pages/list.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar List = function List(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.users),\n      users = _useState[0],\n      setUsers = _useState[1]; // useEffect(() => {\n  //   const getAsync = async () => {\n  //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')\n  //     setUsers(data);\n  //   }\n  //   getAsync();\n  // }, []);\n\n\n  var renderItem = function renderItem(_item) {\n    var item = _objectSpread(_objectSpread({}, _item), {}, {\n      image: \"https://api.adorable.io/avatars/\".concat(_item.id)\n    });\n\n    return __jsx(\"div\", {\n      className: \"media\",\n      key: item.id,\n      style: {\n        marginBottom: '10px',\n        alignItems: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      src: item.image,\n      className: \"mr-3\",\n      width: \"30rem\",\n      height: \"30rem\",\n      alt: \"\",\n      style: {\n        borderRadius: '15rem'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }), __jsx(\"div\", {\n      className: \"media-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, __jsx(\"h5\", {\n      className: \"mt-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }, item.name)), __jsx(\"button\", {\n      type: \"button\",\n      className: \"btn btn-outline-primary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: {\n        pathname: \"/details\",\n        query: {\n          user: JSON.stringify(item)\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }, \"Details\"))));\n  };\n\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"List of Users\"), users.map(function (user) {\n    return renderItem(user);\n  }));\n};\n\n_s(List, \"6ol0S0bHVCrhe1FTosOYvl3IprM=\");\n\n_c = List;\nList.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var _yield$axios$get, data;\n\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          // if (typeof window === 'undefined') {\n          // console.log('server side');\n          // }\n          console.log('getInitialProps');\n          _context.next = 3;\n          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://jsonplaceholder.typicode.com/users');\n\n        case 3:\n          _yield$axios$get = _context.sent;\n          data = _yield$axios$get.data;\n          return _context.abrupt(\"return\", {\n            users: data\n          });\n\n        case 6:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})); // export const getServerSideProps = async (ctx) => {\n//   // Fetch data from external API\n//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')\n//   // Pass data to the page via props\n//   return { props: { users: data } }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LmpzP2ExNWMiXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwicmVuZGVySXRlbSIsIl9pdGVtIiwiaXRlbSIsImltYWdlIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwibmFtZSIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDRCxLQUFLLENBQUNFLEtBQVAsQ0FGWjtBQUFBLE1BRWZBLEtBRmU7QUFBQSxNQUVSQyxRQUZRLGlCQUl0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFFBQU1DLElBQUksbUNBQ0xELEtBREs7QUFFUkUsV0FBSyw0Q0FBcUNGLEtBQUssQ0FBQ0csRUFBM0M7QUFGRyxNQUFWOztBQUlBLFdBQ0U7QUFDRSxlQUFTLEVBQUMsT0FEWjtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRSxFQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xDLG9CQUFZLEVBQUUsTUFEVDtBQUVMQyxrQkFBVSxFQUFFO0FBRlAsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0U7QUFDRSxTQUFHLEVBQUVKLElBQUksQ0FBQ0MsS0FEWjtBQUVFLGVBQVMsRUFBQyxNQUZaO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxZQUFNLEVBQUMsT0FKVDtBQUtFLFNBQUcsRUFBQyxFQUxOO0FBTUUsV0FBSyxFQUFFO0FBQUVJLG9CQUFZLEVBQUU7QUFBaEIsT0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFlRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0JMLElBQUksQ0FBQ00sSUFBM0IsQ0FERixDQWZGLEVBa0JFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLHlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUNFLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFLFVBRE47QUFFSkMsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLElBQWY7QUFBUjtBQUZILE9BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsQ0FERixDQWxCRixDQURGO0FBK0JELEdBcENEOztBQXNDQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0osS0FBSyxDQUFDZ0IsR0FBTixDQUFVLFVBQUFILElBQUk7QUFBQSxXQUFJWCxVQUFVLENBQUNXLElBQUQsQ0FBZDtBQUFBLEdBQWQsQ0FGSCxDQURGO0FBTUQsQ0F4REQ7O0dBQU1oQixJOztLQUFBQSxJO0FBMEROQSxJQUFJLENBQUNvQixlQUFMLGlNQUF1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0E7QUFDRjtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFKcUI7QUFBQSxpQkFLRUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDRDQUFWLENBTEY7O0FBQUE7QUFBQTtBQUtiQyxjQUxhLG9CQUtiQSxJQUxhO0FBQUEsMkNBTWQ7QUFBRXRCLGlCQUFLLEVBQUVzQjtBQUFULFdBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkIsRyxDQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZXpCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUocHJvcHMudXNlcnMpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgZ2V0QXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLy8gICAgIHNldFVzZXJzKGRhdGEpO1xuICAvLyAgIH1cbiAgLy8gICBnZXRBc3luYygpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVySXRlbSA9IChfaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAuLi5faXRlbSxcbiAgICAgIGltYWdlOiBgaHR0cHM6Ly9hcGkuYWRvcmFibGUuaW8vYXZhdGFycy8ke19pdGVtLmlkfWAsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhXCJcbiAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgIH19PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTNcIlxuICAgICAgICAgIHdpZHRoPVwiMzByZW1cIlxuICAgICAgICAgIGhlaWdodD1cIjMwcmVtXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzE1cmVtJyB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMFwiPntpdGVtLm5hbWV9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2RldGFpbHNcIixcbiAgICAgICAgICAgICAgcXVlcnk6IHsgdXNlcjogSlNPTi5zdHJpbmdpZnkoaXRlbSkgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8YT5EZXRhaWxzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxoMT5MaXN0IG9mIFVzZXJzPC9oMT5cbiAgICAgIHt1c2Vycy5tYXAodXNlciA9PiByZW5kZXJJdGVtKHVzZXIpKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlcnZlciBzaWRlJyk7XG4gIC8vIH1cbiAgY29uc29sZS5sb2coJ2dldEluaXRpYWxQcm9wcycpXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICByZXR1cm4geyB1c2VyczogZGF0YSB9O1xufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuLy8gICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuLy8gICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHVzZXJzOiBkYXRhIH0gfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

})