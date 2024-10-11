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

/***/ "(app-pages-browser)/./src/components/RelatedProducts.js":
/*!*******************************************!*\
  !*** ./src/components/RelatedProducts.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wooCommerceApi */ \"(app-pages-browser)/./utils/wooCommerceApi.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RelatedProducts = (param)=>{\n    let { relatedIds } = param;\n    _s();\n    const [relatedProducts, setRelatedProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchRelatedProducts = async ()=>{\n            if (relatedIds.length > 0) {\n                let data = await (0,_utils_wooCommerceApi__WEBPACK_IMPORTED_MODULE_1__.getRelated)(relatedIds);\n                console.log(data);\n                setRelatedProducts(data);\n            } else {\n                setRelatedProducts([]); // Fallback for no relatedIds\n            }\n            setLoading(false);\n        };\n        fetchRelatedProducts();\n    }, [\n        relatedIds\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n            marginTop: \"1rem\"\n        },\n        children: \"Loading related products...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n        lineNumber: 24,\n        columnNumber: 23\n    }, undefined);\n    // Safeguard: check if relatedProducts is an array before mapping\n    if (!Array.isArray(relatedProducts) || relatedProducts.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No related products available.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Related Products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: relatedProducts.map((product)=>{\n                    var _Number;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border p-4 rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/products/\".concat(product.slug),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.images[0].src,\n                                    alt: product.name,\n                                    className: \"w-full h-48 object-cover mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-bold\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"$\",\n                                        (_Number = Number(product.price)) === null || _Number === void 0 ? void 0 : _Number.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my-woocommerce-store\\\\src\\\\components\\\\RelatedProducts.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RelatedProducts, \"kgYoAaH/0Z1/U8diDY8mpjAD/1c=\");\n_c = RelatedProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelatedProducts);\nvar _c;\n$RefreshReg$(_c, \"RelatedProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF0ZWRQcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNaO0FBQ2Y7QUFFN0IsTUFBTUksa0JBQWtCO1FBQUMsRUFBRUMsVUFBVSxFQUFFOztJQUNyQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDekQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLHVCQUF1QjtZQUMzQixJQUFJTCxXQUFXTSxNQUFNLEdBQUcsR0FBRztnQkFDekIsSUFBSUMsT0FBTyxNQUFNWixpRUFBVUEsQ0FBQ0s7Z0JBQ2xDUSxRQUFRQyxHQUFHLENBQUNGO2dCQUNaTCxtQkFBb0JLO1lBQ2hCLE9BQU87Z0JBQ0xMLG1CQUFtQixFQUFFLEdBQUcsNkJBQTZCO1lBQ3ZEO1lBQ0FFLFdBQVc7UUFDYjtRQUVBQztJQUNGLEdBQUc7UUFBQ0w7S0FBVztJQUVmLElBQUlHLFNBQVMscUJBQU8sOERBQUNPO1FBQUVDLE9BQU87WUFBRUMsV0FBVztRQUFPO2tCQUFHOzs7Ozs7SUFFckQsaUVBQWlFO0lBQ2pFLElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDYixvQkFBb0JBLGdCQUFnQkssTUFBTSxLQUFLLEdBQUc7UUFDbkUscUJBQU8sOERBQUNJO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQThCOzs7Ozs7MEJBQzVDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWmYsZ0JBQWdCaUIsR0FBRyxDQUFDLENBQUNDO3dCQUtYQzt5Q0FKVCw4REFBQ0w7d0JBQXFCQyxXQUFVO2tDQUM5Qiw0RUFBQ2xCLGlEQUFJQTs0QkFBQ3VCLE1BQU0sYUFBMEIsT0FBYkYsUUFBUUcsSUFBSTs7OENBQ25DLDhEQUFDQztvQ0FBSUMsS0FBS0wsUUFBUU0sTUFBTSxDQUFDLEVBQUUsQ0FBQ0QsR0FBRztvQ0FBRUUsS0FBS1AsUUFBUVEsSUFBSTtvQ0FBRVgsV0FBVTs7Ozs7OzhDQUM5RCw4REFBQ1k7b0NBQUdaLFdBQVU7OENBQWFHLFFBQVFRLElBQUk7Ozs7Ozs4Q0FDdkMsOERBQUNqQjs7d0NBQUU7eUNBQUVVLFVBQUFBLE9BQU9ELFFBQVFVLEtBQUssZUFBcEJULDhCQUFBQSxRQUF1QlUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7O3VCQUo5QlgsUUFBUVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXOUI7R0ExQ01oQztLQUFBQTtBQTRDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWxhdGVkUHJvZHVjdHMuanM/MmVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSZWxhdGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvd29vQ29tbWVyY2VBcGknO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUmVsYXRlZFByb2R1Y3RzID0gKHsgcmVsYXRlZElkcyB9KSA9PiB7XHJcbiAgY29uc3QgW3JlbGF0ZWRQcm9kdWN0cywgc2V0UmVsYXRlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUmVsYXRlZFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocmVsYXRlZElkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnZXRSZWxhdGVkKHJlbGF0ZWRJZHMpXHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFJlbGF0ZWRQcm9kdWN0cyggZGF0YSApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFJlbGF0ZWRQcm9kdWN0cyhbXSk7IC8vIEZhbGxiYWNrIGZvciBubyByZWxhdGVkSWRzXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUmVsYXRlZFByb2R1Y3RzKCk7XHJcbiAgfSwgW3JlbGF0ZWRJZHNdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJyB9fT5Mb2FkaW5nIHJlbGF0ZWQgcHJvZHVjdHMuLi48L3A+O1xyXG5cclxuICAvLyBTYWZlZ3VhcmQ6IGNoZWNrIGlmIHJlbGF0ZWRQcm9kdWN0cyBpcyBhbiBhcnJheSBiZWZvcmUgbWFwcGluZ1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShyZWxhdGVkUHJvZHVjdHMpIHx8IHJlbGF0ZWRQcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiA8cD5ObyByZWxhdGVkIHByb2R1Y3RzIGF2YWlsYWJsZS48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+UmVsYXRlZCBQcm9kdWN0czwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgIHtyZWxhdGVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY30gYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciBtYi0yXCIgLz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPiR7TnVtYmVyKHByb2R1Y3QucHJpY2UpPy50b0ZpeGVkKDIpfTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRQcm9kdWN0cztcclxuIl0sIm5hbWVzIjpbImdldFJlbGF0ZWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJSZWxhdGVkUHJvZHVjdHMiLCJyZWxhdGVkSWRzIiwicmVsYXRlZFByb2R1Y3RzIiwic2V0UmVsYXRlZFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFJlbGF0ZWRQcm9kdWN0cyIsImxlbmd0aCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicCIsInN0eWxlIiwibWFyZ2luVG9wIiwiQXJyYXkiLCJpc0FycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJwcm9kdWN0IiwiTnVtYmVyIiwiaHJlZiIsInNsdWciLCJpbWciLCJzcmMiLCJpbWFnZXMiLCJhbHQiLCJuYW1lIiwiaDMiLCJwcmljZSIsInRvRml4ZWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelatedProducts.js\n"));

/***/ })

});