webpackHotUpdate("popup",{

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/popup.css */ \"./src/css/popup.css\");\n/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_popup_css__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    var checkPageButton = document.getElementById('clickIt');\n    checkPageButton.addEventListener('click', function() {\n\n      chrome.tabs.getSelected(null, function(tab) {\n        alert(\"Hello..! It's my first chrome extension.\");\n      });\n    }, false);\n  }, false);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9wdXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9wdXAuanM/ZGZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvcG9wdXAuY3NzXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoZWNrUGFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlja0l0Jyk7XG4gICAgY2hlY2tQYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKG51bGwsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgICBhbGVydChcIkhlbGxvLi4hIEl0J3MgbXkgZmlyc3QgY2hyb21lIGV4dGVuc2lvbi5cIik7XG4gICAgICB9KTtcbiAgICB9LCBmYWxzZSk7XG4gIH0sIGZhbHNlKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/popup.js\n");

/***/ }),

/***/ "./src/js/popup/example.js":
false

})