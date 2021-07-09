const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInput);
function onInput() {
    if (!inputEl.hasAttribute('class')) inputEl.classList.add
    inputEl.className = 'invalid';

    if (inputEl.value.length === +inputEl.dataset.length) {
        inputEl.classList.replace('invalid', 'valid');
    }
}