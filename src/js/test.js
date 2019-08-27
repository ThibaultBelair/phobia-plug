// const extractImagesFromDom = () => {

// }

// const extractTextBlobsFromDom = () => {

// }

// // extractImagesFromDom() -> [{ src: 'http://toto.jpg', alt: 'toto' }, { ... } ]
// // extractTextBlobsFromDom() -> [{ tag: 'p', content: 'lorem ispum', id: '25GF3' } , { ... } ]

// const imgs = document.querySelectorAll( 'img' );
// const src = [];
// for( const i = imgs.length; i--; ) {
//   src.push( img.src );
// }


function getImgAll (doc) {
  return new Promise((resolve, reject) => {
    loadImgAll(Array.from(searchDOM(doc)))
      .then(resolve, reject)
  })

function searchDOM (doc) {
  const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i
  return Array.from(doc.querySelectorAll('*'))
    .reduce((collection, node) => {
      // bg src
      let prop = window.getComputedStyle(node, null)
        .getPropertyValue('background-image')
      // match `url(...)`
      let match = srcChecker.exec(prop)
      if (match) {
        collection.add(match[1])
      }

      if (/^img$/i.test(node.tagName)) {
        // src from img tag
        collection.add(node.src)
      } else if (/^frame$/i.test(node.tagName)) {
        // iframe
        try {
          searchDOM(node.contentDocument || node.contentWindow.document)
            .forEach(img => {
              if (img) { collection.add(img) }
            })
        } catch (e) {}
      }
      return collection
    }, new Set())
  }

  function loadImg (src, timeout = 500) {
    var imgPromise = new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => {
        resolve({
          src: src,
          width: img.naturalWidth,
          height: img.naturalHeight
        })
      }
      img.onerror = reject
      img.src = src
    })
    var timer = new Promise((resolve, reject) => {
      setTimeout(reject, timeout)
    })
    return Promise.race([imgPromise, timer])
  }

  function loadImgAll (imgList, timeout = 500) {
    return new Promise((resolve, reject) => {
      Promise.all(
        imgList
          .map(src => loadImg(src, timeout))
          .map(p => p.catch(e => false))
      ).then(results => resolve(results.filter(r => r)))
    })
  }
}

getImgAll(document).then(list => console.log(list))




const blurOffensiveImages = (data) => {
  // data => [{ src: 'fdskfd', alert: true }, {...}]


}



