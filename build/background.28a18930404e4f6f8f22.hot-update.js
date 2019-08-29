webpackHotUpdate("background",{

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo_phobia.png */ \"./src/img/logo_phobia.png\");\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst url = 'https://7185ee80.ngrok.io/fake';\n\nfetch(url, {\n  mode: 'no-cors',\n  method: 'POST', // or 'PUT'\n  headers: {\n    'Content-Type': 'application/json',\n    'Accept': 'application/json'\n  },\n  body: JSON.stringify({toto: \"titi\"}) // data can be `string` or {object}!\n}).then(res => res.json())\n.then(response => console.log('Success:', JSON.stringify(response)))\n.catch(error => console.error('Error:', error));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvbG9nb19waG9iaWEucG5nJ1xuXG5cbmNvbnN0IHVybCA9ICdodHRwczovLzcxODVlZTgwLm5ncm9rLmlvL2Zha2UnO1xuXG5mZXRjaCh1cmwsIHtcbiAgbW9kZTogJ25vLWNvcnMnLFxuICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dG90bzogXCJ0aXRpXCJ9KSAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcbn0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4udGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpKVxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

})