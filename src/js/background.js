import '../img/logo_phobia.png'



var xhr = new XMLHttpRequest();
console.log("je suis ici")
xhr.open("POST", "https://localhost:3001/fake.json", true); //regarder pour les paramètres
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
  }
}
xhr.send();

console.log("Je suis dans background.js");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.contentScriptQuery == "getdata") {
        var url = request.url + encodeURIComponent(request.url);;
        fetch(url)
            .then(response => response.text())
            .then(text => parsegetdata(text))
            .then(getdata => sendResponse(getdata))
            .catch(error => 'cant get any data')
        return true; //will response asynchronously
    }
    if (request.contentScriptQuery == "postData") {


        const fakeJson = [
  { "src": "https://i.f1g.fr/media/figaro/375x210_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 375w, https://i.f1g.fr/media/figaro/680x382_crop/2016/07/08/XVM99245fcc-445d-11e6-b592-d337671c6a4c.jpg 680w", "alert": true },
  { "src": "https://i.f1g.fr/media/figaro/300x200/2016/07/08/XVM9dff23ec-4381-11e6-aedb-9ff89248825a-300x200.jpg", "alert": false },
  { "src": "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/23/XVMfcc0d604-b1e3-11e9-a562-34c2d8c63b1e.jpg", "alert": true },
  { "src": "https://i.f1g.fr/media/eidos/52x52_crop/2019/08/22/XVM8ff88140-c28f-11e9-9a20-eddc30b21241.jpg", "alert": false }

]

        sendResponse(fakeJson)

    }
});
