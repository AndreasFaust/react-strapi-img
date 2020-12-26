webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getSrcSet.ts":
/*!**************************!*\
  !*** ./src/getSrcSet.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSrcSet; });\n/* harmony import */ var _stringEndsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringEndsWith */ \"./src/stringEndsWith.ts\");\n\n\nfunction getFormat(format) {\n  if (Array.isArray(format)) {\n    return format[0];\n  } else {\n    return format;\n  }\n}\n\nfunction renderSrcSet(breakpoint, prefix) {\n  return breakpoint.map(function (key) {\n    var format = getFormat(formats[key], webP);\n    return {\n      width: parseInt(key),\n      url: format.url\n    };\n  }).sort(function (a, b) {\n    if (a.width < b.width) return -1;\n    if (a.width > b.width) return 1;\n    return 0;\n  }).reduce(function (acc, current, index, array) {\n    return acc + \"\".concat(prefix + current.url, \" \").concat(current.width, \"w\").concat(index < array.length - 1 ? \", \" : \"\");\n  }, \"\");\n}\n\nfunction getSrcSet(_ref) {\n  var formats = _ref.formats,\n      prefix = _ref.prefix,\n      webp = _ref.webp;\n  if (!formats) return null;\n  var breakpoints = Object.keys(formats).filter(function (key) {\n    return !!parseInt(key);\n  }).map(function (key) {\n    return;\n  });\n  var returnValue = [];\n  breakpoints.forEach(function (breakpoint) {\n    if (Array.isArray(breakpoint)) {\n      breakpoint.map(function (bpFormat) {\n        Object(_stringEndsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bpFormat.url, \".jpg\");\n      });\n    } else {\n      renderSrcSet(breakpoint, prefix);\n    }\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFNyY1NldC50cz82ZDM4Il0sIm5hbWVzIjpbImdldEZvcm1hdCIsImZvcm1hdCIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlclNyY1NldCIsImJyZWFrcG9pbnQiLCJwcmVmaXgiLCJtYXAiLCJrZXkiLCJmb3JtYXRzIiwid2ViUCIsIndpZHRoIiwicGFyc2VJbnQiLCJ1cmwiLCJzb3J0IiwiYSIsImIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImxlbmd0aCIsImdldFNyY1NldCIsIndlYnAiLCJicmVha3BvaW50cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJyZXR1cm5WYWx1ZSIsImZvckVhY2giLCJicEZvcm1hdCIsInN0cmluZ0VuZHNXaXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN6QixNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCLFdBQU9BLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPQSxNQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxZQUFULENBQXNCQyxVQUF0QixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDeEMsU0FBT0QsVUFBVSxDQUNkRSxHQURJLENBQ0EsVUFBQ0MsR0FBRCxFQUFTO0FBQ1osUUFBTVAsTUFBTSxHQUFHRCxTQUFTLENBQUNTLE9BQU8sQ0FBQ0QsR0FBRCxDQUFSLEVBQWVFLElBQWYsQ0FBeEI7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUMsUUFBUSxDQUFDSixHQUFELENBQWpCO0FBQXdCSyxTQUFHLEVBQUVaLE1BQU0sQ0FBQ1k7QUFBcEMsS0FBUDtBQUNELEdBSkksRUFLSkMsSUFMSSxDQUtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2QsUUFBSUQsQ0FBQyxDQUFDSixLQUFGLEdBQVVLLENBQUMsQ0FBQ0wsS0FBaEIsRUFBdUIsT0FBTyxDQUFDLENBQVI7QUFDdkIsUUFBSUksQ0FBQyxDQUFDSixLQUFGLEdBQVVLLENBQUMsQ0FBQ0wsS0FBaEIsRUFBdUIsT0FBTyxDQUFQO0FBQ3ZCLFdBQU8sQ0FBUDtBQUNELEdBVEksRUFVSk0sTUFWSSxDQVVHLFVBQUNDLEdBQUQsRUFBV0MsT0FBWCxFQUF5QkMsS0FBekIsRUFBd0NDLEtBQXhDLEVBQXVEO0FBQzdELFdBQ0VILEdBQUcsYUFDQVosTUFBTSxHQUFHYSxPQUFPLENBQUNOLEdBRGpCLGNBQ3dCTSxPQUFPLENBQUNSLEtBRGhDLGNBRURTLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0MsRUFGakMsQ0FETDtBQU1ELEdBakJJLEVBaUJGLEVBakJFLENBQVA7QUFrQkQ7O0FBRWMsU0FBU0MsU0FBVCxPQUE0RDtBQUFBLE1BQXZDZCxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkgsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsTUFBdEJrQixJQUFzQixRQUF0QkEsSUFBc0I7QUFDekUsTUFBSSxDQUFDZixPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBTWdCLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixPQUFaLEVBQ2pCbUIsTUFEaUIsQ0FDVixVQUFDcEIsR0FBRCxFQUFTO0FBQ2YsV0FBTyxDQUFDLENBQUNJLFFBQVEsQ0FBQ0osR0FBRCxDQUFqQjtBQUNELEdBSGlCLEVBSWpCRCxHQUppQixDQUliLFVBQUNDLEdBQUQsRUFBUztBQUNaO0FBQ0QsR0FOaUIsQ0FBcEI7QUFRQSxNQUFNcUIsV0FBVyxHQUFHLEVBQXBCO0FBRUFKLGFBQVcsQ0FBQ0ssT0FBWixDQUFvQixVQUFDekIsVUFBRCxFQUFnQjtBQUNsQyxRQUFJSCxLQUFLLENBQUNDLE9BQU4sQ0FBY0UsVUFBZCxDQUFKLEVBQStCO0FBQzdCQSxnQkFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ3dCLFFBQUQsRUFBYztBQUMzQkMsdUVBQWMsQ0FBQ0QsUUFBUSxDQUFDbEIsR0FBVixFQUFlLE1BQWYsQ0FBZDtBQUNELE9BRkQ7QUFHRCxLQUpELE1BSU87QUFDTFQsa0JBQVksQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiLENBQVo7QUFDRDtBQUNGLEdBUkQ7QUFTRCIsImZpbGUiOiIuL3NyYy9nZXRTcmNTZXQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RyaW5nRW5kc1dpdGggZnJvbSBcIi4vc3RyaW5nRW5kc1dpdGhcIjtcblxuaW50ZXJmYWNlIEFyZ3Mge1xuICBmb3JtYXRzOiBhbnk7XG4gIHByZWZpeD86IHN0cmluZztcbiAgd2VicD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdChmb3JtYXQpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0KSkge1xuICAgIHJldHVybiBmb3JtYXRbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJTcmNTZXQoYnJlYWtwb2ludCwgcHJlZml4KSB7XG4gIHJldHVybiBicmVha3BvaW50XG4gICAgLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBmb3JtYXQgPSBnZXRGb3JtYXQoZm9ybWF0c1trZXldLCB3ZWJQKTtcbiAgICAgIHJldHVybiB7IHdpZHRoOiBwYXJzZUludChrZXkpLCB1cmw6IGZvcm1hdC51cmwgfTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS53aWR0aCA8IGIud2lkdGgpIHJldHVybiAtMTtcbiAgICAgIGlmIChhLndpZHRoID4gYi53aWR0aCkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIC5yZWR1Y2UoKGFjYzogYW55LCBjdXJyZW50OiBhbnksIGluZGV4OiBudW1iZXIsIGFycmF5OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFjYyArXG4gICAgICAgIGAke3ByZWZpeCArIGN1cnJlbnQudXJsfSAke2N1cnJlbnQud2lkdGh9dyR7XG4gICAgICAgICAgaW5kZXggPCBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIlxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICB9LCBcIlwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3JjU2V0KHsgZm9ybWF0cywgcHJlZml4LCB3ZWJwIH06IEFyZ3MpOiBzdHJpbmcge1xuICBpZiAoIWZvcm1hdHMpIHJldHVybiBudWxsO1xuICBjb25zdCBicmVha3BvaW50cyA9IE9iamVjdC5rZXlzKGZvcm1hdHMpXG4gICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gISFwYXJzZUludChrZXkpO1xuICAgIH0pXG4gICAgLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG5cbiAgY29uc3QgcmV0dXJuVmFsdWUgPSBbXTtcblxuICBicmVha3BvaW50cy5mb3JFYWNoKChicmVha3BvaW50KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludCkpIHtcbiAgICAgIGJyZWFrcG9pbnQubWFwKChicEZvcm1hdCkgPT4ge1xuICAgICAgICBzdHJpbmdFbmRzV2l0aChicEZvcm1hdC51cmwsIFwiLmpwZ1wiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJTcmNTZXQoYnJlYWtwb2ludCwgcHJlZml4KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/getSrcSet.ts\n");

/***/ })

})