
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






 // document.querySelector('img[src="https://img.lemde.fr/2019/08/23/0/0/2566/1957/688/0/60/0/acb7e16_-Qaaw0A000PExC6oHMED-zVK.jpg"]').style.filter = 'blur(40px)';

const blurOffensiveImages = (responses) => {
  responses.forEach(function (data) {
    if (data.alert) {
      console.log(data);
      // console.log(`img[srcset="${data.src}"]`);
      // console.log(document.querySelector(`img[srcset="${data.src}"]`));
      document.querySelector(`img[srcset="${data.src}"]`).style.filter = 'blur(40px)';
    }
  });

  // console.log(responses);
};


const responses = [
  { src: "https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w", alert: true },
  { src: "https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg", alert: false },
  { src: "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg", alert: true },
  { src: "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg", alert: false }
]

blurOffensiveImages(responses);




// Images
// Analyse img du DOM -> [ { }, { }]
// Envoie les img au serveur
// Le serveur repond -> [{ ... alert: true }, { ... alert: false }]
// On envoie la response du serveur a la méthode blurOffensiveImages
// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true



