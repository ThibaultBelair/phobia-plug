webpackHotUpdate("background",{

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo_phobia.png */ \"./src/img/logo_phobia.png\");\n/* harmony import */ var _img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_phobia_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"dddd\")\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    if (request.contentScriptQuery == \"getdata\") {\n        var url = request.url;\n        fetch(url)\n            .then(response => response.text())\n            .then(response => sendResponse(response))\n            .catch()\n        return true;\n    }\n    if (request.contentScriptQuery == \"postData\") {\n\n\n        const fakeJson = [\n  { \"src\": \"https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w\", \"alert\": true },\n  { \"src\": \"https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg\", \"alert\": false },\n  { \"src\": \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg\", \"alert\": true },\n  { \"src\": \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg\", \"alert\": false }\n\n]\n\n        sendResponse({toto: \"titi\"})\n\n\n        // fetch(request.url, {\n        //     // mode: 'no-cors',\n        //     method: 'POST',\n        //     headers: {\n        //         'Accept': 'application/json',\n        //         'Content-Type': 'application/json'\n        //     }\n        // })\n        //     .then((response) => {\n        //       console.log(\"je suis la\")\n        //       console.log(response)\n        //       console.log(response.body)\n        //       return response.json()\n        //     })\n        //     .then(response => sendResponse(response))\n        //     .catch(error => console.log('Error:', error));\n        // return true;\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvbG9nb19waG9iaWEucG5nJ1xuXG5jb25zb2xlLmxvZyhcImRkZGRcIilcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0LmNvbnRlbnRTY3JpcHRRdWVyeSA9PSBcImdldGRhdGFcIikge1xuICAgICAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNlbmRSZXNwb25zZShyZXNwb25zZSkpXG4gICAgICAgICAgICAuY2F0Y2goKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuY29udGVudFNjcmlwdFF1ZXJ5ID09IFwicG9zdERhdGFcIikge1xuXG5cbiAgICAgICAgY29uc3QgZmFrZUpzb24gPSBbXG4gIHsgXCJzcmNcIjogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2ZpZ2Fyby8zNzV4MjEwX2Nyb3AvMjAxNi8wNy8wOC9YVk05OTI0NWZjYy00NDVkLTExZTYtYjU5Mi1kMzM3NjcxYzZhNGMuanBnIDM3NXcsIGh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZmlnYXJvLzY4MHgzODJfY3JvcC8yMDE2LzA3LzA4L1hWTTk5MjQ1ZmNjLTQ0NWQtMTFlNi1iNTkyLWQzMzc2NzFjNmE0Yy5qcGcgNjgwd1wiLCBcImFsZXJ0XCI6IHRydWUgfSxcbiAgeyBcInNyY1wiOiBcImh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZmlnYXJvLzMwMHgyMDAvMjAxNi8wNy8wOC9YVk05ZGZmMjNlYy00MzgxLTExZTYtYWVkYi05ZmY4OTI0ODgyNWEtMzAweDIwMC5qcGdcIiwgXCJhbGVydFwiOiBmYWxzZSB9LFxuICB7IFwic3JjXCI6IFwiaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9laWRvcy81Mng1Ml9jcm9wLzIwMTkvMDgvMjMvWFZNZmNjMGQ2MDQtYjFlMy0xMWU5LWE1NjItMzRjMmQ4YzYzYjFlLmpwZ1wiLCBcImFsZXJ0XCI6IHRydWUgfSxcbiAgeyBcInNyY1wiOiBcImh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZWlkb3MvNTJ4NTJfY3JvcC8yMDE5LzA4LzIyL1hWTThmZjg4MTQwLWMyOGYtMTFlOS05YTIwLWVkZGMzMGIyMTI0MS5qcGdcIiwgXCJhbGVydFwiOiBmYWxzZSB9XG5cbl1cblxuICAgICAgICBzZW5kUmVzcG9uc2Uoe3RvdG86IFwidGl0aVwifSlcblxuXG4gICAgICAgIC8vIGZldGNoKHJlcXVlc3QudXJsLCB7XG4gICAgICAgIC8vICAgICAvLyBtb2RlOiAnbm8tY29ycycsXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcImplIHN1aXMgbGFcIilcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmJvZHkpXG4gICAgICAgIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiBzZW5kUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcikpO1xuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICB9XG59KTtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

})