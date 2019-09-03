import "../css/popup.css";

  document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.querySelector('#myonoffswitch')
    switchInput.checked = (localStorage.getItem('phobiaRunning') === 'true')

    switchInput.addEventListener('change', function() {
      localStorage.setItem('phobiaRunning', switchInput.checked)
    });

      var checkPageButton = document.getElementById('clickIt');
      checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
          alert("Scroll without fear");
          // Ici mettre le lien vers phobia.live
        });
      }, false);
    }, false);


