webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/getImage.ts":
/*!***************************!*\
  !*** ./utils/getImage.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getImage; });\nfunction getFormats(url, base64) {\n  var formats = {\n    base64: {\n      url: base64\n    }\n  };\n\n  for (var i = 400; i <= 3000; i += 200) {\n    formats[i] = [{\n      url: \"/\".concat(i, \"_\").concat(url)\n    } // {\n    //   url: `/${i}_${url}`.replace(\".jpg\", \".webp\"),\n    // },\n    ];\n  }\n\n  return formats;\n}\n\nfunction getImage(_ref) {\n  var url = _ref.url,\n      base64 = _ref.base64,\n      width = _ref.width,\n      height = _ref.height;\n  return {\n    url: url,\n    alternativeText: \"This is \".concat(url),\n    formats: getFormats(url, base64),\n    width: width,\n    height: height\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2V0SW1hZ2UudHM/NmRmMyJdLCJuYW1lcyI6WyJnZXRGb3JtYXRzIiwidXJsIiwiYmFzZTY0IiwiZm9ybWF0cyIsImkiLCJnZXRJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBaUNDLE1BQWpDLEVBQWdFO0FBQzlELE1BQU1DLE9BQXNCLEdBQUc7QUFDN0JELFVBQU0sRUFBRTtBQUNORCxTQUFHLEVBQUVDO0FBREM7QUFEcUIsR0FBL0I7O0FBS0EsT0FBSyxJQUFJRSxDQUFDLEdBQUcsR0FBYixFQUFrQkEsQ0FBQyxJQUFJLElBQXZCLEVBQTZCQSxDQUFDLElBQUksR0FBbEMsRUFBdUM7QUFDckNELFdBQU8sQ0FBQ0MsQ0FBRCxDQUFQLEdBQWEsQ0FDWDtBQUNFSCxTQUFHLGFBQU1HLENBQU4sY0FBV0gsR0FBWDtBQURMLEtBRFcsQ0FJWDtBQUNBO0FBQ0E7QUFOVyxLQUFiO0FBUUQ7O0FBQ0QsU0FBT0UsT0FBUDtBQUNEOztBQUVjLFNBQVNFLFFBQVQsT0FVTTtBQUFBLE1BVG5CSixHQVNtQixRQVRuQkEsR0FTbUI7QUFBQSxNQVJuQkMsTUFRbUIsUUFSbkJBLE1BUW1CO0FBQUEsTUFQbkJJLEtBT21CLFFBUG5CQSxLQU9tQjtBQUFBLE1BTm5CQyxNQU1tQixRQU5uQkEsTUFNbUI7QUFDbkIsU0FBTztBQUNMTixPQUFHLEVBQUhBLEdBREs7QUFFTE8sbUJBQWUsb0JBQWFQLEdBQWIsQ0FGVjtBQUdMRSxXQUFPLEVBQUVILFVBQVUsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLENBSGQ7QUFJTEksU0FBSyxFQUFMQSxLQUpLO0FBS0xDLFVBQU0sRUFBTkE7QUFMSyxHQUFQO0FBT0QiLCJmaWxlIjoiLi91dGlscy9nZXRJbWFnZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVzIH0gZnJvbSBcIi4uL2Rpc3RcIjtcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0cyh1cmw6IHN0cmluZywgYmFzZTY0OiBzdHJpbmcpOiBUeXBlcy5Gb3JtYXRzIHtcbiAgY29uc3QgZm9ybWF0czogVHlwZXMuRm9ybWF0cyA9IHtcbiAgICBiYXNlNjQ6IHtcbiAgICAgIHVybDogYmFzZTY0LFxuICAgIH0sXG4gIH07XG4gIGZvciAobGV0IGkgPSA0MDA7IGkgPD0gMzAwMDsgaSArPSAyMDApIHtcbiAgICBmb3JtYXRzW2ldID0gW1xuICAgICAge1xuICAgICAgICB1cmw6IGAvJHtpfV8ke3VybH1gLFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgdXJsOiBgLyR7aX1fJHt1cmx9YC5yZXBsYWNlKFwiLmpwZ1wiLCBcIi53ZWJwXCIpLFxuICAgICAgLy8gfSxcbiAgICBdO1xuICB9XG4gIHJldHVybiBmb3JtYXRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJbWFnZSh7XG4gIHVybCxcbiAgYmFzZTY0LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufToge1xuICB1cmw6IHN0cmluZztcbiAgYmFzZTY0OiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufSk6IFR5cGVzLkltYWdlUHJvcHMge1xuICByZXR1cm4ge1xuICAgIHVybCxcbiAgICBhbHRlcm5hdGl2ZVRleHQ6IGBUaGlzIGlzICR7dXJsfWAsXG4gICAgZm9ybWF0czogZ2V0Rm9ybWF0cyh1cmwsIGJhc2U2NCksXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getImage.ts\n");

/***/ })

})