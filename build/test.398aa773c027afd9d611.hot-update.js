webpackHotUpdate("test",{

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const extractImagesFromDom = () => {\n\n// }\n\n// const extractTextBlobsFromDom = () => {\n\n// }\n\n// // extractImagesFromDom() -> [{ src: 'http://toto.jpg', alt: 'toto' }, { ... } ]\n// // extractTextBlobsFromDom() -> [{ tag: 'p', content: 'lorem ispum', id: '25GF3' } , { ... } ]\n\n// const imgs = document.querySelectorAll( 'img' );\n// const src = [];\n// for( const i = imgs.length; i--; ) {\n//   src.push( img.src );\n// }\n\n\nfunction getImgAll (doc) {\n  return new Promise((resolve, reject) => {\n    loadImgAll(Array.from(searchDOM(doc)))\n      .then(resolve, reject)\n  })\n\nfunction searchDOM (doc) {\n  const srcChecker = /url\\(\\s*?['\"]?\\s*?(\\S+?)\\s*?[\"']?\\s*?\\)/i\n  return Array.from(doc.querySelectorAll('*'))\n    .reduce((collection, node) => {\n      // bg src\n      let prop = window.getComputedStyle(node, null)\n        .getPropertyValue('background-image')\n      // match `url(...)`\n      let match = srcChecker.exec(prop)\n      if (match) {\n        collection.add(match[1])\n      }\n\n      if (/^img$/i.test(node.tagName)) {\n        // src from img tag\n        collection.add(node.src)\n      } else if (/^frame$/i.test(node.tagName)) {\n        // iframe\n        try {\n          searchDOM(node.contentDocument || node.contentWindow.document)\n            .forEach(img => {\n              if (img) { collection.add(img) }\n            })\n        } catch (e) {}\n      }\n      return collection\n    }, new Set())\n  }\n\n  function loadImg (src, timeout = 500) {\n    var imgPromise = new Promise((resolve, reject) => {\n      let img = new Image()\n      img.onload = () => {\n        resolve({\n          src: src,\n          width: img.naturalWidth,\n          height: img.naturalHeight\n        })\n      }\n      img.onerror = reject\n      img.src = src\n    })\n    var timer = new Promise((resolve, reject) => {\n      setTimeout(reject, timeout)\n    })\n    return Promise.race([imgPromise, timer])\n  }\n\n  function loadImgAll (imgList, timeout = 500) {\n    return new Promise((resolve, reject) => {\n      Promise.all(\n        imgList\n          .map(src => loadImg(src, timeout))\n          .map(p => p.catch(e => false))\n      ).then(results => resolve(results.filter(r => r)))\n    })\n  }\n}\n\ngetImgAll(document).then(list => console.log(list))\n\n\n\n\nconst blurOffensiveImages = (data) => {\n  // data => [{ src: 'fdskfd', alert: true }, {...}]\n\n\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzPzViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgZXh0cmFjdEltYWdlc0Zyb21Eb20gPSAoKSA9PiB7XG5cbi8vIH1cblxuLy8gY29uc3QgZXh0cmFjdFRleHRCbG9ic0Zyb21Eb20gPSAoKSA9PiB7XG5cbi8vIH1cblxuLy8gLy8gZXh0cmFjdEltYWdlc0Zyb21Eb20oKSAtPiBbeyBzcmM6ICdodHRwOi8vdG90by5qcGcnLCBhbHQ6ICd0b3RvJyB9LCB7IC4uLiB9IF1cbi8vIC8vIGV4dHJhY3RUZXh0QmxvYnNGcm9tRG9tKCkgLT4gW3sgdGFnOiAncCcsIGNvbnRlbnQ6ICdsb3JlbSBpc3B1bScsIGlkOiAnMjVHRjMnIH0gLCB7IC4uLiB9IF1cblxuLy8gY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpbWcnICk7XG4vLyBjb25zdCBzcmMgPSBbXTtcbi8vIGZvciggY29uc3QgaSA9IGltZ3MubGVuZ3RoOyBpLS07ICkge1xuLy8gICBzcmMucHVzaCggaW1nLnNyYyApO1xuLy8gfVxuXG5cbmZ1bmN0aW9uIGdldEltZ0FsbCAoZG9jKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbG9hZEltZ0FsbChBcnJheS5mcm9tKHNlYXJjaERPTShkb2MpKSlcbiAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgfSlcblxuZnVuY3Rpb24gc2VhcmNoRE9NIChkb2MpIHtcbiAgY29uc3Qgc3JjQ2hlY2tlciA9IC91cmxcXChcXHMqP1snXCJdP1xccyo/KFxcUys/KVxccyo/W1wiJ10/XFxzKj9cXCkvaVxuICByZXR1cm4gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuICAgIC5yZWR1Y2UoKGNvbGxlY3Rpb24sIG5vZGUpID0+IHtcbiAgICAgIC8vIGJnIHNyY1xuICAgICAgbGV0IHByb3AgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1pbWFnZScpXG4gICAgICAvLyBtYXRjaCBgdXJsKC4uLilgXG4gICAgICBsZXQgbWF0Y2ggPSBzcmNDaGVja2VyLmV4ZWMocHJvcClcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChtYXRjaFsxXSlcbiAgICAgIH1cblxuICAgICAgaWYgKC9eaW1nJC9pLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAvLyBzcmMgZnJvbSBpbWcgdGFnXG4gICAgICAgIGNvbGxlY3Rpb24uYWRkKG5vZGUuc3JjKVxuICAgICAgfSBlbHNlIGlmICgvXmZyYW1lJC9pLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAvLyBpZnJhbWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZWFyY2hET00obm9kZS5jb250ZW50RG9jdW1lbnQgfHwgbm9kZS5jb250ZW50V2luZG93LmRvY3VtZW50KVxuICAgICAgICAgICAgLmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgICAgaWYgKGltZykgeyBjb2xsZWN0aW9uLmFkZChpbWcpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGVjdGlvblxuICAgIH0sIG5ldyBTZXQoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWcgKHNyYywgdGltZW91dCA9IDUwMCkge1xuICAgIHZhciBpbWdQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICB3aWR0aDogaW1nLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGltZy5uYXR1cmFsSGVpZ2h0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpbWcub25lcnJvciA9IHJlamVjdFxuICAgICAgaW1nLnNyYyA9IHNyY1xuICAgIH0pXG4gICAgdmFyIHRpbWVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZWplY3QsIHRpbWVvdXQpXG4gICAgfSlcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtpbWdQcm9taXNlLCB0aW1lcl0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkSW1nQWxsIChpbWdMaXN0LCB0aW1lb3V0ID0gNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICBpbWdMaXN0XG4gICAgICAgICAgLm1hcChzcmMgPT4gbG9hZEltZyhzcmMsIHRpbWVvdXQpKVxuICAgICAgICAgIC5tYXAocCA9PiBwLmNhdGNoKGUgPT4gZmFsc2UpKVxuICAgICAgKS50aGVuKHJlc3VsdHMgPT4gcmVzb2x2ZShyZXN1bHRzLmZpbHRlcihyID0+IHIpKSlcbiAgICB9KVxuICB9XG59XG5cbmdldEltZ0FsbChkb2N1bWVudCkudGhlbihsaXN0ID0+IGNvbnNvbGUubG9nKGxpc3QpKVxuXG5cblxuXG5jb25zdCBibHVyT2ZmZW5zaXZlSW1hZ2VzID0gKGRhdGEpID0+IHtcbiAgLy8gZGF0YSA9PiBbeyBzcmM6ICdmZHNrZmQnLCBhbGVydDogdHJ1ZSB9LCB7Li4ufV1cblxuXG59XG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/test.js\n");

/***/ })

})