webpackHotUpdate("background",{

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo_phobia.png */ \"./src/img/logo_phobia.png\");\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"dddd\")\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    if (request.contentScriptQuery == \"getdata\") {\n        var url = request.url;\n        fetch(url)\n            .then(response => response.text())\n            .then(response => sendResponse(response))\n            .catch()\n        return true;\n    }\n    if (request.contentScriptQuery == \"postData\") {\n\n\n        sendResponse({toto: \"titi\"})\n\n\n        // fetch(request.url, {\n        //     // mode: 'no-cors',\n        //     method: 'POST',\n        //     headers: {\n        //         'Accept': 'application/json',\n        //         'Content-Type': 'application/json'\n        //     }\n        // })\n        //     .then((response) => {\n        //       console.log(\"je suis la\")\n        //       console.log(response)\n        //       console.log(response.body)\n        //       return response.json()\n        //     })\n        //     .then(response => sendResponse(response))\n        //     .catch(error => console.log('Error:', error));\n        // return true;\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvbG9nb19waG9iaWEucG5nJ1xuXG5jb25zb2xlLmxvZyhcImRkZGRcIilcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0LmNvbnRlbnRTY3JpcHRRdWVyeSA9PSBcImdldGRhdGFcIikge1xuICAgICAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNlbmRSZXNwb25zZShyZXNwb25zZSkpXG4gICAgICAgICAgICAuY2F0Y2goKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuY29udGVudFNjcmlwdFF1ZXJ5ID09IFwicG9zdERhdGFcIikge1xuXG5cbiAgICAgICAgc2VuZFJlc3BvbnNlKHt0b3RvOiBcInRpdGlcIn0pXG5cblxuICAgICAgICAvLyBmZXRjaChyZXF1ZXN0LnVybCwge1xuICAgICAgICAvLyAgICAgLy8gbW9kZTogJ25vLWNvcnMnLFxuICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJqZSBzdWlzIGxhXCIpXG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ib2R5KVxuICAgICAgICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpKTtcbiAgICAgICAgLy8gcmV0dXJuIHRydWU7XG4gICAgfVxufSk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

})