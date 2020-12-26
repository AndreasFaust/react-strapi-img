webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getSrcSets.ts":
/*!***************************!*\
  !*** ./src/getSrcSets.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSrcSets; });\n/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _stringEndsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringEndsWith */ \"./src/stringEndsWith.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction getSrcSet(format, prefix) {\n  return format.map(function (_ref) {\n    var url = _ref.url,\n        width = _ref.width;\n    return {\n      width: width,\n      url: url\n    };\n  }).sort(function (a, b) {\n    if (a.width < b.width) return -1;\n    if (a.width > b.width) return 1;\n    return 0;\n  }).reduce(function (acc, current, index, array) {\n    return acc + \"\".concat(prefix + current.url, \" \").concat(current.width, \"w\").concat(index < array.length - 1 ? \", \" : \"\");\n  }, \"\");\n}\n\nfunction getSrcSets(formats, prefix) {\n  if (!formats) return null;\n  var breakpoints = Object.keys(formats).filter(function (key) {\n    return !!parseInt(key);\n  }).map(function (key) {\n    return _objectSpread(_objectSpread({}, formats[key]), {}, {\n      width: key\n    });\n  });\n  var srcSets = {\n    webp: [],\n    regular: []\n  };\n  breakpoints.forEach(function (breakpoint) {\n    if (Array.isArray(breakpoint)) {\n      breakpoint.map(function (bpFormat) {\n        if (Object(_stringEndsWith__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bpFormat.url, \".webp\")) {\n          srcSets[\"webp\"] = getSrcSet(bpFormat, prefix);\n        } else {\n          srcSets[\"regular\"] = getSrcSet(bpFormat, prefix);\n        }\n      });\n    } else {\n      srcSets[\"regular\"] = getSrcSet(breakpoint, prefix);\n    }\n  });\n  return srcSets;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFNyY1NldHMudHM/NTQ1NyJdLCJuYW1lcyI6WyJnZXRTcmNTZXQiLCJmb3JtYXQiLCJwcmVmaXgiLCJtYXAiLCJ1cmwiLCJ3aWR0aCIsInNvcnQiLCJhIiwiYiIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJpbmRleCIsImFycmF5IiwibGVuZ3RoIiwiZ2V0U3JjU2V0cyIsImZvcm1hdHMiLCJicmVha3BvaW50cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJwYXJzZUludCIsInNyY1NldHMiLCJ3ZWJwIiwicmVndWxhciIsImZvckVhY2giLCJicmVha3BvaW50IiwiQXJyYXkiLCJpc0FycmF5IiwiYnBGb3JtYXQiLCJzdHJpbmdFbmRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQW1DQyxNQUFuQyxFQUFtRDtBQUNqRCxTQUFPRCxNQUFNLENBQ1ZFLEdBREksQ0FDQSxnQkFBb0I7QUFBQSxRQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsUUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3ZCLFdBQU87QUFBRUEsV0FBSyxFQUFMQSxLQUFGO0FBQVNELFNBQUcsRUFBSEE7QUFBVCxLQUFQO0FBQ0QsR0FISSxFQUlKRSxJQUpJLENBSUMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDZCxRQUFJRCxDQUFDLENBQUNGLEtBQUYsR0FBVUcsQ0FBQyxDQUFDSCxLQUFoQixFQUF1QixPQUFPLENBQUMsQ0FBUjtBQUN2QixRQUFJRSxDQUFDLENBQUNGLEtBQUYsR0FBVUcsQ0FBQyxDQUFDSCxLQUFoQixFQUF1QixPQUFPLENBQVA7QUFDdkIsV0FBTyxDQUFQO0FBQ0QsR0FSSSxFQVNKSSxNQVRJLENBU0csVUFBQ0MsR0FBRCxFQUFXQyxPQUFYLEVBQXlCQyxLQUF6QixFQUF3Q0MsS0FBeEMsRUFBdUQ7QUFDN0QsV0FDRUgsR0FBRyxhQUNBUixNQUFNLEdBQUdTLE9BQU8sQ0FBQ1AsR0FEakIsY0FDd0JPLE9BQU8sQ0FBQ04sS0FEaEMsY0FFRE8sS0FBSyxHQUFHQyxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUF2QixHQUEyQixJQUEzQixHQUFrQyxFQUZqQyxDQURMO0FBTUQsR0FoQkksRUFnQkYsRUFoQkUsQ0FBUDtBQWlCRDs7QUFFYyxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUF1Q2QsTUFBdkMsRUFBNEQ7QUFDekUsTUFBSSxDQUFDYyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBTUMsV0FBcUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILE9BQVosRUFDM0JJLE1BRDJCLENBQ3BCLFVBQUNDLEdBQUQsRUFBUztBQUNmLFdBQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUNELEdBQUQsQ0FBakI7QUFDRCxHQUgyQixFQUkzQmxCLEdBSjJCLENBSXZCLFVBQUNrQixHQUFELEVBQVM7QUFDWiwyQ0FBWUwsT0FBTyxDQUFDSyxHQUFELENBQW5CO0FBQTBCaEIsV0FBSyxFQUFFZ0I7QUFBakM7QUFDRCxHQU4yQixDQUE5QjtBQVFBLE1BQU1FLE9BQU8sR0FBRztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxXQUFPLEVBQUU7QUFBckIsR0FBaEI7QUFFQVIsYUFBVyxDQUFDUyxPQUFaLENBQW9CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDbEMsUUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFVBQWQsQ0FBSixFQUErQjtBQUM3QkEsZ0JBQVUsQ0FBQ3hCLEdBQVgsQ0FBZSxVQUFDMkIsUUFBRCxFQUFjO0FBQzNCLFlBQUlDLCtEQUFjLENBQUNELFFBQVEsQ0FBQzFCLEdBQVYsRUFBZSxPQUFmLENBQWxCLEVBQTJDO0FBQ3pDbUIsaUJBQU8sQ0FBQyxNQUFELENBQVAsR0FBa0J2QixTQUFTLENBQUM4QixRQUFELEVBQVc1QixNQUFYLENBQTNCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xxQixpQkFBTyxDQUFDLFNBQUQsQ0FBUCxHQUFxQnZCLFNBQVMsQ0FBQzhCLFFBQUQsRUFBVzVCLE1BQVgsQ0FBOUI7QUFDRDtBQUNGLE9BTkQ7QUFPRCxLQVJELE1BUU87QUFDTHFCLGFBQU8sQ0FBQyxTQUFELENBQVAsR0FBcUJ2QixTQUFTLENBQUMyQixVQUFELEVBQWF6QixNQUFiLENBQTlCO0FBQ0Q7QUFDRixHQVpEO0FBYUEsU0FBT3FCLE9BQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9nZXRTcmNTZXRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBzdHJpbmdFbmRzV2l0aCBmcm9tIFwiLi9zdHJpbmdFbmRzV2l0aFwiO1xuXG5mdW5jdGlvbiBnZXRTcmNTZXQoZm9ybWF0OiBGb3JtYXQsIHByZWZpeDogc3RyaW5nKSB7XG4gIHJldHVybiBmb3JtYXRcbiAgICAubWFwKCh7IHVybCwgd2lkdGggfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgd2lkdGgsIHVybCB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgLnJlZHVjZSgoYWNjOiBhbnksIGN1cnJlbnQ6IGFueSwgaW5kZXg6IG51bWJlciwgYXJyYXk6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWNjICtcbiAgICAgICAgYCR7cHJlZml4ICsgY3VycmVudC51cmx9ICR7Y3VycmVudC53aWR0aH13JHtcbiAgICAgICAgICBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwiXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH0sIFwiXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTcmNTZXRzKGZvcm1hdHM/OiBGb3JtYXRzLCBwcmVmaXg/OiBzdHJpbmcpOiB7fSB7XG4gIGlmICghZm9ybWF0cykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGJyZWFrcG9pbnRzOiBGb3JtYXRbXSA9IE9iamVjdC5rZXlzKGZvcm1hdHMpXG4gICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gISFwYXJzZUludChrZXkpO1xuICAgIH0pXG4gICAgLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5mb3JtYXRzW2tleV0sIHdpZHRoOiBrZXkgfTtcbiAgICB9KTtcblxuICBjb25zdCBzcmNTZXRzID0geyB3ZWJwOiBbXSwgcmVndWxhcjogW10gfTtcblxuICBicmVha3BvaW50cy5mb3JFYWNoKChicmVha3BvaW50KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludCkpIHtcbiAgICAgIGJyZWFrcG9pbnQubWFwKChicEZvcm1hdCkgPT4ge1xuICAgICAgICBpZiAoc3RyaW5nRW5kc1dpdGgoYnBGb3JtYXQudXJsLCBcIi53ZWJwXCIpKSB7XG4gICAgICAgICAgc3JjU2V0c1tcIndlYnBcIl0gPSBnZXRTcmNTZXQoYnBGb3JtYXQsIHByZWZpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3JjU2V0c1tcInJlZ3VsYXJcIl0gPSBnZXRTcmNTZXQoYnBGb3JtYXQsIHByZWZpeCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcmNTZXRzW1wicmVndWxhclwiXSA9IGdldFNyY1NldChicmVha3BvaW50LCBwcmVmaXgpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzcmNTZXRzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/getSrcSets.ts\n");

/***/ })

})