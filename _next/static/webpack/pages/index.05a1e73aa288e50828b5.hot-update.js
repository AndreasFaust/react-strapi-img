webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getSrcSets.ts":
/*!***************************!*\
  !*** ./src/getSrcSets.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSrcSets; });\n/* harmony import */ var _stringEndsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringEndsWith */ \"./src/stringEndsWith.ts\");\n\n\nfunction getFormat(format, webp) {\n  if (Array.isArray(format)) {\n    return webp ? format.find(function (f) {\n      return Object(_stringEndsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(f.url, \".webp\");\n    }) : format.find(function (f) {\n      return !Object(_stringEndsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(f.url, \".webp\");\n    });\n  }\n\n  return format;\n}\n\nfunction getSrcSet(formats, prefix, webp) {\n  if (!formats) return null;\n  var formatsNormalized = Object.keys(formats).filter(function (key) {\n    return !!parseInt(key);\n  }).map(function (key) {\n    var format = getFormat(formats[key], webp);\n    return format ? {\n      width: parseInt(key),\n      url: format.url\n    } : null;\n  }).filter(function (format) {\n    return format;\n  });\n  return !formatsNormalized.length ? null : formatsNormalized.sort(function (a, b) {\n    if (a.width < b.width) return -1;\n    if (a.width > b.width) return 1;\n    return 0;\n  }).reduce(function (acc, current, index, array) {\n    return acc + \"\".concat(prefix + current.url, \" \").concat(current.width, \"w\").concat(index < array.length - 1 ? \", \" : \"\");\n  }, \"\");\n}\n\nfunction getSrcSets(formats, prefix) {\n  return {\n    regular: getSrcSet(formats, prefix),\n    webp: getSrcSet(formats, prefix, true)\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFNyY1NldHMudHM/NTQ1NyJdLCJuYW1lcyI6WyJnZXRGb3JtYXQiLCJmb3JtYXQiLCJ3ZWJwIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZCIsImYiLCJzdHJpbmdFbmRzV2l0aCIsInVybCIsImdldFNyY1NldCIsImZvcm1hdHMiLCJwcmVmaXgiLCJmb3JtYXRzTm9ybWFsaXplZCIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJwYXJzZUludCIsIm1hcCIsIndpZHRoIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImluZGV4IiwiYXJyYXkiLCJnZXRTcmNTZXRzIiwicmVndWxhciJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBb0NDLElBQXBDLEVBQW1EO0FBQ2pELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLENBQUosRUFBMkI7QUFDekIsV0FBT0MsSUFBSSxHQUNQRCxNQUFNLENBQUNJLElBQVAsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsYUFBT0MsK0RBQWMsQ0FBQ0QsQ0FBQyxDQUFDRSxHQUFILEVBQVEsT0FBUixDQUFyQjtBQUFBLEtBQVosQ0FETyxHQUVQUCxNQUFNLENBQUNJLElBQVAsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsYUFBTyxDQUFDQywrREFBYyxDQUFDRCxDQUFDLENBQUNFLEdBQUgsRUFBUSxPQUFSLENBQXRCO0FBQUEsS0FBWixDQUZKO0FBR0Q7O0FBQ0QsU0FBT1AsTUFBUDtBQUNEOztBQUVELFNBQVNRLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQXFDQyxNQUFyQyxFQUFzRFQsSUFBdEQsRUFBOEU7QUFDNUUsTUFBSSxDQUFDUSxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBTUUsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixPQUFaLEVBQ3ZCSyxNQUR1QixDQUNoQixVQUFDQyxHQUFELEVBQVM7QUFDZixXQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRCxHQUFELENBQWpCO0FBQ0QsR0FIdUIsRUFJdkJFLEdBSnVCLENBSW5CLFVBQUNGLEdBQUQsRUFBUztBQUNaLFFBQU1mLE1BQU0sR0FBR0QsU0FBUyxDQUFDVSxPQUFPLENBQUNNLEdBQUQsQ0FBUixFQUFlZCxJQUFmLENBQXhCO0FBQ0EsV0FBT0QsTUFBTSxHQUFHO0FBQUVrQixXQUFLLEVBQUVGLFFBQVEsQ0FBQ0QsR0FBRCxDQUFqQjtBQUF3QlIsU0FBRyxFQUFFUCxNQUFNLENBQUNPO0FBQXBDLEtBQUgsR0FBK0MsSUFBNUQ7QUFDRCxHQVB1QixFQVF2Qk8sTUFSdUIsQ0FRaEIsVUFBQ2QsTUFBRDtBQUFBLFdBQVlBLE1BQVo7QUFBQSxHQVJnQixDQUExQjtBQVVBLFNBQU8sQ0FBQ1csaUJBQWlCLENBQUNRLE1BQW5CLEdBQ0gsSUFERyxHQUVIUixpQkFBaUIsQ0FDZFMsSUFESCxDQUNRLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2QsUUFBSUQsQ0FBQyxDQUFDSCxLQUFGLEdBQVVJLENBQUMsQ0FBQ0osS0FBaEIsRUFBdUIsT0FBTyxDQUFDLENBQVI7QUFDdkIsUUFBSUcsQ0FBQyxDQUFDSCxLQUFGLEdBQVVJLENBQUMsQ0FBQ0osS0FBaEIsRUFBdUIsT0FBTyxDQUFQO0FBQ3ZCLFdBQU8sQ0FBUDtBQUNELEdBTEgsRUFNR0ssTUFOSCxDQU1VLFVBQUNDLEdBQUQsRUFBV0MsT0FBWCxFQUF5QkMsS0FBekIsRUFBd0NDLEtBQXhDLEVBQXVEO0FBQzdELFdBQ0VILEdBQUcsYUFDQWQsTUFBTSxHQUFHZSxPQUFPLENBQUNsQixHQURqQixjQUN3QmtCLE9BQU8sQ0FBQ1AsS0FEaEMsY0FFRFEsS0FBSyxHQUFHQyxLQUFLLENBQUNSLE1BQU4sR0FBZSxDQUF2QixHQUEyQixJQUEzQixHQUFrQyxFQUZqQyxDQURMO0FBTUQsR0FiSCxFQWFLLEVBYkwsQ0FGSjtBQWdCRDs7QUFFYyxTQUFTUyxVQUFULENBQW9CbkIsT0FBcEIsRUFBc0NDLE1BQXRDLEVBQXVEO0FBQ3BFLFNBQU87QUFDTG1CLFdBQU8sRUFBRXJCLFNBQVMsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLENBRGI7QUFFTFQsUUFBSSxFQUFFTyxTQUFTLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQixJQUFsQjtBQUZWLEdBQVA7QUFJRCIsImZpbGUiOiIuL3NyYy9nZXRTcmNTZXRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBzdHJpbmdFbmRzV2l0aCBmcm9tIFwiLi9zdHJpbmdFbmRzV2l0aFwiO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXQoZm9ybWF0OiBGb3JtYXRzLCB3ZWJwOiBib29sZWFuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGZvcm1hdCkpIHtcbiAgICByZXR1cm4gd2VicFxuICAgICAgPyBmb3JtYXQuZmluZCgoZikgPT4gc3RyaW5nRW5kc1dpdGgoZi51cmwsIFwiLndlYnBcIikpXG4gICAgICA6IGZvcm1hdC5maW5kKChmKSA9PiAhc3RyaW5nRW5kc1dpdGgoZi51cmwsIFwiLndlYnBcIikpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNyY1NldChmb3JtYXRzOiBGb3JtYXRzLCBwcmVmaXg/OiBzdHJpbmcsIHdlYnA/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgaWYgKCFmb3JtYXRzKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZm9ybWF0c05vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhmb3JtYXRzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuICEhcGFyc2VJbnQoa2V5KTtcbiAgICB9KVxuICAgIC5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0ID0gZ2V0Rm9ybWF0KGZvcm1hdHNba2V5XSwgd2VicCk7XG4gICAgICByZXR1cm4gZm9ybWF0ID8geyB3aWR0aDogcGFyc2VJbnQoa2V5KSwgdXJsOiBmb3JtYXQudXJsIH0gOiBudWxsO1xuICAgIH0pXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQpO1xuXG4gIHJldHVybiAhZm9ybWF0c05vcm1hbGl6ZWQubGVuZ3RoXG4gICAgPyBudWxsXG4gICAgOiBmb3JtYXRzTm9ybWFsaXplZFxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkgcmV0dXJuIC0xO1xuICAgICAgICAgIGlmIChhLndpZHRoID4gYi53aWR0aCkgcmV0dXJuIDE7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoKGFjYzogYW55LCBjdXJyZW50OiBhbnksIGluZGV4OiBudW1iZXIsIGFycmF5OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYWNjICtcbiAgICAgICAgICAgIGAke3ByZWZpeCArIGN1cnJlbnQudXJsfSAke2N1cnJlbnQud2lkdGh9dyR7XG4gICAgICAgICAgICAgIGluZGV4IDwgYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgXCJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNyY1NldHMoZm9ybWF0czogRm9ybWF0cywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgcmVndWxhcjogZ2V0U3JjU2V0KGZvcm1hdHMsIHByZWZpeCksXG4gICAgd2VicDogZ2V0U3JjU2V0KGZvcm1hdHMsIHByZWZpeCwgdHJ1ZSksXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/getSrcSets.ts\n");

/***/ })

})