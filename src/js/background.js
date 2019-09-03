chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message == 'fetch') {
    fetch(request.input, request.init).then(function(response) {
      return response.text().then(function(text) {
        sendResponse([{
          body: text,
          status: response.status,
          statusText: response.statusText,
        }, null]);
      });
    }, function(error) {
      sendResponse([null, error]);
    });
    return true;
  }

  if (request.message == 'currentStatus') {
    sendResponse(localStorage.getItem('phobiaRunning') === 'true');
  }
});
