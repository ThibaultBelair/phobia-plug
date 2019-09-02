// This file is executed in the context of the webpage
// So you have to analyse DOM here
// Then communicate with your server using the "fetchResource" method
// instead of classical fetch to handle security preventions


// This method should be used exactly like classical fetch
function fetchResource(input, init) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ input, init }, messageResponse => {
      const [response, error] = messageResponse;
      if (response === null) {
        reject(error);
      } else {
        // Use undefined on a 204 - No Content
        const body = response.body ? new Blob([response.body]) : undefined;
        resolve(new Response(body, {
          status: response.status,
          statusText: response.statusText,
        }));
      }
    });
  });
}




// Images
// 1. Analyse img du DOM -> [ { }, { } ]
// 2. Envoie les img au serveur -> fetchResource
// 3. Le serveur repond -> [{ ... alert: true }, { ... alert: false }]
// 4. On envoie la response du serveur a la méthode blurOffensiveImages
// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true


// 1.
getImgAll(document)
  .then((images) => {
    fetchResource('http://localhost:3000/api/v1/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ toto: images })
    }).then(response => response.json())
      .then((data) => {
        blurOffensiveImages(data)
      })
  })



function getImgAll(doc) {
  return new Promise((resolve, reject) => {
    loadImgAll(Array.from(searchDOM(doc)))
      .then(resolve, reject)
  })

function searchDOM (doc) {
  const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i
  return Array.from(doc.querySelectorAll('*'))
    .reduce((collection, node) => {
      node.setAttribute('data-phobia-id', Math.random())
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
        resolve(src)
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

// getImgAll(document).then(list => {
//     const dataToSend = {
//     urls: list,
//     keywords: ['spider', 'snake']
//     };
//     console.log(dataToSend);
//     // console.log("je dois envoyer cette liste a rails")

//     chrome.runtime.sendMessage(
//     {
//         contentScriptQuery: "postData"
//         , data: JSON.stringify(dataToSend)
//         , url: ' http://localhost:3001/fake.json'   //update this url to test ./ngrok http 3001
//     }, function (response) {
//       console.log(response)
//     });


//   }
// );





const GetUrlKeywordsToRails = (requests) => {
  requests.forEach(function (data) {
    if (data.keywords === 'spider') {
      // console.log(data);
      // console.log(`img[srcset="${data.src}"]`);
      // console.log(document.querySelector(`img[srcset="${data.src}"]`));
      document.querySelector(`img[srcset="${data.src}"]`);
    }
  });

  // console.log(request);
};


const requests = [
  { src: "https://costarica-decouverte.com/wp-content/uploads/2018/10/tarentule-costa-rica-decouverte-262x172.jpg 262w, https://costarica-decouverte.com/wp-content/uploads/2018/10/tarentule-costa-rica-decouverte-700x460.jpg 700w", keywords: 'spider' },
  { src: "https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg", keywords: false },
  { src: "https://cdn-media.rtl.fr/cache/5moTJLeVYGvCY0TKfaaHaw/880v587-0/online/image/2019/0828/7798237189_un-cobra-illustration.jpg", keywords: 'spider' },
  { src: "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg", keywords: false }
]


// GetUrlKeywordsToRails(requests);






const blurOffensiveImages = (responses) => {
  responses.forEach(function (data) {
    if (data.alert) {
      console.log(data);
      // console.log(`img[srcset="${data.src}"]`);
      // console.log(document.querySelector(`img[srcset="${data.src}"]`));
      // const image1 = document.querySelector(`img[srcset="${data.src}"]`)
      // const image2 = document.querySelector(`img[src="${data.src}"]`)
      document.querySelector(`[data-phobia-id="${data.phobia_id}"]`).style.filter = 'blur(40px);'

      if (image1) {
        image1.style.filter = 'blur(40px)';
      }

      if (image2) {
        image2.style.filter = 'blur(40px)';
      }
    }
  });

  // console.log(responses);
};

// const responses = [
//   { src: "https://costarica-decouverte.com/wp-content/uploads/2018/10/tarentule-costa-rica-decouverte-262x172.jpg 262w, https://costarica-decouverte.com/wp-content/uploads/2018/10/tarentule-costa-rica-decouverte-700x460.jpg 700w", alert: true },
//   { src: "https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg", alert: false },
//   { src: "https://cdn-media.rtl.fr/cache/5moTJLeVYGvCY0TKfaaHaw/880v587-0/online/image/2019/0828/7798237189_un-cobra-illustration.jpg", alert: true },
//   { src: "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg", alert: false }
// ]


// blurOffensiveImages(responses);



// Images
// Analyse img du DOM -> [ { }, { }]
// Envoie les img au serveur
// Le serveur repond -> [{ ... alert: true }, { ... alert: false }]
// On envoie la response du serveur a la méthode blurOffensiveImages
// Cette méthode itere sur la reponse du serveur et floute l'image qui correspond si la clef alert vaut true




// fetchResource('http://localhost:3000/api/v1/words', { method: 'POST' })
//   .then(response => response.json())
//   .then(data => { console.log(data) })
