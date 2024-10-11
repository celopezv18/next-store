"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/categories/[slug]/page",{

/***/ "(app-pages-browser)/./src/app/categories/[slug]/page.js":
/*!*******************************************!*\
  !*** ./src/app/categories/[slug]/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/wooCommerceApi */ \"(app-pages-browser)/./utils/wooCommerceApi.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ProductCard */ \"(app-pages-browser)/./src/components/ProductCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // API helper\n\nconst CategoryPage = (param)=>{\n    let { params } = param;\n    _s();\n    const { slug } = params;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [dataProducts, setDataProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCategoryProduct = async ()=>{\n            // Fetch products by category slug\n            const products1 = await (0,_utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_2__.getProductsByCategory)(slug);\n            if (products1.length > 0) {\n                setDataProducts(data);\n            } else {\n                setDataProducts([]);\n            }\n            setLoading(false);\n        };\n        fetchCategoryProduct();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n            marginTop: \"1rem\"\n        },\n        children: \"Loading Products...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\[slug]\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6\",\n        children: products.length > 0 ? products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                product: product\n            }, product.id, false, {\n                fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\[slug]\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No products found in this category.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\[slug]\\\\page.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\categories\\\\[slug]\\\\page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoryPage, \"KqUWS0toNBnGTgDr9j973pkyKEQ=\");\n_c = CategoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryPage);\nvar _c;\n$RefreshReg$(_c, \"CategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0ZWdvcmllcy9bc2x1Z10vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM0QztBQUM2QixDQUFDLGFBQWE7QUFDN0I7QUFFMUQsTUFBTUksZUFBZTtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDOUIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFDakIsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsdUJBQXVCO1lBRTlCLGtDQUFrQztZQUNsQyxNQUFNQyxZQUFXLE1BQU1WLDRFQUFxQkEsQ0FBQ0k7WUFFN0MsSUFBR00sVUFBU0MsTUFBTSxHQUFHLEdBQUU7Z0JBQ3hCSCxnQkFBZ0JJO1lBQ2YsT0FBSztnQkFDSkosZ0JBQWdCLEVBQUU7WUFDbkI7WUFDQUYsV0FBVztRQUNiO1FBRUdHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUosU0FBUyxxQkFBTyw4REFBQ1E7UUFBRUMsT0FBTztZQUFFQyxXQUFXO1FBQU87a0JBQUc7Ozs7OztJQUVyRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWlAsU0FBU0MsTUFBTSxHQUFHLElBQ2pCRCxTQUFTUSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ1osOERBQUNsQiwrREFBV0E7Z0JBQWtCa0IsU0FBU0E7ZUFBckJBLFFBQVFDLEVBQUU7Ozs7MkNBRzlCLDhEQUFDUDtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtHQW5DTVg7S0FBQUE7QUFxQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXRlZ29yaWVzL1tzbHVnXS9wYWdlLmpzP2RjNTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RzQnlDYXRlZ29yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3dvb0NvbW1lcmNlQXBpJzsgLy8gQVBJIGhlbHBlclxyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XHJcblxyXG5jb25zdCBDYXRlZ29yeVBhZ2UgPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhUHJvZHVjdHMsIHNldERhdGFQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ2F0ZWdvcnlQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBcclxuXHQgIC8vIEZldGNoIHByb2R1Y3RzIGJ5IGNhdGVnb3J5IHNsdWdcclxuXHQgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KHNsdWcpO1xyXG5cdCAgXHJcblx0ICBpZihwcm9kdWN0cy5sZW5ndGggPiAwKXtcclxuXHRcdHNldERhdGFQcm9kdWN0cyhkYXRhKTtcclxuXHQgIH1lbHNle1xyXG5cdFx0ICBzZXREYXRhUHJvZHVjdHMoW10pO1xyXG5cdCAgfVxyXG5cdCAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblx0fVxyXG5cdFxyXG4gICAgZmV0Y2hDYXRlZ29yeVByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJyB9fT5Mb2FkaW5nIFByb2R1Y3RzLi4uPC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBwLTZcIj5cclxuICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+Tm8gcHJvZHVjdHMgZm91bmQgaW4gdGhpcyBjYXRlZ29yeS48L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFByb2R1Y3RzQnlDYXRlZ29yeSIsIlByb2R1Y3RDYXJkIiwiQ2F0ZWdvcnlQYWdlIiwicGFyYW1zIiwic2x1ZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YVByb2R1Y3RzIiwic2V0RGF0YVByb2R1Y3RzIiwiZmV0Y2hDYXRlZ29yeVByb2R1Y3QiLCJwcm9kdWN0cyIsImxlbmd0aCIsImRhdGEiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/categories/[slug]/page.js\n"));

/***/ })

});