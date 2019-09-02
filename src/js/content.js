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
const images = getImgAll(document)
console.log(images);
fetchResource('http://localhost:3000/api/v1/images', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    images: images,
    keywords: ['spider']
  })
}).then(response => response.json())
  .then((data) => {
    blurOffensiveImages(data)
   })



function getImgAll(doc) {
  const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i
  return Array.from(doc.querySelectorAll('*'))
    .reduce((collection, node) => {
      // bg src
      let prop = window.getComputedStyle(node, null)
        .getPropertyValue('background-image')
      // match `url(...)`
      let match = srcChecker.exec(prop)
      if (match) {
        const id = Math.random().toString(36).substr(2, 9);
        node.setAttribute('data-phobia-id', id)
        collection.push({
          url: match[1],
          id: id
        })
      }

      if (/^img$/i.test(node.tagName)) {
        // src from img tag
        const id = Math.random().toString(36).substr(2, 9);
        node.setAttribute('data-phobia-id', id)
        collection.push({
          url: node.src,
          id: id
        })

      }

      return collection
    }, [])
}

const blurOffensiveImages = (responses) => {
  responses.forEach(function (data) {
    if (data.alert) {
      document.querySelector(`img[data-phobia-id="${data.id}"]`).style.filter = 'blur(40px)';
    }
  });
};

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
