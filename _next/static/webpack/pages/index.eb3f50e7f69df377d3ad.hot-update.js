webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getSrcSet.ts":
/*!**************************!*\
  !*** ./src/getSrcSet.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSrcSet; });\nfunction getFormat(format) {\n  if (Array.isArray(format)) {\n    return format[0];\n  } else {\n    return format;\n  }\n}\n\nfunction getSrcSet(_ref) {\n  var formats = _ref.formats,\n      prefix = _ref.prefix,\n      webp = _ref.webp;\n  if (!formats) return null;\n  var breakpoints = Object.keys(formats).filter(function (key) {\n    return !!parseInt(key);\n  }).map(function (key) {\n    var format = getFormat(formats[key], webP);\n    return {\n      width: parseInt(key),\n      url: format.url\n    };\n  }).sort(function (a, b) {\n    if (a.width < b.width) return -1;\n    if (a.width > b.width) return 1;\n    return 0;\n  }).reduce(function (acc, current, index, array) {\n    return acc + \"\".concat(prefix + current.url, \" \").concat(current.width, \"w\").concat(index < array.length - 1 ? \", \" : \"\");\n  }, \"\");\n  return srcset;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFNyY1NldC50cz82ZDM4Il0sIm5hbWVzIjpbImdldEZvcm1hdCIsImZvcm1hdCIsIkFycmF5IiwiaXNBcnJheSIsImdldFNyY1NldCIsImZvcm1hdHMiLCJwcmVmaXgiLCJ3ZWJwIiwiYnJlYWtwb2ludHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwicGFyc2VJbnQiLCJtYXAiLCJ3ZWJQIiwid2lkdGgiLCJ1cmwiLCJzb3J0IiwiYSIsImIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImxlbmd0aCIsInNyY3NldCJdLCJtYXBwaW5ncyI6IkFBTUE7QUFBQTtBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3pCLE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixNQUFkLENBQUosRUFBMkI7QUFDekIsV0FBT0EsTUFBTSxDQUFDLENBQUQsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9BLE1BQVA7QUFDRDtBQUNGOztBQUVjLFNBQVNHLFNBQVQsT0FBNEQ7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFDekUsTUFBSSxDQUFDRixPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBTUcsV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsT0FBWixFQUNqQk0sTUFEaUIsQ0FDVixVQUFDQyxHQUFELEVBQVM7QUFDZixXQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRCxHQUFELENBQWpCO0FBQ0QsR0FIaUIsRUFLakJFLEdBTGlCLENBS2IsVUFBQ0YsR0FBRCxFQUFTO0FBQ1osUUFBTVgsTUFBTSxHQUFHRCxTQUFTLENBQUNLLE9BQU8sQ0FBQ08sR0FBRCxDQUFSLEVBQWVHLElBQWYsQ0FBeEI7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUgsUUFBUSxDQUFDRCxHQUFELENBQWpCO0FBQXdCSyxTQUFHLEVBQUVoQixNQUFNLENBQUNnQjtBQUFwQyxLQUFQO0FBQ0QsR0FSaUIsRUFTakJDLElBVGlCLENBU1osVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDZCxRQUFJRCxDQUFDLENBQUNILEtBQUYsR0FBVUksQ0FBQyxDQUFDSixLQUFoQixFQUF1QixPQUFPLENBQUMsQ0FBUjtBQUN2QixRQUFJRyxDQUFDLENBQUNILEtBQUYsR0FBVUksQ0FBQyxDQUFDSixLQUFoQixFQUF1QixPQUFPLENBQVA7QUFDdkIsV0FBTyxDQUFQO0FBQ0QsR0FiaUIsRUFjakJLLE1BZGlCLENBY1YsVUFBQ0MsR0FBRCxFQUFXQyxPQUFYLEVBQXlCQyxLQUF6QixFQUF3Q0MsS0FBeEMsRUFBdUQ7QUFDN0QsV0FDRUgsR0FBRyxhQUNBaEIsTUFBTSxHQUFHaUIsT0FBTyxDQUFDTixHQURqQixjQUN3Qk0sT0FBTyxDQUFDUCxLQURoQyxjQUVEUSxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQXZCLEdBQTJCLElBQTNCLEdBQWtDLEVBRmpDLENBREw7QUFNRCxHQXJCaUIsRUFxQmYsRUFyQmUsQ0FBcEI7QUF1QkEsU0FBT0MsTUFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2dldFNyY1NldC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBcmdzIHtcbiAgZm9ybWF0czogYW55O1xuICBwcmVmaXg/OiBzdHJpbmc7XG4gIHdlYnA/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXQoZm9ybWF0KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGZvcm1hdCkpIHtcbiAgICByZXR1cm4gZm9ybWF0WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3JjU2V0KHsgZm9ybWF0cywgcHJlZml4LCB3ZWJwIH06IEFyZ3MpOiBzdHJpbmcge1xuICBpZiAoIWZvcm1hdHMpIHJldHVybiBudWxsO1xuICBjb25zdCBicmVha3BvaW50cyA9IE9iamVjdC5rZXlzKGZvcm1hdHMpXG4gICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gISFwYXJzZUludChrZXkpO1xuICAgIH0pXG5cbiAgICAubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IGdldEZvcm1hdChmb3JtYXRzW2tleV0sIHdlYlApO1xuICAgICAgcmV0dXJuIHsgd2lkdGg6IHBhcnNlSW50KGtleSksIHVybDogZm9ybWF0LnVybCB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgLnJlZHVjZSgoYWNjOiBhbnksIGN1cnJlbnQ6IGFueSwgaW5kZXg6IG51bWJlciwgYXJyYXk6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWNjICtcbiAgICAgICAgYCR7cHJlZml4ICsgY3VycmVudC51cmx9ICR7Y3VycmVudC53aWR0aH13JHtcbiAgICAgICAgICBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwiXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH0sIFwiXCIpO1xuXG4gIHJldHVybiBzcmNzZXQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/getSrcSet.ts\n");

/***/ })

})