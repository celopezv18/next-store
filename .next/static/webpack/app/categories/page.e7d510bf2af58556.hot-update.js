"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/categories/page",{

/***/ "(app-pages-browser)/./src/app/categories/page.js":
/*!************************************!*\
  !*** ./src/app/categories/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/wooCommerceApi */ \"(app-pages-browser)/./utils/wooCommerceApi.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CategoryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CategoryCard */ \"(app-pages-browser)/./src/components/CategoryCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n //import API handler\n\n\nconst CategoriesPage = ()=>{\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchCategories = async ()=>{\n            const data = await (0,_utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_1__.getCategories)();\n            if (data.length > 0) {\n                setCategories(data);\n            } else {\n                setCategories([]);\n            }\n            setLoading(false);\n        };\n        fetchCategories();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n            marginTop: \"1rem\"\n        },\n        children: \"Loading Categories...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6\",\n        children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                category: category\n            }, category.id, false, {\n                fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoriesPage, \"Ku/3fYTZ4p+HhLbl/Ex0fsiHh1U=\");\n_c = CategoriesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriesPage);\nvar _c;\n$RefreshReg$(_c, \"CategoriesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0ZWdvcmllcy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzhELENBQUUsb0JBQW9CO0FBQ3hDO0FBQ2E7QUFFekQsTUFBTUksaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sa0JBQWtCO1lBRXpCLE1BQU1DLE9BQU8sTUFBTVYsb0VBQWFBO1lBQ2hDLElBQUdVLEtBQUtDLE1BQU0sR0FBRyxHQUFFO2dCQUNwQkwsY0FBY0k7WUFDYixPQUFLO2dCQUNKSixjQUFjLEVBQUU7WUFDakI7WUFFQUUsV0FBVztRQUNiO1FBRUdDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUYsU0FBUyxxQkFBTyw4REFBQ0s7UUFBRUMsT0FBTztZQUFFQyxXQUFXO1FBQU87a0JBQUc7Ozs7OztJQUVyRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWlgsV0FBV1ksR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDZixnRUFBWUE7Z0JBQW1CZSxVQUFVQTtlQUF2QkEsU0FBU0MsRUFBRTs7Ozs7Ozs7OztBQUl0QztHQTdCTWY7S0FBQUE7QUErQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXRlZ29yaWVzL3BhZ2UuanM/NGY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3dvb0NvbW1lcmNlQXBpJzsgIC8vaW1wb3J0IEFQSSBoYW5kbGVyXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXRlZ29yeUNhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXRlZ29yeUNhcmQnO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBcclxuXHQgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XHJcblx0ICBpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0c2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHQgIH1lbHNle1xyXG5cdFx0ICBzZXRDYXRlZ29yaWVzKFtdKTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblx0fVxyXG5cdFxyXG4gICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScgfX0+TG9hZGluZyBDYXRlZ29yaWVzLi4uPC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBwLTZcIj5cclxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgIDxDYXRlZ29yeUNhcmQga2V5PXtjYXRlZ29yeS5pZH0gY2F0ZWdvcnk9e2NhdGVnb3J5fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzUGFnZTtcclxuIl0sIm5hbWVzIjpbImdldENhdGVnb3JpZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhdGVnb3J5Q2FyZCIsIkNhdGVnb3JpZXNQYWdlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoQ2F0ZWdvcmllcyIsImRhdGEiLCJsZW5ndGgiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJjYXRlZ29yeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/categories/page.js\n"));

/***/ })

});