webpackHotUpdate("test",{

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction getImgAll (doc) {\n  return new Promise((resolve, reject) => {\n    loadImgAll(Array.from(searchDOM(doc)))\n      .then(resolve, reject)\n  })\n\nfunction searchDOM (doc) {\n  const srcChecker = /url\\(\\s*?['\"]?\\s*?(\\S+?)\\s*?[\"']?\\s*?\\)/i\n  return Array.from(doc.querySelectorAll('*'))\n    .reduce((collection, node) => {\n      // bg src\n      let prop = window.getComputedStyle(node, null)\n        .getPropertyValue('background-image')\n      // match `url(...)`\n      let match = srcChecker.exec(prop)\n      if (match) {\n        collection.add(match[1])\n      }\n\n      if (/^img$/i.test(node.tagName)) {\n        // src from img tag\n        collection.add(node.src)\n      } else if (/^frame$/i.test(node.tagName)) {\n        // iframe\n        try {\n          searchDOM(node.contentDocument || node.contentWindow.document)\n            .forEach(img => {\n              if (img) { collection.add(img) }\n            })\n        } catch (e) {}\n      }\n      return collection\n    }, new Set())\n  }\n\n  function loadImg (src, timeout = 500) {\n    var imgPromise = new Promise((resolve, reject) => {\n      let img = new Image()\n      img.onload = () => {\n        resolve(src)\n      }\n      img.onerror = reject\n      img.src = src\n    })\n    var timer = new Promise((resolve, reject) => {\n      setTimeout(reject, timeout)\n    })\n    return Promise.race([imgPromise, timer])\n  }\n\n  function loadImgAll (imgList, timeout = 500) {\n    return new Promise((resolve, reject) => {\n      Promise.all(\n        imgList\n          .map(src => loadImg(src, timeout))\n          .map(p => p.catch(e => false))\n      ).then(results => resolve(results.filter(r => r)))\n    })\n  }\n}\ngetImgAll(document).then(list => {\n    console.log(list)\n    console.log()\n    dataToSend = {\n      urls: list,\n      keywords: ['spider', 'snake']\n    }\n    console.log(dataToSend)\n    console.log(\"je dois envoyer cette liste a rails\")\n  }\n)\n\n\n\nconst GetUrlKeywordsToRails = (requests) => {\n  requests.forEach(function (data) {\n    if (data.keywords === 'spider') {\n      // console.log(data);\n      // console.log(`img[srcset=\"${data.src}\"]`);\n      // console.log(document.querySelector(`img[srcset=\"${data.src}\"]`));\n      document.querySelector(`img[srcset=\"${data.src}\"]`);\n    }\n  });\n\n  // console.log(request);\n};\n\n\nconst requests = [\n  { src: \"https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w\", keywords: 'spider' },\n  { src: \"https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg\", keywords: false },\n  { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg\", keywords: 'spider' },\n  { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg\", keywords: false }\n]\n\n\nGetUrlKeywordsToRails(requests);\n\n\n\n\n\n// const blurOffensiveImages = (responses) => {\n//   responses.forEach(function (data) {\n//     if (data.alert) {\n//       console.log(data);\n//       // console.log(`img[srcset=\"${data.src}\"]`);\n//       // console.log(document.querySelector(`img[srcset=\"${data.src}\"]`));\n//       document.querySelector(`img[srcset=\"${data.src}\"]`).style.filter = 'blur(40px)';\n//     }\n//   });\n\n//   // console.log(responses);\n// };\n\n\n// const responses = [\n//   { src: \"https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w\", alert: true },\n//   { src: \"https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg\", alert: false },\n//   { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg\", alert: true },\n//   { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg\", alert: false }\n// ]\n\n\n// blurOffensiveImages(responses);\n\n\n\n\n// Images\n// Analyse img du DOM -> [ { }, { }]\n// Envoie les img au serveur\n// Le serveur repond -> [{ ... alert: true }, { ... alert: false }]\n// On envoie la response du serveur a la méthode blurOffensiveImages\n// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzPzViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBnZXRJbWdBbGwgKGRvYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxvYWRJbWdBbGwoQXJyYXkuZnJvbShzZWFyY2hET00oZG9jKSkpXG4gICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpXG4gIH0pXG5cbmZ1bmN0aW9uIHNlYXJjaERPTSAoZG9jKSB7XG4gIGNvbnN0IHNyY0NoZWNrZXIgPSAvdXJsXFwoXFxzKj9bJ1wiXT9cXHMqPyhcXFMrPylcXHMqP1tcIiddP1xccyo/XFwpL2lcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcbiAgICAucmVkdWNlKChjb2xsZWN0aW9uLCBub2RlKSA9PiB7XG4gICAgICAvLyBiZyBzcmNcbiAgICAgIGxldCBwcm9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbClcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKVxuICAgICAgLy8gbWF0Y2ggYHVybCguLi4pYFxuICAgICAgbGV0IG1hdGNoID0gc3JjQ2hlY2tlci5leGVjKHByb3ApXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdGlvbi5hZGQobWF0Y2hbMV0pXG4gICAgICB9XG5cbiAgICAgIGlmICgvXmltZyQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gc3JjIGZyb20gaW1nIHRhZ1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChub2RlLnNyYylcbiAgICAgIH0gZWxzZSBpZiAoL15mcmFtZSQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gaWZyYW1lXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2VhcmNoRE9NKG5vZGUuY29udGVudERvY3VtZW50IHx8IG5vZGUuY29udGVudFdpbmRvdy5kb2N1bWVudClcbiAgICAgICAgICAgIC5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbWcpIHsgY29sbGVjdGlvbi5hZGQoaW1nKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICB9LCBuZXcgU2V0KCkpXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nIChzcmMsIHRpbWVvdXQgPSA1MDApIHtcbiAgICB2YXIgaW1nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzcmMpXG4gICAgICB9XG4gICAgICBpbWcub25lcnJvciA9IHJlamVjdFxuICAgICAgaW1nLnNyYyA9IHNyY1xuICAgIH0pXG4gICAgdmFyIHRpbWVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZWplY3QsIHRpbWVvdXQpXG4gICAgfSlcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtpbWdQcm9taXNlLCB0aW1lcl0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nQWxsIChpbWdMaXN0LCB0aW1lb3V0ID0gNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICBpbWdMaXN0XG4gICAgICAgICAgLm1hcChzcmMgPT4gbG9hZEltZyhzcmMsIHRpbWVvdXQpKVxuICAgICAgICAgIC5tYXAocCA9PiBwLmNhdGNoKGUgPT4gZmFsc2UpKVxuICAgICAgKS50aGVuKHJlc3VsdHMgPT4gcmVzb2x2ZShyZXN1bHRzLmZpbHRlcihyID0+IHIpKSlcbiAgICB9KVxuICB9XG59XG5nZXRJbWdBbGwoZG9jdW1lbnQpLnRoZW4obGlzdCA9PiB7XG4gICAgY29uc29sZS5sb2cobGlzdClcbiAgICBjb25zb2xlLmxvZygpXG4gICAgZGF0YVRvU2VuZCA9IHtcbiAgICAgIHVybHM6IGxpc3QsXG4gICAgICBrZXl3b3JkczogWydzcGlkZXInLCAnc25ha2UnXVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhVG9TZW5kKVxuICAgIGNvbnNvbGUubG9nKFwiamUgZG9pcyBlbnZveWVyIGNldHRlIGxpc3RlIGEgcmFpbHNcIilcbiAgfVxuKVxuXG5cblxuY29uc3QgR2V0VXJsS2V5d29yZHNUb1JhaWxzID0gKHJlcXVlc3RzKSA9PiB7XG4gIHJlcXVlc3RzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5rZXl3b3JkcyA9PT0gJ3NwaWRlcicpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gY29uc29sZS5sb2coYGltZ1tzcmNzZXQ9XCIke2RhdGEuc3JjfVwiXWApO1xuICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW3NyY3NldD1cIiR7ZGF0YS5zcmN9XCJdYCkpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW3NyY3NldD1cIiR7ZGF0YS5zcmN9XCJdYCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbn07XG5cblxuY29uc3QgcmVxdWVzdHMgPSBbXG4gIHsgc3JjOiBcImh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZmlnYXJvLzM3NXgyMTBfY3JvcC8yMDE2LzA3LzA4L1hWTTk5MjQ1ZmNjLTQ0NWQtMTFlNi1iNTkyLWQzMzc2NzFjNmE0Yy5qcGcgMzc1dywgaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9maWdhcm8vNjgweDM4Ml9jcm9wLzIwMTYvMDcvMDgvWFZNOTkyNDVmY2MtNDQ1ZC0xMWU2LWI1OTItZDMzNzY3MWM2YTRjLmpwZyA2ODB3XCIsIGtleXdvcmRzOiAnc3BpZGVyJyB9LFxuICB7IHNyYzogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2ZpZ2Fyby8zMDB4MjAwLzIwMTYvMDcvMDgvWFZNOWRmZjIzZWMtNDM4MS0xMWU2LWFlZGItOWZmODkyNDg4MjVhLTMwMHgyMDAuanBnXCIsIGtleXdvcmRzOiBmYWxzZSB9LFxuICB7IHNyYzogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2VpZG9zLzUyeDUyX2Nyb3AvMjAxOS8wOC8yMy9YVk1mY2MwZDYwNC1iMWUzLTExZTktYTU2Mi0zNGMyZDhjNjNiMWUuanBnXCIsIGtleXdvcmRzOiAnc3BpZGVyJyB9LFxuICB7IHNyYzogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2VpZG9zLzUyeDUyX2Nyb3AvMjAxOS8wOC8yMi9YVk04ZmY4ODE0MC1jMjhmLTExZTktOWEyMC1lZGRjMzBiMjEyNDEuanBnXCIsIGtleXdvcmRzOiBmYWxzZSB9XG5dXG5cblxuR2V0VXJsS2V5d29yZHNUb1JhaWxzKHJlcXVlc3RzKTtcblxuXG5cblxuXG4vLyBjb25zdCBibHVyT2ZmZW5zaXZlSW1hZ2VzID0gKHJlc3BvbnNlcykgPT4ge1xuLy8gICByZXNwb25zZXMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgIGlmIChkYXRhLmFsZXJ0KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbWdbc3Jjc2V0PVwiJHtkYXRhLnNyY31cIl1gKTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tzcmNzZXQ9XCIke2RhdGEuc3JjfVwiXWApKTtcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tzcmNzZXQ9XCIke2RhdGEuc3JjfVwiXWApLnN0eWxlLmZpbHRlciA9ICdibHVyKDQwcHgpJztcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlcyk7XG4vLyB9O1xuXG5cbi8vIGNvbnN0IHJlc3BvbnNlcyA9IFtcbi8vICAgeyBzcmM6IFwiaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9maWdhcm8vMzc1eDIxMF9jcm9wLzIwMTYvMDcvMDgvWFZNOTkyNDVmY2MtNDQ1ZC0xMWU2LWI1OTItZDMzNzY3MWM2YTRjLmpwZyAzNzV3LCBodHRwczovL2kuZjFnLmZyL21lZGlhL2ZpZ2Fyby82ODB4MzgyX2Nyb3AvMjAxNi8wNy8wOC9YVk05OTI0NWZjYy00NDVkLTExZTYtYjU5Mi1kMzM3NjcxYzZhNGMuanBnIDY4MHdcIiwgYWxlcnQ6IHRydWUgfSxcbi8vICAgeyBzcmM6IFwiaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9maWdhcm8vMzAweDIwMC8yMDE2LzA3LzA4L1hWTTlkZmYyM2VjLTQzODEtMTFlNi1hZWRiLTlmZjg5MjQ4ODI1YS0zMDB4MjAwLmpwZ1wiLCBhbGVydDogZmFsc2UgfSxcbi8vICAgeyBzcmM6IFwiaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9laWRvcy81Mng1Ml9jcm9wLzIwMTkvMDgvMjMvWFZNZmNjMGQ2MDQtYjFlMy0xMWU5LWE1NjItMzRjMmQ4YzYzYjFlLmpwZ1wiLCBhbGVydDogdHJ1ZSB9LFxuLy8gICB7IHNyYzogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2VpZG9zLzUyeDUyX2Nyb3AvMjAxOS8wOC8yMi9YVk04ZmY4ODE0MC1jMjhmLTExZTktOWEyMC1lZGRjMzBiMjEyNDEuanBnXCIsIGFsZXJ0OiBmYWxzZSB9XG4vLyBdXG5cblxuLy8gYmx1ck9mZmVuc2l2ZUltYWdlcyhyZXNwb25zZXMpO1xuXG5cblxuXG4vLyBJbWFnZXNcbi8vIEFuYWx5c2UgaW1nIGR1IERPTSAtPiBbIHsgfSwgeyB9XVxuLy8gRW52b2llIGxlcyBpbWcgYXUgc2VydmV1clxuLy8gTGUgc2VydmV1ciByZXBvbmQgLT4gW3sgLi4uIGFsZXJ0OiB0cnVlIH0sIHsgLi4uIGFsZXJ0OiBmYWxzZSB9XVxuLy8gT24gZW52b2llIGxhIHJlc3BvbnNlIGR1IHNlcnZldXIgYSBsYSBtw6l0aG9kZSBibHVyT2ZmZW5zaXZlSW1hZ2VzXG4vLyBDZXR0ZSBtw6l0aG9kZSBpdGVyZSBzdXIgbGEgcmVwb25zZSBkdSBzZXJ2ZXVyIGV0IGZsb3V0ZSBsJ2ltYWdlIHF1aSBjb3JyZXNwb25kIHNpIGxhIGNsZWYgYWxlcnQgdmF1dCB0cnVlXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/test.js\n");

/***/ })

})