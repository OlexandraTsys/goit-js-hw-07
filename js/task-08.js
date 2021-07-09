const inputEl = document.querySelector('input');
const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const divContainerEl = document.querySelector('#boxes');

btnRenderEl.addEventListener('click', onRenderClick);

function onRenderClick() {

    function createBoxes(amount) {
        divContainerEl.innerHTML = '';

        if (amount > 0) {
            let divCollection = '';
            let divElement = '';

            for (let i = 0; i < amount; i++) {
                divElement = `
                <div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background: ${rgb()}"></div>
                `;
                divCollection += divElement;
                
            }
            
            divContainerEl.insertAdjacentHTML("afterbegin", divCollection);
            return;
        }
        alert('Введите количество в поле');
        inputEl.focus();
    }

    createBoxes(inputEl.value);

    inputEl.value = '';
   
};

function rgb() {
    let color = '#';
    let hexNumber = '';
    
    for (let j = 1; j <= 3; j++) {
        hexNumber = parseInt(Math.random() * 256).toString(16);
        if (hexNumber.length < 2) hexNumber = '0' + hexNumber;
        color += hexNumber;
    }

    return color;
}

btnDestroyEl.addEventListener('click', onDestroyClick);

function onDestroyClick() {
    divContainerEl.innerHTML = '';
}