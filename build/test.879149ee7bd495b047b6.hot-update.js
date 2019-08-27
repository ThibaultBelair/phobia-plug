webpackHotUpdate("test",{

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction getImgAll (doc) {\n  return new Promise((resolve, reject) => {\n    loadImgAll(Array.from(searchDOM(doc)))\n      .then(resolve, reject)\n  })\n\nfunction searchDOM (doc) {\n  const srcChecker = /url\\(\\s*?['\"]?\\s*?(\\S+?)\\s*?[\"']?\\s*?\\)/i\n  return Array.from(doc.querySelectorAll('*'))\n    .reduce((collection, node) => {\n      // bg src\n      let prop = window.getComputedStyle(node, null)\n        .getPropertyValue('background-image')\n      // match `url(...)`\n      let match = srcChecker.exec(prop)\n      if (match) {\n        collection.add(match[1])\n      }\n\n      if (/^img$/i.test(node.tagName)) {\n        // src from img tag\n        collection.add(node.src)\n      } else if (/^frame$/i.test(node.tagName)) {\n        // iframe\n        try {\n          searchDOM(node.contentDocument || node.contentWindow.document)\n            .forEach(img => {\n              if (img) { collection.add(img) }\n            })\n        } catch (e) {}\n      }\n      return collection\n    }, new Set())\n  }\n\n  function loadImg (src, timeout = 500) {\n    var imgPromise = new Promise((resolve, reject) => {\n      let img = new Image()\n      img.onload = () => {\n        resolve({\n          src: src,\n          width: img.naturalWidth,\n          height: img.naturalHeight\n        })\n      }\n      img.onerror = reject\n      img.src = src\n    })\n    var timer = new Promise((resolve, reject) => {\n      setTimeout(reject, timeout)\n    })\n    return Promise.race([imgPromise, timer])\n  }\n\n  function loadImgAll (imgList, timeout = 500) {\n    return new Promise((resolve, reject) => {\n      Promise.all(\n        imgList\n          .map(src => loadImg(src, timeout))\n          .map(p => p.catch(e => false))\n      ).then(results => resolve(results.filter(r => r)))\n    })\n  }\n}\ngetImgAll(document).then(list => console.log(list))\n\n\n\n\n// document.getElementsByTagName('img')[1].style.blur(blurOffensiveImages) = \"url('https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg')\";\n\n// console.log(document.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]'));\n\n// document.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]').style.filter = 'blur(40px)';\n\nconst blurOffensiveImages = (responses) => {\n  responses.forEach(function (data) {\n\n        for (const alert in responses) {\n  if (responses.hasOwnProperty(alert)) {\n    console.log(responses[alert]);\n  }\n}\n    // // If the data contains 'alert: true' return the blur on the iterated data\n    // if (data === 'alert: true')\n    //   return document.querySelector(data).style.filter = 'blur(40px)';\n    // else\n    // // Otherwise log an error into the console\n    // console.log(\"error\");\n\n  });\n\n  // console.log(responses);\n};\n\n\nconst responses = [\n  { src: \"https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg\", alert: true },\n  { src: \"https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg\", alert: false },\n  { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg\", alert: true },\n  { src: \"https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg\", alert: false }\n]\n\nblurOffensiveImages(responses);\n\n\n\n\n// Images\n// Analyse img du DOM -> [ { }, { }]\n// Envoie les img au serveur\n// Le serveur repond -> [{ ... alert: true }, { ... alert: false }]\n// On envoie la response du serveur a la méthode blurOffensiveImages\n// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzPzViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBnZXRJbWdBbGwgKGRvYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxvYWRJbWdBbGwoQXJyYXkuZnJvbShzZWFyY2hET00oZG9jKSkpXG4gICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpXG4gIH0pXG5cbmZ1bmN0aW9uIHNlYXJjaERPTSAoZG9jKSB7XG4gIGNvbnN0IHNyY0NoZWNrZXIgPSAvdXJsXFwoXFxzKj9bJ1wiXT9cXHMqPyhcXFMrPylcXHMqP1tcIiddP1xccyo/XFwpL2lcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcbiAgICAucmVkdWNlKChjb2xsZWN0aW9uLCBub2RlKSA9PiB7XG4gICAgICAvLyBiZyBzcmNcbiAgICAgIGxldCBwcm9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbClcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKVxuICAgICAgLy8gbWF0Y2ggYHVybCguLi4pYFxuICAgICAgbGV0IG1hdGNoID0gc3JjQ2hlY2tlci5leGVjKHByb3ApXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdGlvbi5hZGQobWF0Y2hbMV0pXG4gICAgICB9XG5cbiAgICAgIGlmICgvXmltZyQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gc3JjIGZyb20gaW1nIHRhZ1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChub2RlLnNyYylcbiAgICAgIH0gZWxzZSBpZiAoL15mcmFtZSQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gaWZyYW1lXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2VhcmNoRE9NKG5vZGUuY29udGVudERvY3VtZW50IHx8IG5vZGUuY29udGVudFdpbmRvdy5kb2N1bWVudClcbiAgICAgICAgICAgIC5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbWcpIHsgY29sbGVjdGlvbi5hZGQoaW1nKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICB9LCBuZXcgU2V0KCkpXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nIChzcmMsIHRpbWVvdXQgPSA1MDApIHtcbiAgICB2YXIgaW1nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgd2lkdGg6IGltZy5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBpbWcubmF0dXJhbEhlaWdodFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3RcbiAgICAgIGltZy5zcmMgPSBzcmNcbiAgICB9KVxuICAgIHZhciB0aW1lciA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQocmVqZWN0LCB0aW1lb3V0KVxuICAgIH0pXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbaW1nUHJvbWlzZSwgdGltZXJdKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEltZ0FsbCAoaW1nTGlzdCwgdGltZW91dCA9IDUwMCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgaW1nTGlzdFxuICAgICAgICAgIC5tYXAoc3JjID0+IGxvYWRJbWcoc3JjLCB0aW1lb3V0KSlcbiAgICAgICAgICAubWFwKHAgPT4gcC5jYXRjaChlID0+IGZhbHNlKSlcbiAgICAgICkudGhlbihyZXN1bHRzID0+IHJlc29sdmUocmVzdWx0cy5maWx0ZXIociA9PiByKSkpXG4gICAgfSlcbiAgfVxufVxuZ2V0SW1nQWxsKGRvY3VtZW50KS50aGVuKGxpc3QgPT4gY29uc29sZS5sb2cobGlzdCkpXG5cblxuXG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVsxXS5zdHlsZS5ibHVyKGJsdXJPZmZlbnNpdmVJbWFnZXMpID0gXCJ1cmwoJ2h0dHBzOi8vaW1nLmxlbWRlLmZyLzIwMTkvMDgvMjMvMC8wLzI1NjYvMTk1Ny82ODgvMC82MC8wL2FjYjdlMTZfLVFhYXcwQTAwMFBFeEM2b0hNRUQtelZLLmpwZycpXCI7XG5cbi8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZ1tzcmM9XCJodHRwczovL2ltZy5sZW1kZS5mci8yMDE5LzA4LzIzLzAvMC8yNTY2LzE5NTcvNjg4LzAvNjAvMC9hY2I3ZTE2Xy1RYWF3MEEwMDBQRXhDNm9ITUVELXpWSy5qcGdcIl0nKSk7XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZ1tzcmM9XCJodHRwczovL2ltZy5sZW1kZS5mci8yMDE5LzA4LzIzLzAvMC8yNTY2LzE5NTcvNjg4LzAvNjAvMC9hY2I3ZTE2Xy1RYWF3MEEwMDBQRXhDNm9ITUVELXpWSy5qcGdcIl0nKS5zdHlsZS5maWx0ZXIgPSAnYmx1cig0MHB4KSc7XG5cbmNvbnN0IGJsdXJPZmZlbnNpdmVJbWFnZXMgPSAocmVzcG9uc2VzKSA9PiB7XG4gIHJlc3BvbnNlcy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBhbGVydCBpbiByZXNwb25zZXMpIHtcbiAgaWYgKHJlc3BvbnNlcy5oYXNPd25Qcm9wZXJ0eShhbGVydCkpIHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZXNbYWxlcnRdKTtcbiAgfVxufVxuICAgIC8vIC8vIElmIHRoZSBkYXRhIGNvbnRhaW5zICdhbGVydDogdHJ1ZScgcmV0dXJuIHRoZSBibHVyIG9uIHRoZSBpdGVyYXRlZCBkYXRhXG4gICAgLy8gaWYgKGRhdGEgPT09ICdhbGVydDogdHJ1ZScpXG4gICAgLy8gICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhKS5zdHlsZS5maWx0ZXIgPSAnYmx1cig0MHB4KSc7XG4gICAgLy8gZWxzZVxuICAgIC8vIC8vIE90aGVyd2lzZSBsb2cgYW4gZXJyb3IgaW50byB0aGUgY29uc29sZVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG5cbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2VzKTtcbn07XG5cblxuY29uc3QgcmVzcG9uc2VzID0gW1xuICB7IHNyYzogXCJodHRwczovL2kuZjFnLmZyL21lZGlhL2ZpZ2Fyby8zNzV4MjEwX2Nyb3AvMjAxNi8wNy8wOC9YVk05OTI0NWZjYy00NDVkLTExZTYtYjU5Mi1kMzM3NjcxYzZhNGMuanBnXCIsIGFsZXJ0OiB0cnVlIH0sXG4gIHsgc3JjOiBcImh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZmlnYXJvLzMwMHgyMDAvMjAxNi8wNy8wOC9YVk05ZGZmMjNlYy00MzgxLTExZTYtYWVkYi05ZmY4OTI0ODgyNWEtMzAweDIwMC5qcGdcIiwgYWxlcnQ6IGZhbHNlIH0sXG4gIHsgc3JjOiBcImh0dHBzOi8vaS5mMWcuZnIvbWVkaWEvZWlkb3MvNTJ4NTJfY3JvcC8yMDE5LzA4LzIzL1hWTWZjYzBkNjA0LWIxZTMtMTFlOS1hNTYyLTM0YzJkOGM2M2IxZS5qcGdcIiwgYWxlcnQ6IHRydWUgfSxcbiAgeyBzcmM6IFwiaHR0cHM6Ly9pLmYxZy5mci9tZWRpYS9laWRvcy81Mng1Ml9jcm9wLzIwMTkvMDgvMjIvWFZNOGZmODgxNDAtYzI4Zi0xMWU5LTlhMjAtZWRkYzMwYjIxMjQxLmpwZ1wiLCBhbGVydDogZmFsc2UgfVxuXVxuXG5ibHVyT2ZmZW5zaXZlSW1hZ2VzKHJlc3BvbnNlcyk7XG5cblxuXG5cbi8vIEltYWdlc1xuLy8gQW5hbHlzZSBpbWcgZHUgRE9NIC0+IFsgeyB9LCB7IH1dXG4vLyBFbnZvaWUgbGVzIGltZyBhdSBzZXJ2ZXVyXG4vLyBMZSBzZXJ2ZXVyIHJlcG9uZCAtPiBbeyAuLi4gYWxlcnQ6IHRydWUgfSwgeyAuLi4gYWxlcnQ6IGZhbHNlIH1dXG4vLyBPbiBlbnZvaWUgbGEgcmVzcG9uc2UgZHUgc2VydmV1ciBhIGxhIG3DqXRob2RlIGJsdXJPZmZlbnNpdmVJbWFnZXNcbi8vIENldHRlIG3DqXRob2RlIGl0ZXJlIHN1ciBsYSByZXBvbnNlIGR1IHNlcnZldXIgZXQgZmxvdXRlIGwnaW1hZ2UgcXVpIGNvcnJlc3BvbmQgc2kgbGEgY2xlZiBhbGVydCB2YXV0IHRydWVcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/test.js\n");

/***/ })

})