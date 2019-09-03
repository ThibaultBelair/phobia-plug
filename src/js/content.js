import { fetchResource, getImgAll, blurOffensiveImages, GetUrlKeywordsToRails } from './utils'

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
  fetchResource('http://localhost:3000/api/v1/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: images,
      keywords: ['spider']
    })
  }).then(response => response.json())
    .then((data) => {
      document.querySelectorAll('img').forEach((img) => { img.style.filter = '' });
      blurOffensiveImages(data)
     })
})
