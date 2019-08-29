webpackHotUpdate("popup",{

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/popup.css */ \"./src/css/popup.css\");\n/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_popup_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    var checkPageButton = document.getElementById('clickIt');\n    checkPageButton.addEventListener('click', function() {\n\n      chrome.tabs.getSelected(null, function(tab) {\n        alert(\"Scroll without fear\");\n        // Ici mettre le lien vers phobia.live\n      });\n    }, false);\n  }, false);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9wdXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9wdXAuanM/ZGZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvcG9wdXAuY3NzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hlY2tQYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrSXQnKTtcbiAgICBjaGVja1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgIGFsZXJ0KFwiU2Nyb2xsIHdpdGhvdXQgZmVhclwiKTtcbiAgICAgICAgLy8gSWNpIG1ldHRyZSBsZSBsaWVuIHZlcnMgcGhvYmlhLmxpdmVcbiAgICAgIH0pO1xuICAgIH0sIGZhbHNlKTtcbiAgfSwgZmFsc2UpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/popup.js\n");

/***/ })

})