"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./utils/wooCommerceApi.js":
/*!*********************************!*\
  !*** ./utils/wooCommerceApi.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProduct: function() { return /* binding */ fetchProduct; },\n/* harmony export */   getCategories: function() { return /* binding */ getCategories; },\n/* harmony export */   getProduct: function() { return /* binding */ getProduct; },\n/* harmony export */   getProducts: function() { return /* binding */ getProducts; },\n/* harmony export */   getProductsByCategory: function() { return /* binding */ getProductsByCategory; },\n/* harmony export */   getRelated: function() { return /* binding */ getRelated; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n// utils/wooCommerceApi.js\n\n// Create an axios instance for the WooCommerce API\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\",\n    auth: {\n        username: \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\",\n        password: \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\" // Consumer Secret for API authentication\n    }\n});\n// Function to fetch all products\nconst getProducts = async ()=>{\n    try {\n        const consumerKey = \"ck_4215530d75e76372a434cae76235f949c9ecafcf\";\n        const consumerSecret = \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\";\n        const authHeader = \"Basic \" + Buffer.from(consumerKey + \":\" + consumerSecret).toString(\"base64\");\n        const res = await fetch(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", {\n            headers: {\n                Authorization: authHeader\n            }\n        });\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\n// Function to fetch a single product by its slug\nconst getProduct = async (slug)=>{\n    try {\n        const consumerKey = \"ck_4215530d75e76372a434cae76235f949c9ecafcf\";\n        const consumerSecret = \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\";\n        const authHeader = \"Basic \" + Buffer.from(consumerKey + \":\" + consumerSecret).toString(\"base64\");\n        const res = await fetch(\"\".concat(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", \"?slug=\").concat(slug), {\n            headers: {\n                Authorization: authHeader\n            }\n        });\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\n// Another way to call a specific product\nasync function fetchProduct(slug) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", \"?slug=\").concat(slug), {\n            auth: {\n                username: \"ck_4215530d75e76372a434cae76235f949c9ecafcf\",\n                password: \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\"\n            }\n        });\n        return response.data[0]; // Assume first product matches slug\n    } catch (error) {\n        return error;\n    }\n}\n// Function to fetch product categories\nconst getCategories = async ()=>{\n    try {\n        const consumerKey = \"ck_4215530d75e76372a434cae76235f949c9ecafcf\";\n        const consumerSecret = \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\";\n        const authHeader = \"Basic \" + Buffer.from(consumerKey + \":\" + consumerSecret).toString(\"base64\");\n        const res = await fetch(\"\".concat(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", \"/categories\"), {\n            headers: {\n                Authorization: authHeader\n            }\n        });\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\n//function to fetch related products\nconst getRelated = async (relatedIds)=>{\n    try {\n        const consumerKey = \"ck_4215530d75e76372a434cae76235f949c9ecafcf\";\n        const consumerSecret = \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\";\n        const authHeader = \"Basic \" + Buffer.from(consumerKey + \":\" + consumerSecret).toString(\"base64\");\n        const res = await fetch(\"\".concat(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", \"?include=\").concat(relatedIds.join(\",\")), {\n            headers: {\n                Authorization: authHeader\n            }\n        });\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\n//function to fetch products by category\nconst getProductsByCategory = async (categorySlug)=>{\n    try {\n        const consumerKey = \"ck_4215530d75e76372a434cae76235f949c9ecafcf\";\n        const consumerSecret = \"cs_2d441009652124ab5a63d6a8d9a2e9c9042e63b4\";\n        const authHeader = \"Basic \" + Buffer.from(consumerKey + \":\" + consumerSecret).toString(\"base64\");\n        // API call to fetch products based on the category slug\n        const res = await fetch(\"\".concat(\"https://martinaclothing.com.co/wordpress-my-store/wp-json/wc/v1/products\", \"/?category=\").concat(categorySlug), {\n            headers: {\n                Authorization: authHeader\n            }\n        });\n        const data = await res.json();\n        // Log the data for debugging\n        console.log(\"Fetched products:\", data);\n        return data;\n    } catch (error) {\n        console.error(error);\n        return [];\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3dvb0NvbW1lcmNlQXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBRUE7QUFFMUIsbURBQW1EO0FBQ25ELE1BQU1DLE1BQU1ELDZDQUFLQSxDQUFDRSxNQUFNLENBQUM7SUFDdkJDLFNBQVNDLDBFQUFxQztJQUM5Q0csTUFBTTtRQUNKQyxVQUFVSiw2Q0FBMkM7UUFDckRNLFVBQVVOLDZDQUEyQyxDQUFDLHlDQUF5QztJQUNqRztBQUNGO0FBRUEsaUNBQWlDO0FBQzFCLE1BQU1PLGNBQWM7SUFFekIsSUFBSTtRQUNFLE1BQU1DLGNBQWNSLDZDQUF3QztRQUMxRCxNQUFNVSxpQkFBaUJWLDZDQUEyQztRQUNsRSxNQUFNVyxhQUFhLFdBQVdDLE1BQU1BLENBQUNDLElBQUksQ0FBQ0wsY0FBYyxNQUFNRSxnQkFBZ0JJLFFBQVEsQ0FBQztRQUV2RixNQUFNQyxNQUFNLE1BQU1DLE1BQU1oQiwwRUFBcUMsRUFBRTtZQUM3RGlCLFNBQVM7Z0JBQ1BDLGVBQWVQO1lBQ2pCO1FBQ0Y7UUFFRixNQUFNUSxPQUFPLE1BQU1KLElBQUlLLElBQUk7UUFDM0IsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPQTtJQUNWO0FBQ0wsRUFBRTtBQUVGLGlEQUFpRDtBQUMxQyxNQUFNQyxhQUFhLE9BQU9DO0lBQy9CLElBQUk7UUFDSSxNQUFNZixjQUFjUiw2Q0FBd0M7UUFDNUQsTUFBTVUsaUJBQWlCViw2Q0FBMkM7UUFDbEUsTUFBTVcsYUFBYSxXQUFXQyxNQUFNQSxDQUFDQyxJQUFJLENBQUNMLGNBQWMsTUFBTUUsZ0JBQWdCSSxRQUFRLENBQUM7UUFFdkYsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQWlETyxPQUE5Q3ZCLDBFQUFxQyxFQUFDLFVBQWEsT0FBTHVCLE9BQVE7WUFDL0VOLFNBQVM7Z0JBQ1BDLGVBQWVQO1lBQ2pCO1FBQ0Y7UUFFRixNQUFNUSxPQUFPLE1BQU1KLElBQUlLLElBQUk7UUFDM0IsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPQTtJQUNWO0FBQ0wsRUFBRTtBQUVGLHlDQUF5QztBQUNsQyxlQUFlRyxhQUFhRCxJQUFJO0lBQ3JDLElBQUc7UUFDSCxNQUFNRSxXQUFXLE1BQU03Qiw2Q0FBS0EsQ0FBQzhCLEdBQUcsQ0FDOUIsR0FBaURILE9BQTlDdkIsMEVBQXFDLEVBQUMsVUFBYSxPQUFMdUIsT0FDakQ7WUFDRXBCLE1BQU07Z0JBQ0pDLFVBQVVKLDZDQUF3QztnQkFDbERNLFVBQVVOLDZDQUEyQztZQUN2RDtRQUNGO1FBRUYsT0FBT3lCLFNBQVNOLElBQUksQ0FBQyxFQUFFLEVBQUUsb0NBQW9DO0lBQzdELEVBQUMsT0FBTUUsT0FBTTtRQUFFLE9BQU9BO0lBQU07QUFDOUI7QUFFQSx1Q0FBdUM7QUFDaEMsTUFBTU0sZ0JBQWdCO0lBQzNCLElBQUk7UUFDRSxNQUFNbkIsY0FBY1IsNkNBQXdDO1FBQzFELE1BQU1VLGlCQUFpQlYsNkNBQTJDO1FBQ2xFLE1BQU1XLGFBQWEsV0FBV0MsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDTCxjQUFjLE1BQU1FLGdCQUFnQkksUUFBUSxDQUFDO1FBRXZGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxHQUF5QyxPQUF0Q2hCLDBFQUFxQyxFQUFDLGdCQUFjO1lBQzdFaUIsU0FBUztnQkFDUEMsZUFBZVA7WUFDakI7UUFDRjtRQUVGLE1BQU1RLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQixPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9BO0lBQ1Y7QUFDTCxFQUFFO0FBRUYsb0NBQW9DO0FBQzdCLE1BQU1PLGFBQWEsT0FBT0M7SUFDaEMsSUFBSTtRQUNHLE1BQU1yQixjQUFjUiw2Q0FBd0M7UUFDMUQsTUFBTVUsaUJBQWlCViw2Q0FBMkM7UUFDbEUsTUFBTVcsYUFBYSxXQUFXQyxNQUFNQSxDQUFDQyxJQUFJLENBQUNMLGNBQWMsTUFBTUUsZ0JBQWdCSSxRQUFRLENBQUM7UUFFdkYsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQW9EYSxPQUFqRDdCLDBFQUFxQyxFQUFDLGFBQWdDLE9BQXJCNkIsV0FBV0MsSUFBSSxDQUFDLE9BQVE7WUFDbEdiLFNBQVM7Z0JBQ1BDLGVBQWVQO1lBQ2pCO1FBQ0Y7UUFFRixNQUFNUSxPQUFPLE1BQU1KLElBQUlLLElBQUk7UUFDM0IsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPQTtJQUNYO0FBQ0osRUFBQztBQUVELHdDQUF3QztBQUNqQyxNQUFNVSx3QkFBd0IsT0FBT0M7SUFDMUMsSUFBSTtRQUNGLE1BQU14QixjQUFjUiw2Q0FBd0M7UUFDNUQsTUFBTVUsaUJBQWlCViw2Q0FBMkM7UUFDbEUsTUFBTVcsYUFBYSxXQUFXQyxNQUFNQSxDQUFDQyxJQUFJLENBQUNMLGNBQWMsTUFBTUUsZ0JBQWdCSSxRQUFRLENBQUM7UUFFdkYsd0RBQXdEO1FBQ3hELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxHQUFzRGdCLE9BQW5EaEMsMEVBQXFDLEVBQUMsZUFBMEIsT0FBYmdDLGVBQWdCO1lBQzVGZixTQUFTO2dCQUNQQyxlQUFlUDtZQUNqQjtRQUNGO1FBRUEsTUFBTVEsT0FBTyxNQUFNSixJQUFJSyxJQUFJO1FBRTNCLDZCQUE2QjtRQUM3QmEsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQmY7UUFFakMsT0FBT0E7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZFksUUFBUVosS0FBSyxDQUFDQTtRQUNkLE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy93b29Db21tZXJjZUFwaS5qcz9jN2YwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzL3dvb0NvbW1lcmNlQXBpLmpzXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gQ3JlYXRlIGFuIGF4aW9zIGluc3RhbmNlIGZvciB0aGUgV29vQ29tbWVyY2UgQVBJXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX1NUT1JFX1VSTCwgLy8gQmFzZSBVUkwgZm9yIFdvb0NvbW1lcmNlIEFQSVxyXG4gIGF1dGg6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT09fQ09OU1VNRVJfU0VDUkVULCAgLy8gQ29uc3VtZXIgS2V5IGZvciBBUEkgYXV0aGVudGljYXRpb25cclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT09fQ09OU1VNRVJfU0VDUkVUIC8vIENvbnN1bWVyIFNlY3JldCBmb3IgQVBJIGF1dGhlbnRpY2F0aW9uXHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGZldGNoIGFsbCBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHJcbiAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25zdW1lcktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVk7XHJcbiAgICAgICAgICBjb25zdCBjb25zdW1lclNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9TRUNSRVQ7XHJcbiAgICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShjb25zdW1lcktleSArICc6JyArIGNvbnN1bWVyU2VjcmV0KS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX1NUT1JFX1VSTCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgIH1cclxufTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGZldGNoIGEgc2luZ2xlIHByb2R1Y3QgYnkgaXRzIHNsdWdcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBjb25zdW1lcktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVk7XHJcbiAgICAgICAgICBjb25zdCBjb25zdW1lclNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9TRUNSRVQ7XHJcbiAgICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShjb25zdW1lcktleSArICc6JyArIGNvbnN1bWVyU2VjcmV0KS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX1NUT1JFX1VSTH0/c2x1Zz0ke3NsdWd9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgIH1cclxufTtcclxuXHJcbi8vIEFub3RoZXIgd2F5IHRvIGNhbGwgYSBzcGVjaWZpYyBwcm9kdWN0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3Qoc2x1ZykgeyAvL2ZldGNoIHRoZSBwcm9kdWN0IHdpdGggdGUgc3BlY2lmaWVkIHNsdWdcclxuICB0cnl7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT09fU1RPUkVfVVJMfT9zbHVnPSR7c2x1Z31gLFxyXG4gICAge1xyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVksIC8vd29vY29tbWVyY2Uga2V5c1xyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT09fQ09OU1VNRVJfU0VDUkVULFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF07IC8vIEFzc3VtZSBmaXJzdCBwcm9kdWN0IG1hdGNoZXMgc2x1Z1xyXG4gIH1jYXRjaChlcnJvcil7IHJldHVybiBlcnJvciB9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGZldGNoIHByb2R1Y3QgY2F0ZWdvcmllc1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVyS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX0NPTlNVTUVSX0tFWTtcclxuICAgICAgICAgIGNvbnN0IGNvbnN1bWVyU2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX0NPTlNVTUVSX1NFQ1JFVDtcclxuICAgICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSAnQmFzaWMgJyArIEJ1ZmZlci5mcm9tKGNvbnN1bWVyS2V5ICsgJzonICsgY29uc3VtZXJTZWNyZXQpLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT09fU1RPUkVfVVJMfS9jYXRlZ29yaWVzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgIH1cclxufTtcclxuXHJcbi8vZnVuY3Rpb24gdG8gZmV0Y2ggcmVsYXRlZCBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZ2V0UmVsYXRlZCA9IGFzeW5jIChyZWxhdGVkSWRzKSA9PiB7XHJcblx0dHJ5IHtcclxuICAgICAgICBjb25zdCBjb25zdW1lcktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVk7XHJcbiAgICAgICAgICBjb25zdCBjb25zdW1lclNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9TRUNSRVQ7XHJcbiAgICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShjb25zdW1lcktleSArICc6JyArIGNvbnN1bWVyU2VjcmV0KS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09PX1NUT1JFX1VSTH0/aW5jbHVkZT0ke3JlbGF0ZWRJZHMuam9pbignLCcpfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhIZWFkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuLy9mdW5jdGlvbiB0byBmZXRjaCBwcm9kdWN0cyBieSBjYXRlZ29yeVxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5U2x1ZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25zdW1lcktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVk7XHJcbiAgICBjb25zdCBjb25zdW1lclNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9TRUNSRVQ7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShjb25zdW1lcktleSArICc6JyArIGNvbnN1bWVyU2VjcmV0KS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gICAgLy8gQVBJIGNhbGwgdG8gZmV0Y2ggcHJvZHVjdHMgYmFzZWQgb24gdGhlIGNhdGVnb3J5IHNsdWdcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPT19TVE9SRV9VUkx9Lz9jYXRlZ29yeT0ke2NhdGVnb3J5U2x1Z31gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRoSGVhZGVyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgLy8gTG9nIHRoZSBkYXRhIGZvciBkZWJ1Z2dpbmdcclxuICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBwcm9kdWN0czpcIiwgZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XT09fU1RPUkVfVVJMIiwiYXV0aCIsInVzZXJuYW1lIiwiTkVYVF9QVUJMSUNfV09PX0NPTlNVTUVSX1NFQ1JFVCIsInBhc3N3b3JkIiwiZ2V0UHJvZHVjdHMiLCJjb25zdW1lcktleSIsIk5FWFRfUFVCTElDX1dPT19DT05TVU1FUl9LRVkiLCJjb25zdW1lclNlY3JldCIsImF1dGhIZWFkZXIiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImdldFByb2R1Y3QiLCJzbHVnIiwiZmV0Y2hQcm9kdWN0IiwicmVzcG9uc2UiLCJnZXQiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0UmVsYXRlZCIsInJlbGF0ZWRJZHMiLCJqb2luIiwiZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwiY2F0ZWdvcnlTbHVnIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/wooCommerceApi.js\n"));

/***/ })

});