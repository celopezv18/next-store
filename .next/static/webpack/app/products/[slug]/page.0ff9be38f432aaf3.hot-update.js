"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[slug]/page",{

/***/ "(app-pages-browser)/./src/app/products/[slug]/page.js":
/*!*****************************************!*\
  !*** ./src/app/products/[slug]/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_wooCommerceApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/wooCommerceApi.js */ \"(app-pages-browser)/./utils/wooCommerceApi.js\");\n/* harmony import */ var _components_ProductDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ProductDetail */ \"(app-pages-browser)/./src/components/ProductDetail.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProductDetailPage(param) {\n    let { params } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const debug = async ()=>{\n            const product = await (0,_utils_wooCommerceApi_js__WEBPACK_IMPORTED_MODULE_2__.getProduct)(params.slug);\n            console.log(\"PRODUCTO->\" + product, \"slug->\" + params.slug);\n        };\n        debug();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hola\"\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\app\\\\products\\\\[slug]\\\\page.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n_s(ProductDetailPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ProductDetailPage;\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW3NsdWddL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEM7QUFDcUI7QUFDSDtBQUUvQyxTQUFTSSxrQkFBa0IsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUV6Q0osZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxRQUFRO1lBQ2IsTUFBTUMsVUFBVSxNQUFNTCxvRUFBVUEsQ0FBQ0csT0FBT0csSUFBSTtZQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLGVBQWFILFNBQVMsV0FBU0YsT0FBT0csSUFBSTtRQUN2RDtRQUNBRjtJQUNELEdBQUUsRUFBRTtJQUVKLHFCQUFPLDhEQUFDSztrQkFBSTs7Ozs7O0FBQ2Q7R0FYd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdHMvW3NsdWddL3BhZ2UuanM/NjczNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvd29vQ29tbWVyY2VBcGkuanMnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbFBhZ2UoeyBwYXJhbXMgfSkge1xyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0ICBjb25zdCBkZWJ1ZyA9IGFzeW5jICgpID0+IHtcclxuXHRcdCAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGdldFByb2R1Y3QocGFyYW1zLnNsdWcpO1xyXG5cdFx0ICBjb25zb2xlLmxvZygnUFJPRFVDVE8tPicrcHJvZHVjdCwgJ3NsdWctPicrcGFyYW1zLnNsdWcpO1xyXG5cdCAgfVxyXG5cdCAgZGVidWcoKTtcclxuICB9LFtdKTtcclxuXHRcclxuICByZXR1cm4gPGRpdj5ob2xhPC9kaXY+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFByb2R1Y3QiLCJQcm9kdWN0RGV0YWlsIiwiUHJvZHVjdERldGFpbFBhZ2UiLCJwYXJhbXMiLCJkZWJ1ZyIsInByb2R1Y3QiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[slug]/page.js\n"));

/***/ })

});