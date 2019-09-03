import { fetchResource, getImgAll, blurOffensiveImages } from './utils'

// This file is executed in the context of the webpage
// So you have to analyse DOM here
// Then communicate with your server using the "fetchResource" method
// instead of classical fetch to handle security preventions

const html = document.querySelector('html')
html.style.filter = 'opacity(0)';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach((img) => { img.style.filter = 'blur(40px)' });
  html.style.transition = 'filter ease 0.3s';
  html.style.filter = 'opacity(1)';

  const images = getImgAll(document)
  analyseImages(images);

  const targetNode = document.querySelector('body');
  const config = { attributes: false, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    mutationsList[0].addedNodes.forEach((node) => {
      try {
        const images = node.querySelectorAll('img')
        const imagesArray = processImages(images);
        analyseImages(imagesArray);
      } catch {
        console.log('error');
      }
    })
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
})

const analyseImages = (images) => {
  fetchResource('http://localhost:3000/api/v1/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: images,
      keywords: ['snake', 'python', 'boa']
    })
  }).then(response => response.json())
    .then((data) => {
      blurOffensiveImages(data)
    })
}

const processImages = (images) => {
  const array = [];

  images.forEach((image) => {
    image.style.filter = 'blur(40px)'
    const id = Math.random().toString(36).substr(2, 9);
    image.setAttribute('data-phobia-id', id);
    array.push({ url: image.getAttribute('src'), id: id });
  });

  return array;
}
