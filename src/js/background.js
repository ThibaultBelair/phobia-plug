import '../img/logo_phobia.png'

console.log("dddd")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.contentScriptQuery == "getdata") {
        var url = request.url;
        fetch(url)
            .then(response => response.text())
            .then(response => sendResponse(response))
            .catch()
        return true;
    }
    if (request.contentScriptQuery == "postData") {


        const fakeJson = [
  { "src": "https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w", "alert": true },
  { "src": "https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg", "alert": false },
  { "src": "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg", "alert": true },
  { "src": "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg", "alert": false }

]

        sendResponse(fakeJson)


        // fetch(request.url, {
        //     // mode: 'no-cors',
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then((response) => {
        //       console.log("je suis la")
        //       console.log(response)
        //       console.log(response.body)
        //       return response.json()
        //     })
        //     .then(response => sendResponse(response))
        //     .catch(error => console.log('Error:', error));
        // return true;
    }
});

