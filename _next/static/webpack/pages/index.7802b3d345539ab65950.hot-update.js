webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getSrcSet.ts":
/*!**************************!*\
  !*** ./src/getSrcSet.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSrcSet; });\nfunction getFormat(format) {\n  if (Array.isArray(format)) {\n    return format[0];\n  } else {\n    return format;\n  }\n}\n\nfunction renderSrcSet(breakpoint, prefix) {\n  return breakpoint.map(function (key) {\n    var format = getFormat(formats[key], webP);\n    return {\n      width: parseInt(key),\n      url: format.url\n    };\n  }).sort(function (a, b) {\n    if (a.width < b.width) return -1;\n    if (a.width > b.width) return 1;\n    return 0;\n  }).reduce(function (acc, current, index, array) {\n    return acc + \"\".concat(prefix + current.url, \" \").concat(current.width, \"w\").concat(index < array.length - 1 ? \", \" : \"\");\n  }, \"\");\n}\n\nfunction getSrcSet(_ref) {\n  var formats = _ref.formats,\n      prefix = _ref.prefix;\n  if (!formats) return null;\n  var breakpoints = Object.keys(formats).filter(function (key) {\n    return !!parseInt(key);\n  }).map(function (key) {\n    return formats[key];\n  });\n  var srcSets = [];\n  breakpoints.forEach(function (breakpoint) {\n    if (Array.isArray(breakpoint)) {\n      breakpoint.map(function (bpFormat) {\n        srcSets.push(renderSrcSet(bpFormat, prefix));\n      });\n    } else {\n      srcSets.push(renderSrcSet(breakpoint, prefix));\n    }\n  });\n  return srcSets;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFNyY1NldC50cz82ZDM4Il0sIm5hbWVzIjpbImdldEZvcm1hdCIsImZvcm1hdCIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlclNyY1NldCIsImJyZWFrcG9pbnQiLCJwcmVmaXgiLCJtYXAiLCJrZXkiLCJmb3JtYXRzIiwid2ViUCIsIndpZHRoIiwicGFyc2VJbnQiLCJ1cmwiLCJzb3J0IiwiYSIsImIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImxlbmd0aCIsImdldFNyY1NldCIsImJyZWFrcG9pbnRzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsInNyY1NldHMiLCJmb3JFYWNoIiwiYnBGb3JtYXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFRQTtBQUFBO0FBQUEsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDekIsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixXQUFPQSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0EsTUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0csWUFBVCxDQUFzQkMsVUFBdEIsRUFBa0NDLE1BQWxDLEVBQTBDO0FBQ3hDLFNBQU9ELFVBQVUsQ0FDZEUsR0FESSxDQUNBLFVBQUNDLEdBQUQsRUFBUztBQUNaLFFBQU1QLE1BQU0sR0FBR0QsU0FBUyxDQUFDUyxPQUFPLENBQUNELEdBQUQsQ0FBUixFQUFlRSxJQUFmLENBQXhCO0FBQ0EsV0FBTztBQUFFQyxXQUFLLEVBQUVDLFFBQVEsQ0FBQ0osR0FBRCxDQUFqQjtBQUF3QkssU0FBRyxFQUFFWixNQUFNLENBQUNZO0FBQXBDLEtBQVA7QUFDRCxHQUpJLEVBS0pDLElBTEksQ0FLQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNkLFFBQUlELENBQUMsQ0FBQ0osS0FBRixHQUFVSyxDQUFDLENBQUNMLEtBQWhCLEVBQXVCLE9BQU8sQ0FBQyxDQUFSO0FBQ3ZCLFFBQUlJLENBQUMsQ0FBQ0osS0FBRixHQUFVSyxDQUFDLENBQUNMLEtBQWhCLEVBQXVCLE9BQU8sQ0FBUDtBQUN2QixXQUFPLENBQVA7QUFDRCxHQVRJLEVBVUpNLE1BVkksQ0FVRyxVQUFDQyxHQUFELEVBQVdDLE9BQVgsRUFBeUJDLEtBQXpCLEVBQXdDQyxLQUF4QyxFQUF1RDtBQUM3RCxXQUNFSCxHQUFHLGFBQ0FaLE1BQU0sR0FBR2EsT0FBTyxDQUFDTixHQURqQixjQUN3Qk0sT0FBTyxDQUFDUixLQURoQyxjQUVEUyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQXZCLEdBQTJCLElBQTNCLEdBQWtDLEVBRmpDLENBREw7QUFNRCxHQWpCSSxFQWlCRixFQWpCRSxDQUFQO0FBa0JEOztBQUVjLFNBQVNDLFNBQVQsT0FBd0Q7QUFBQSxNQUFuQ2QsT0FBbUMsUUFBbkNBLE9BQW1DO0FBQUEsTUFBMUJILE1BQTBCLFFBQTFCQSxNQUEwQjtBQUNyRSxNQUFJLENBQUNHLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxNQUFNZSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsT0FBWixFQUNqQmtCLE1BRGlCLENBQ1YsVUFBQ25CLEdBQUQsRUFBUztBQUNmLFdBQU8sQ0FBQyxDQUFDSSxRQUFRLENBQUNKLEdBQUQsQ0FBakI7QUFDRCxHQUhpQixFQUlqQkQsR0FKaUIsQ0FJYixVQUFDQyxHQUFELEVBQVM7QUFDWixXQUFPQyxPQUFPLENBQUNELEdBQUQsQ0FBZDtBQUNELEdBTmlCLENBQXBCO0FBUUEsTUFBTW9CLE9BQU8sR0FBRyxFQUFoQjtBQUVBSixhQUFXLENBQUNLLE9BQVosQ0FBb0IsVUFBQ3hCLFVBQUQsRUFBZ0I7QUFDbEMsUUFBSUgsS0FBSyxDQUFDQyxPQUFOLENBQWNFLFVBQWQsQ0FBSixFQUErQjtBQUM3QkEsZ0JBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUN1QixRQUFELEVBQWM7QUFDM0JGLGVBQU8sQ0FBQ0csSUFBUixDQUFhM0IsWUFBWSxDQUFDMEIsUUFBRCxFQUFXeEIsTUFBWCxDQUF6QjtBQUNELE9BRkQ7QUFHRCxLQUpELE1BSU87QUFDTHNCLGFBQU8sQ0FBQ0csSUFBUixDQUFhM0IsWUFBWSxDQUFDQyxVQUFELEVBQWFDLE1BQWIsQ0FBekI7QUFDRDtBQUNGLEdBUkQ7QUFVQSxTQUFPc0IsT0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2dldFNyY1NldC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHJpbmdFbmRzV2l0aCBmcm9tIFwiLi9zdHJpbmdFbmRzV2l0aFwiO1xuXG5pbnRlcmZhY2UgQXJncyB7XG4gIGZvcm1hdHM6IGFueTtcbiAgcHJlZml4Pzogc3RyaW5nO1xuICB3ZWJwPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0KGZvcm1hdCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXQpKSB7XG4gICAgcmV0dXJuIGZvcm1hdFswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNyY1NldChicmVha3BvaW50LCBwcmVmaXgpIHtcbiAgcmV0dXJuIGJyZWFrcG9pbnRcbiAgICAubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IGdldEZvcm1hdChmb3JtYXRzW2tleV0sIHdlYlApO1xuICAgICAgcmV0dXJuIHsgd2lkdGg6IHBhcnNlSW50KGtleSksIHVybDogZm9ybWF0LnVybCB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgLnJlZHVjZSgoYWNjOiBhbnksIGN1cnJlbnQ6IGFueSwgaW5kZXg6IG51bWJlciwgYXJyYXk6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWNjICtcbiAgICAgICAgYCR7cHJlZml4ICsgY3VycmVudC51cmx9ICR7Y3VycmVudC53aWR0aH13JHtcbiAgICAgICAgICBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwiXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH0sIFwiXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTcmNTZXQoeyBmb3JtYXRzLCBwcmVmaXggfTogQXJncyk6IHN0cmluZ1tdIHtcbiAgaWYgKCFmb3JtYXRzKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBPYmplY3Qua2V5cyhmb3JtYXRzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuICEhcGFyc2VJbnQoa2V5KTtcbiAgICB9KVxuICAgIC5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGZvcm1hdHNba2V5XTtcbiAgICB9KTtcblxuICBjb25zdCBzcmNTZXRzID0gW107XG5cbiAgYnJlYWtwb2ludHMuZm9yRWFjaCgoYnJlYWtwb2ludCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJyZWFrcG9pbnQpKSB7XG4gICAgICBicmVha3BvaW50Lm1hcCgoYnBGb3JtYXQpID0+IHtcbiAgICAgICAgc3JjU2V0cy5wdXNoKHJlbmRlclNyY1NldChicEZvcm1hdCwgcHJlZml4KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3JjU2V0cy5wdXNoKHJlbmRlclNyY1NldChicmVha3BvaW50LCBwcmVmaXgpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzcmNTZXRzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/getSrcSet.ts\n");

/***/ })

})