webpackHotUpdate("test",{

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('fdhsjfkds')\n// const extractImagesFromDom = () => {\n\n// }\n\n// const extractTextBlobsFromDom = () => {\n\n// }\n\n// // extractImagesFromDom() -> [{ src: 'http://toto.jpg', alt: 'toto' }, { ... } ]\n// // extractTextBlobsFromDom() -> [{ tag: 'p', content: 'lorem ispum', id: '25GF3' } , { ... } ]\n\n// const imgs = document.querySelectorAll( 'img' );\n// const src = [];\n// for( const i = imgs.length; i--; ) {\n//   src.push( img.src );\n// }\n\nfunction getImgAll (doc) {\n  return new Promise((resolve, reject) => {\n    loadImgAll(Array.from(searchDOM(doc)))\n      .then(resolve, reject)\n  })\n\nfunction searchDOM (doc) {\n  const srcChecker = /url\\(\\s*?['\"]?\\s*?(\\S+?)\\s*?[\"']?\\s*?\\)/i\n  return Array.from(doc.querySelectorAll('*'))\n    .reduce((collection, node) => {\n      // bg src\n      let prop = window.getComputedStyle(node, null)\n        .getPropertyValue('background-image')\n      // match `url(...)`\n      let match = srcChecker.exec(prop)\n      if (match) {\n        collection.add(match[1])\n      }\n\n      if (/^img$/i.test(node.tagName)) {\n        // src from img tag\n        collection.add(node.src)\n      } else if (/^frame$/i.test(node.tagName)) {\n        // iframe\n        try {\n          searchDOM(node.contentDocument || node.contentWindow.document)\n            .forEach(img => {\n              if (img) { collection.add(img) }\n            })\n        } catch (e) {}\n      }\n      return collection\n    }, new Set())\n  }\n\n  function loadImg (src, timeout = 500) {\n    var imgPromise = new Promise((resolve, reject) => {\n      let img = new Image()\n      img.onload = () => {\n        resolve({\n          src: src,\n          width: img.naturalWidth,\n          height: img.naturalHeight\n        })\n      }\n      img.onerror = reject\n      img.src = src\n    })\n    var timer = new Promise((resolve, reject) => {\n      setTimeout(reject, timeout)\n    })\n    return Promise.race([imgPromise, timer])\n  }\n\n  function loadImgAll (imgList, timeout = 500) {\n    return new Promise((resolve, reject) => {\n      Promise.all(\n        imgList\n          .map(src => loadImg(src, timeout))\n          .map(p => p.catch(e => false))\n      ).then(results => resolve(results.filter(r => r)))\n    })\n  }\n}\n\ngetImgAll(document).then(list => console.log(list))\n\n// document.getElementsByTagName('img')[1].style.blur(blurOffensiveImages) = \"url('https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg')\";\n\n// console.log(document.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]'));\nconsole.log('fdhsjfkds')\ndocument.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]').style.filter = 'blur(40px)';\n\n\nconst blurOffensiveImages = (data) => {\n//   data => [{ src: \"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"\n// , alert: true }]\n\n\n}\n\n\n// var beeCan = document.getElementById(\"bee\");\n// var beetx  = beeCan.getContext(\"2d\");\n// beetx.drawImage( src: 'https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg', 0, 0);\n// var blur   = 0;\n\n// blur       = Math.abs(_sliderF.getPosition(8, -8)); //this returns multiple values\n//                                                     //based on a new slider position\n\n// stackBlurCanvasRGB(\"bee\", 0, 0, beeCan.width, beeCan.height, blur);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzPzViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2ZkaHNqZmtkcycpXG4vLyBjb25zdCBleHRyYWN0SW1hZ2VzRnJvbURvbSA9ICgpID0+IHtcblxuLy8gfVxuXG4vLyBjb25zdCBleHRyYWN0VGV4dEJsb2JzRnJvbURvbSA9ICgpID0+IHtcblxuLy8gfVxuXG4vLyAvLyBleHRyYWN0SW1hZ2VzRnJvbURvbSgpIC0+IFt7IHNyYzogJ2h0dHA6Ly90b3RvLmpwZycsIGFsdDogJ3RvdG8nIH0sIHsgLi4uIH0gXVxuLy8gLy8gZXh0cmFjdFRleHRCbG9ic0Zyb21Eb20oKSAtPiBbeyB0YWc6ICdwJywgY29udGVudDogJ2xvcmVtIGlzcHVtJywgaWQ6ICcyNUdGMycgfSAsIHsgLi4uIH0gXVxuXG4vLyBjb25zdCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2ltZycgKTtcbi8vIGNvbnN0IHNyYyA9IFtdO1xuLy8gZm9yKCBjb25zdCBpID0gaW1ncy5sZW5ndGg7IGktLTsgKSB7XG4vLyAgIHNyYy5wdXNoKCBpbWcuc3JjICk7XG4vLyB9XG5cbmZ1bmN0aW9uIGdldEltZ0FsbCAoZG9jKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbG9hZEltZ0FsbChBcnJheS5mcm9tKHNlYXJjaERPTShkb2MpKSlcbiAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgfSlcblxuZnVuY3Rpb24gc2VhcmNoRE9NIChkb2MpIHtcbiAgY29uc3Qgc3JjQ2hlY2tlciA9IC91cmxcXChcXHMqP1snXCJdP1xccyo/KFxcUys/KVxccyo/W1wiJ10/XFxzKj9cXCkvaVxuICByZXR1cm4gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuICAgIC5yZWR1Y2UoKGNvbGxlY3Rpb24sIG5vZGUpID0+IHtcbiAgICAgIC8vIGJnIHNyY1xuICAgICAgbGV0IHByb3AgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1pbWFnZScpXG4gICAgICAvLyBtYXRjaCBgdXJsKC4uLilgXG4gICAgICBsZXQgbWF0Y2ggPSBzcmNDaGVja2VyLmV4ZWMocHJvcClcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChtYXRjaFsxXSlcbiAgICAgIH1cblxuICAgICAgaWYgKC9eaW1nJC9pLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAvLyBzcmMgZnJvbSBpbWcgdGFnXG4gICAgICAgIGNvbGxlY3Rpb24uYWRkKG5vZGUuc3JjKVxuICAgICAgfSBlbHNlIGlmICgvXmZyYW1lJC9pLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAvLyBpZnJhbWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZWFyY2hET00obm9kZS5jb250ZW50RG9jdW1lbnQgfHwgbm9kZS5jb250ZW50V2luZG93LmRvY3VtZW50KVxuICAgICAgICAgICAgLmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgICAgaWYgKGltZykgeyBjb2xsZWN0aW9uLmFkZChpbWcpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvblxuICAgIH0sIG5ldyBTZXQoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWcgKHNyYywgdGltZW91dCA9IDUwMCkge1xuICAgIHZhciBpbWdQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICB3aWR0aDogaW1nLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGltZy5uYXR1cmFsSGVpZ2h0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpbWcub25lcnJvciA9IHJlamVjdFxuICAgICAgaW1nLnNyYyA9IHNyY1xuICAgIH0pXG4gICAgdmFyIHRpbWVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZWplY3QsIHRpbWVvdXQpXG4gICAgfSlcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtpbWdQcm9taXNlLCB0aW1lcl0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nQWxsIChpbWdMaXN0LCB0aW1lb3V0ID0gNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICBpbWdMaXN0XG4gICAgICAgICAgLm1hcChzcmMgPT4gbG9hZEltZyhzcmMsIHRpbWVvdXQpKVxuICAgICAgICAgIC5tYXAocCA9PiBwLmNhdGNoKGUgPT4gZmFsc2UpKVxuICAgICAgKS50aGVuKHJlc3VsdHMgPT4gcmVzb2x2ZShyZXN1bHRzLmZpbHRlcihyID0+IHIpKSlcbiAgICB9KVxuICB9XG59XG5cbmdldEltZ0FsbChkb2N1bWVudCkudGhlbihsaXN0ID0+IGNvbnNvbGUubG9nKGxpc3QpKVxuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMV0uc3R5bGUuYmx1cihibHVyT2ZmZW5zaXZlSW1hZ2VzKSA9IFwidXJsKCdodHRwczovL2ltZy5sZW1kZS5mci8yMDE5LzA4LzIzLzAvMC8yNTY2LzE5NTcvNjg4LzAvNjAvMC9hY2I3ZTE2Xy1RYWF3MEEwMDBQRXhDNm9ITUVELXpWSy5qcGcnKVwiO1xuXG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWdbc3JjPVwiaHR0cHM6Ly9pbWcubGVtZGUuZnIvMjAxOS8wOC8yMy8wLzAvMjU2Ni8xOTU3LzY4OC8wLzYwLzAvYWNiN2UxNl8tUWFhdzBBMDAwUEV4QzZvSE1FRC16VksuanBnXCJdJykpO1xuY29uc29sZS5sb2coJ2ZkaHNqZmtkcycpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWdbc3JjPVwiaHR0cHM6Ly9pbWcubGVtZGUuZnIvMjAxOS8wOC8yMy8wLzAvMjU2Ni8xOTU3LzY4OC8wLzYwLzAvYWNiN2UxNl8tUWFhdzBBMDAwUEV4QzZvSE1FRC16VksuanBnXCJdJykuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNDBweCknO1xuXG5cbmNvbnN0IGJsdXJPZmZlbnNpdmVJbWFnZXMgPSAoZGF0YSkgPT4ge1xuLy8gICBkYXRhID0+IFt7IHNyYzogXCJodHRwczovL2ltZy5sZW1kZS5mci8yMDE5LzA4LzIzLzAvMC8yNTY2LzE5NTcvNjg4LzAvNjAvMC9hY2I3ZTE2Xy1RYWF3MEEwMDBQRXhDNm9ITUVELXpWSy5qcGdcIlxuLy8gLCBhbGVydDogdHJ1ZSB9XVxuXG5cbn1cblxuXG4vLyB2YXIgYmVlQ2FuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZWVcIik7XG4vLyB2YXIgYmVldHggID0gYmVlQ2FuLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIGJlZXR4LmRyYXdJbWFnZSggc3JjOiAnaHR0cHM6Ly9pbWcubGVtZGUuZnIvMjAxOS8wOC8yMy8wLzAvMjU2Ni8xOTU3LzY4OC8wLzYwLzAvYWNiN2UxNl8tUWFhdzBBMDAwUEV4QzZvSE1FRC16VksuanBnJywgMCwgMCk7XG4vLyB2YXIgYmx1ciAgID0gMDtcblxuLy8gYmx1ciAgICAgICA9IE1hdGguYWJzKF9zbGlkZXJGLmdldFBvc2l0aW9uKDgsIC04KSk7IC8vdGhpcyByZXR1cm5zIG11bHRpcGxlIHZhbHVlc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFzZWQgb24gYSBuZXcgc2xpZGVyIHBvc2l0aW9uXG5cbi8vIHN0YWNrQmx1ckNhbnZhc1JHQihcImJlZVwiLCAwLCAwLCBiZWVDYW4ud2lkdGgsIGJlZUNhbi5oZWlnaHQsIGJsdXIpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/test.js\n");

/***/ })

})