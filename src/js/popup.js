import "../css/popup.css";

document.addEventListener('DOMContentLoaded', function() {
  initSwitch()
  initCheckboxes()
}, false);

const initCheckboxes = () => {
  const checkInputs = document.querySelectorAll('input[name=phobia]');
  const phobias = localStorage.getItem('phobias') ? localStorage.getItem('phobias').split(',') : []

  checkInputs.forEach((checkInput) => {

    console.log('check input', checkInput);
    console.log('phobias', phobias);

    if (phobias.indexOf(checkInput.id) != -1) {
      checkInput.checked = true
    }

    checkInput.addEventListener('change', function(e) {
      if (checkInput.checked) {
        phobias.push(checkInput.id)
      } else {
        phobias.splice(phobias.indexOf(checkInput.id), 1);
      }

      localStorage.setItem('phobias', phobias)
    });
  })
}

const initSwitch = () => {
  const switchInput = document.querySelector('#myonoffswitch')
  switchInput.checked = (localStorage.getItem('phobiaRunning') === 'true')

  switchInput.addEventListener('change', function() {
    localStorage.setItem('phobiaRunning', switchInput.checked)
  });
}
