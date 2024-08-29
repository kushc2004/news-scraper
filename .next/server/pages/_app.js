/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/fontawesome.js":
/*!****************************!*\
  !*** ./lib/fontawesome.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__]);\n([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// lib/fontawesome.js\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's handled by the application\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSearch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZm9udGF3ZXNvbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBQ3VDO0FBQ0M7QUFDRjtBQUMzREUscUVBQU1BLENBQUNDLFVBQVUsR0FBRyxPQUFPLDhGQUE4RjtBQUV6SEgsc0VBQU9BLENBQUNJLEdBQUcsQ0FBQ0gsdUVBQVFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC1mcm9udGVuZC8uL2xpYi9mb250YXdlc29tZS5qcz9lZDQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9mb250YXdlc29tZS5qc1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZTsgLy8gVGVsbCBGb250QXdlc29tZSB0byBza2lwIGFkZGluZyB0aGUgQ1NTIGF1dG9tYXRpY2FsbHkgc2luY2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBhcHBsaWNhdGlvblxuXG5saWJyYXJ5LmFkZChmYVNlYXJjaCk7XG4iXSwibmFtZXMiOlsibGlicmFyeSIsImZhU2VhcmNoIiwiY29uZmlnIiwiYXV0b0FkZENzcyIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fontawesome.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/globals.css */ \"./public/globals.css\");\n/* harmony import */ var _public_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/fontawesome */ \"./lib/fontawesome.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_fontawesome__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// app/_app.tsx or pages/_app.tsx (depending on your structure)\n\n // Import your global styles\n // Import FontAwesome CSS\n // Import the configuration file\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/kush/Files/Interns/Intern-Xellerates/Xellerates/news-scraper/news-scraper/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUErRDs7QUFFakMsQ0FBQyw0QkFBNEI7QUFDTCxDQUFDLHlCQUF5QjtBQUNwRCxDQUFDLGdDQUFnQztBQUk5QyxTQUFTQSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9fYXBwLnRzeCBvciBwYWdlcy9fYXBwLnRzeCAoZGVwZW5kaW5nIG9uIHlvdXIgc3RydWN0dXJlKVxuXG5pbXBvcnQgJ0AvcHVibGljL2dsb2JhbHMuY3NzJzsgLy8gSW1wb3J0IHlvdXIgZ2xvYmFsIHN0eWxlc1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7IC8vIEltcG9ydCBGb250QXdlc29tZSBDU1NcbmltcG9ydCAnLi4vbGliL2ZvbnRhd2Vzb21lJzsgLy8gSW1wb3J0IHRoZSBjb25maWd1cmF0aW9uIGZpbGVcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./public/globals.css":
/*!****************************!*\
  !*** ./public/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@fortawesome"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();