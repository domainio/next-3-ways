module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/details/[id].js":
/*!*******************************!*\
  !*** ./pages/details/[id].js ***!
  \*******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/omega/dev/try/next-js/next-3-ways/ssg/pages/details/[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Details = ({\n  user\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"User Details\"), __jsx(\"div\", {\n    className: \"card text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, user.name)), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: user.image,\n    with: \"100rem\",\n    height: \"100rem\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }), __jsx(\"h5\", {\n    className: \"card-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, user.username), __jsx(\"p\", {\n    className: \"card-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, user.address.zipcode), __jsx(\"p\", {\n    className: \"card-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, user.address.city), __jsx(\"p\", {\n    className: \"card-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, user.address.street)), __jsx(\"div\", {\n    className: \"card-footer text-muted\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, user.phone)));\n};\n\nconst getStaticProps = async ctx => {\n  const {\n    id\n  } = ctx.params; // Fetch data from external API\n\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://jsonplaceholder.typicode.com/users');\n  const user = data.find(user => user.id.toString() === id);\n  user['image'] = `https://api.adorable.io/avatars/${id}`; // Pass data to the page via props\n\n  return {\n    props: {\n      user\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://jsonplaceholder.typicode.com/users');\n  const paths = data.map(user => ({\n    params: {\n      id: user.id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Details));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLy5qcz9hYTMyIl0sIm5hbWVzIjpbIkRldGFpbHMiLCJ1c2VyIiwibmFtZSIsImltYWdlIiwidXNlcm5hbWUiLCJhZGRyZXNzIiwiemlwY29kZSIsImNpdHkiLCJzdHJlZXQiLCJwaG9uZSIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwiaWQiLCJwYXJhbXMiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJmaW5kIiwidG9TdHJpbmciLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzVCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFJLENBQUNDLElBQVYsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBZjtBQUFzQixRQUFJLEVBQUMsUUFBM0I7QUFBb0MsVUFBTSxFQUFDLFFBQTNDO0FBQW9ELE9BQUcsRUFBQyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJGLElBQUksQ0FBQ0csUUFBakMsQ0FGRixFQUdFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkgsSUFBSSxDQUFDSSxPQUFMLENBQWFDLE9BQXZDLENBSEYsRUFJRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJMLElBQUksQ0FBQ0ksT0FBTCxDQUFhRSxJQUF2QyxDQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCTixJQUFJLENBQUNJLE9BQUwsQ0FBYUcsTUFBdkMsQ0FMRixDQUpGLEVBV0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLENBQUNRLEtBRFIsQ0FYRixDQUZGLENBREY7QUFvQkQsQ0FyQkQ7O0FBdUJPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDM0MsUUFBTTtBQUFFQztBQUFGLE1BQVNELEdBQUcsQ0FBQ0UsTUFBbkIsQ0FEMkMsQ0FFM0M7O0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDRDQUFWLENBQXZCO0FBQ0EsUUFBTWYsSUFBSSxHQUFHYSxJQUFJLENBQUNHLElBQUwsQ0FBVWhCLElBQUksSUFBSUEsSUFBSSxDQUFDVyxFQUFMLENBQVFNLFFBQVIsT0FBdUJOLEVBQXpDLENBQWI7QUFDQVgsTUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFpQixtQ0FBa0NXLEVBQUcsRUFBdEQsQ0FMMkMsQ0FNM0M7O0FBQ0EsU0FBTztBQUFFTyxTQUFLLEVBQUU7QUFBRWxCO0FBQUY7QUFBVCxHQUFQO0FBQ0QsQ0FSTTtBQVVBLE1BQU1tQixjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNO0FBQUVOO0FBQUYsTUFBVyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsQ0FBdkI7QUFDQSxRQUFNSyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTckIsSUFBSSxLQUFLO0FBQUVZLFVBQU0sRUFBRTtBQUFFRCxRQUFFLEVBQUVYLElBQUksQ0FBQ1csRUFBTCxDQUFRTSxRQUFSO0FBQU47QUFBVixHQUFMLENBQWIsQ0FBZDtBQUNBLFNBQU87QUFDTEcsU0FESztBQUVMRSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FQTTtBQVVRQyw2SEFBVSxDQUFDeEIsT0FBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2RldGFpbHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRGV0YWlscyA9ICh7IHVzZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VXNlciBEZXRhaWxzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGgzPnt1c2VyLm5hbWV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2V9IHdpdGg9XCIxMDByZW1cIiBoZWlnaHQ9XCIxMDByZW1cIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dXNlci5hZGRyZXNzLnppcGNvZGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt1c2VyLmFkZHJlc3MuY2l0eX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzZXIuYWRkcmVzcy5zdHJlZXR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAge3VzZXIucGhvbmV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjdHgucGFyYW1zO1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICBjb25zdCB1c2VyID0gZGF0YS5maW5kKHVzZXIgPT4gdXNlci5pZC50b1N0cmluZygpID09PSBpZCk7XG4gIHVzZXJbJ2ltYWdlJ10gPSBgaHR0cHM6Ly9hcGkuYWRvcmFibGUuaW8vYXZhdGFycy8ke2lkfWA7XG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9IH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCh1c2VyID0+ICh7IHBhcmFtczogeyBpZDogdXNlci5pZC50b1N0cmluZygpIH0gfSkpXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihEZXRhaWxzKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details/[id].js\n");

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/details/[id].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/omega/dev/try/next-js/next-3-ways/ssg/pages/details/[id].js */"./pages/details/[id].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });