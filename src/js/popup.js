import "../css/popup.css";

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {

      chrome.tabs.getSelected(null, function(tab) {
        alert("Scroll without fear");
        // Ici mettre le lien vers phobia.live
      });
    }, false);
  }, false);
