webpackHotUpdate("background",{

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo_phobia.png */ \"./src/img/logo_phobia.png\");\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"ccc\")\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n\n    const toot = 'https://7185ee80.ngrok.io/fake';\n    console.log(\"je vais faire mon fetch :-)\")\n    fetch(toot, {\n      mode: 'no-cors',\n      method: 'POST', // or 'PUT'\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify({toto: \"titi\"}) // data can be `string` or {object}!\n    }).then(res => res.json())\n    .then(response => console.log('Success:', JSON.stringify(response)))\n    .catch(error => console.error('Error:', error));\n\n\n\n\n\n    // if (request.contentScriptQuery == \"getdata\") {\n    //     var url = request.url;\n    //     fetch(url)\n    //         .then(response => response.text())\n    //         .then(response => sendResponse(response))\n    //         .catch()\n    //     return true;\n    // }\n    // if (request.contentScriptQuery == \"postData\") {\n    //     fetch(request.url, {\n    //         method: 'POST',\n    //         headers: {\n    //             'Accept': 'application/json, application/xml, text/plain, text/html, *.*',\n    //             'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'\n    //         },\n    //         body: 'result=' + request.data\n    //     })\n    //         .then(response => response.json())\n    //         .then(response => sendResponse(response))\n    //         .catch(error => console.log('Error:', error));\n    //     return true;\n    // }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvbG9nb19waG9iaWEucG5nJ1xuXG5jb25zb2xlLmxvZyhcImNjY1wiKVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG5cbiAgICBjb25zdCB0b290ID0gJ2h0dHBzOi8vNzE4NWVlODAubmdyb2suaW8vZmFrZSc7XG4gICAgY29uc29sZS5sb2coXCJqZSB2YWlzIGZhaXJlIG1vbiBmZXRjaCA6LSlcIilcbiAgICBmZXRjaCh0b290LCB7XG4gICAgICBtb2RlOiAnbm8tY29ycycsXG4gICAgICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0b3RvOiBcInRpdGlcIn0pIC8vIGRhdGEgY2FuIGJlIGBzdHJpbmdgIG9yIHtvYmplY3R9IVxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpKTtcblxuXG5cblxuXG4gICAgLy8gaWYgKHJlcXVlc3QuY29udGVudFNjcmlwdFF1ZXJ5ID09IFwiZ2V0ZGF0YVwiKSB7XG4gICAgLy8gICAgIHZhciB1cmwgPSByZXF1ZXN0LnVybDtcbiAgICAvLyAgICAgZmV0Y2godXJsKVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgpXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cbiAgICAvLyBpZiAocmVxdWVzdC5jb250ZW50U2NyaXB0UXVlcnkgPT0gXCJwb3N0RGF0YVwiKSB7XG4gICAgLy8gICAgIGZldGNoKHJlcXVlc3QudXJsLCB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIGFwcGxpY2F0aW9uL3htbCwgdGV4dC9wbGFpbiwgdGV4dC9odG1sLCAqLionLFxuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04J1xuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIGJvZHk6ICdyZXN1bHQ9JyArIHJlcXVlc3QuZGF0YVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpKTtcbiAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

})