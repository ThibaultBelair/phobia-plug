
// This method should be used exactly like classical fetch
function fetchResource(input, init) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ input: input, init: init, message: 'fetch' }, messageResponse => {
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
    const element = document.querySelector(`[data-phobia-id="${data.id}"]`)
    if (data.alert) {
      element.style.filter = 'blur(40px)';
      element.setAttribute('data-alert', true);
    } else {
      element.style.filter = '';
      element.setAttribute('data-alert', false);
    }
  });
};

export { fetchResource, getImgAll, blurOffensiveImages }
