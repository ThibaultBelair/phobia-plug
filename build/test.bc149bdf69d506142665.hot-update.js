webpackHotUpdate("test",{

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const extractImagesFromDom = () => {\n\n// }\n\n// const extractTextBlobsFromDom = () => {\n\n// }\n\n// // extractImagesFromDom() -> [{ src: 'http://toto.jpg', alt: 'toto' }, { ... } ]\n// // extractTextBlobsFromDom() -> [{ tag: 'p', content: 'lorem ispum', id: '25GF3' } , { ... } ]\n\n// const imgs = document.querySelectorAll( 'img' );\n// const src = [];\n// for( const i = imgs.length; i--; ) {\n//   src.push( img.src );\n// }\n\nfunction getImgAll (doc) {\n  return new Promise((resolve, reject) => {\n    loadImgAll(Array.from(searchDOM(doc)))\n      .then(resolve, reject)\n  })\n\nfunction searchDOM (doc) {\n  const srcChecker = /url\\(\\s*?['\"]?\\s*?(\\S+?)\\s*?[\"']?\\s*?\\)/i\n  return Array.from(doc.querySelectorAll('*'))\n    .reduce((collection, node) => {\n      // bg src\n      let prop = window.getComputedStyle(node, null)\n        .getPropertyValue('background-image')\n      // match `url(...)`\n      let match = srcChecker.exec(prop)\n      if (match) {\n        collection.add(match[1])\n      }\n\n      if (/^img$/i.test(node.tagName)) {\n        // src from img tag\n        collection.add(node.src)\n      } else if (/^frame$/i.test(node.tagName)) {\n        // iframe\n        try {\n          searchDOM(node.contentDocument || node.contentWindow.document)\n            .forEach(img => {\n              if (img) { collection.add(img) }\n            })\n        } catch (e) {}\n      }\n      return collection\n    }, new Set())\n  }\n\n  function loadImg (src, timeout = 500) {\n    var imgPromise = new Promise((resolve, reject) => {\n      let img = new Image()\n      img.onload = () => {\n        resolve({\n          src: src,\n          width: img.naturalWidth,\n          height: img.naturalHeight\n        })\n      }\n      img.onerror = reject\n      img.src = src\n    })\n    var timer = new Promise((resolve, reject) => {\n      setTimeout(reject, timeout)\n    })\n    return Promise.race([imgPromise, timer])\n  }\n\n  function loadImgAll (imgList, timeout = 500) {\n    return new Promise((resolve, reject) => {\n      Promise.all(\n        imgList\n          .map(src => loadImg(src, timeout))\n          .map(p => p.catch(e => false))\n      ).then(results => resolve(results.filter(r => r)))\n    })\n  }\n}\n\ngetImgAll(document).then(list => console.log(list))\n\n// document.getElementsByTagName('img')[1].style.blur(blurOffensiveImages) = \"url('https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg')\";\n\n// console.log(document.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]'));\n\n// document.querySelector('img[src=\"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"]').style.filter = 'blur(40px)';\n\n\nconst blurOffensiveImages = (data) => {\n//   data => [{ src: \"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\"\n// , alert: true }]\n\n\n}\n\n\nresponse = [\n  { src: \"https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg\", alert: true }\n]\n\nblurOffensiveImages()\n\n\n\n\n// Images\n// Analyse img du DOM -> [ { }, { }]\n// Envoie les img au serveur\n// Le serveur repond -> [{ ... alert: true }, { ... alert: false }]\n// On envoie la response du serveur a la méthode blurOffensiveImages\n// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzPzViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgZXh0cmFjdEltYWdlc0Zyb21Eb20gPSAoKSA9PiB7XG5cbi8vIH1cblxuLy8gY29uc3QgZXh0cmFjdFRleHRCbG9ic0Zyb21Eb20gPSAoKSA9PiB7XG5cbi8vIH1cblxuLy8gLy8gZXh0cmFjdEltYWdlc0Zyb21Eb20oKSAtPiBbeyBzcmM6ICdodHRwOi8vdG90by5qcGcnLCBhbHQ6ICd0b3RvJyB9LCB7IC4uLiB9IF1cbi8vIC8vIGV4dHJhY3RUZXh0QmxvYnNGcm9tRG9tKCkgLT4gW3sgdGFnOiAncCcsIGNvbnRlbnQ6ICdsb3JlbSBpc3B1bScsIGlkOiAnMjVHRjMnIH0gLCB7IC4uLiB9IF1cblxuLy8gY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpbWcnICk7XG4vLyBjb25zdCBzcmMgPSBbXTtcbi8vIGZvciggY29uc3QgaSA9IGltZ3MubGVuZ3RoOyBpLS07ICkge1xuLy8gICBzcmMucHVzaCggaW1nLnNyYyApO1xuLy8gfVxuXG5mdW5jdGlvbiBnZXRJbWdBbGwgKGRvYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxvYWRJbWdBbGwoQXJyYXkuZnJvbShzZWFyY2hET00oZG9jKSkpXG4gICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpXG4gIH0pXG5cbmZ1bmN0aW9uIHNlYXJjaERPTSAoZG9jKSB7XG4gIGNvbnN0IHNyY0NoZWNrZXIgPSAvdXJsXFwoXFxzKj9bJ1wiXT9cXHMqPyhcXFMrPylcXHMqP1tcIiddP1xccyo/XFwpL2lcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcbiAgICAucmVkdWNlKChjb2xsZWN0aW9uLCBub2RlKSA9PiB7XG4gICAgICAvLyBiZyBzcmNcbiAgICAgIGxldCBwcm9wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbClcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKVxuICAgICAgLy8gbWF0Y2ggYHVybCguLi4pYFxuICAgICAgbGV0IG1hdGNoID0gc3JjQ2hlY2tlci5leGVjKHByb3ApXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdGlvbi5hZGQobWF0Y2hbMV0pXG4gICAgICB9XG5cbiAgICAgIGlmICgvXmltZyQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gc3JjIGZyb20gaW1nIHRhZ1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChub2RlLnNyYylcbiAgICAgIH0gZWxzZSBpZiAoL15mcmFtZSQvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgLy8gaWZyYW1lXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2VhcmNoRE9NKG5vZGUuY29udGVudERvY3VtZW50IHx8IG5vZGUuY29udGVudFdpbmRvdy5kb2N1bWVudClcbiAgICAgICAgICAgIC5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbWcpIHsgY29sbGVjdGlvbi5hZGQoaW1nKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICB9LCBuZXcgU2V0KCkpXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nIChzcmMsIHRpbWVvdXQgPSA1MDApIHtcbiAgICB2YXIgaW1nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgd2lkdGg6IGltZy5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBpbWcubmF0dXJhbEhlaWdodFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3RcbiAgICAgIGltZy5zcmMgPSBzcmNcbiAgICB9KVxuICAgIHZhciB0aW1lciA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQocmVqZWN0LCB0aW1lb3V0KVxuICAgIH0pXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbaW1nUHJvbWlzZSwgdGltZXJdKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEltZ0FsbCAoaW1nTGlzdCwgdGltZW91dCA9IDUwMCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgaW1nTGlzdFxuICAgICAgICAgIC5tYXAoc3JjID0+IGxvYWRJbWcoc3JjLCB0aW1lb3V0KSlcbiAgICAgICAgICAubWFwKHAgPT4gcC5jYXRjaChlID0+IGZhbHNlKSlcbiAgICAgICkudGhlbihyZXN1bHRzID0+IHJlc29sdmUocmVzdWx0cy5maWx0ZXIociA9PiByKSkpXG4gICAgfSlcbiAgfVxufVxuXG5nZXRJbWdBbGwoZG9jdW1lbnQpLnRoZW4obGlzdCA9PiBjb25zb2xlLmxvZyhsaXN0KSlcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzFdLnN0eWxlLmJsdXIoYmx1ck9mZmVuc2l2ZUltYWdlcykgPSBcInVybCgnaHR0cHM6Ly9pbWcubGVtZGUuZnIvMjAxOS8wOC8yMy8wLzAvMjU2Ni8xOTU3LzY4OC8wLzYwLzAvYWNiN2UxNl8tUWFhdzBBMDAwUEV4QzZvSE1FRC16VksuanBnJylcIjtcblxuLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW3NyYz1cImh0dHBzOi8vaW1nLmxlbWRlLmZyLzIwMTkvMDgvMjMvMC8wLzI1NjYvMTk1Ny82ODgvMC82MC8wL2FjYjdlMTZfLVFhYXcwQTAwMFBFeEM2b0hNRUQtelZLLmpwZ1wiXScpKTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW3NyYz1cImh0dHBzOi8vaW1nLmxlbWRlLmZyLzIwMTkvMDgvMjMvMC8wLzI1NjYvMTk1Ny82ODgvMC82MC8wL2FjYjdlMTZfLVFhYXcwQTAwMFBFeEM2b0hNRUQtelZLLmpwZ1wiXScpLnN0eWxlLmZpbHRlciA9ICdibHVyKDQwcHgpJztcblxuXG5jb25zdCBibHVyT2ZmZW5zaXZlSW1hZ2VzID0gKGRhdGEpID0+IHtcbi8vICAgZGF0YSA9PiBbeyBzcmM6IFwiaHR0cHM6Ly9pbWcubGVtZGUuZnIvMjAxOS8wOC8yMy8wLzAvMjU2Ni8xOTU3LzY4OC8wLzYwLzAvYWNiN2UxNl8tUWFhdzBBMDAwUEV4QzZvSE1FRC16VksuanBnXCJcbi8vICwgYWxlcnQ6IHRydWUgfV1cblxuXG59XG5cblxucmVzcG9uc2UgPSBbXG4gIHsgc3JjOiBcImh0dHBzOi8vaW1nLmxlbWRlLmZyLzIwMTkvMDgvMjMvMC8wLzI1NjYvMTk1Ny82ODgvMC82MC8wL2FjYjdlMTZfLVFhYXcwQTAwMFBFeEM2b0hNRUQtelZLLmpwZ1wiLCBhbGVydDogdHJ1ZSB9XG5dXG5cbmJsdXJPZmZlbnNpdmVJbWFnZXMoKVxuXG5cblxuXG4vLyBJbWFnZXNcbi8vIEFuYWx5c2UgaW1nIGR1IERPTSAtPiBbIHsgfSwgeyB9XVxuLy8gRW52b2llIGxlcyBpbWcgYXUgc2VydmV1clxuLy8gTGUgc2VydmV1ciByZXBvbmQgLT4gW3sgLi4uIGFsZXJ0OiB0cnVlIH0sIHsgLi4uIGFsZXJ0OiBmYWxzZSB9XVxuLy8gT24gZW52b2llIGxhIHJlc3BvbnNlIGR1IHNlcnZldXIgYSBsYSBtw6l0aG9kZSBibHVyT2ZmZW5zaXZlSW1hZ2VzXG4vLyBDZXR0ZSBtw6l0aG9kZSBpdGVyZSBzdXIgbGEgcmVwb25zZSBkdSBzZXJ2ZXVyIGV0IGZsb3V0ZSBsJ2ltYWdlIHF1aSBjb3JyZXNwb25kIHNpIGxhIGNsZWYgYWxlcnQgdmF1dCB0cnVlXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/test.js\n");

/***/ })

})