webpackHotUpdate("background",{

/***/ "./src/img/logo_phobia.png":
/*!*********************************!*\
  !*** ./src/img/logo_phobia.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"logo_phobia.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2xvZ29fcGhvYmlhLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvbG9nb19waG9iaWEucG5nPzg5MzciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nb19waG9iaWEucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/logo_phobia.png\n");

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo_phobia.png */ \"./src/img/logo_phobia.png\");\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"dddd\")\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    if (request.contentScriptQuery == \"getdata\") {\n        var url = request.url;\n        fetch(url)\n            .then(response => response.text())\n            .then(response => sendResponse(response))\n            .catch()\n        return true;\n    }\n    if (request.contentScriptQuery == \"postData\") {\n        fetch(request.url, {\n            mode: 'no-cors',\n            method: 'POST',\n            headers: {\n                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',\n                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'\n            },\n            body: 'result=' + request.data\n        })\n            .then(response => {console.log(response) ; response.json()})\n            .then(response => sendResponse(response))\n            .catch(error => console.log('Error:', error));\n        return true;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvbG9nb19waG9iaWEucG5nJ1xuXG5jb25zb2xlLmxvZyhcImRkZGRcIilcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0LmNvbnRlbnRTY3JpcHRRdWVyeSA9PSBcImdldGRhdGFcIikge1xuICAgICAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNlbmRSZXNwb25zZShyZXNwb25zZSkpXG4gICAgICAgICAgICAuY2F0Y2goKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuY29udGVudFNjcmlwdFF1ZXJ5ID09IFwicG9zdERhdGFcIikge1xuICAgICAgICBmZXRjaChyZXF1ZXN0LnVybCwge1xuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi94bWwsIHRleHQvcGxhaW4sIHRleHQvaHRtbCwgKi4qJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiAncmVzdWx0PScgKyByZXF1ZXN0LmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtjb25zb2xlLmxvZyhyZXNwb25zZSkgOyByZXNwb25zZS5qc29uKCl9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

})