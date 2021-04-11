const getIdInput = document.querySelector('#validation-input');

getIdInput.addEventListener('input', onBorderColorChange);

function onBorderColorChange(event) {
   
    if (Number(getIdInput.dataset.length) === event.currentTarget.value.length) {
        getIdInput.classList.remove('invalid');
        getIdInput.classList.add('valid');
       
    } else {
        getIdInput.classList.add('invalid');
        getIdInput.classList.remove('valid');
    }
    
}