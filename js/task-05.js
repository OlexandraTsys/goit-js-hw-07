const input = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');
console.log(input);
console.log(nameSpan);

input.addEventListener('input', onInputChange);



function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        nameSpan.innerHTML = 'незнакомец';
    } else {
        nameSpan.textContent = event.currentTarget.value;
    }
    
 }