const refs = {
    input: document.querySelector('#controls input'),
    renderBtn:  document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
}

const getRandomColors = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function createBoxes(amount) {

    const newBoxes = [];

    for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement('div');
    boxRef.id = 'box';
    boxRef.style.width = `${30 + i * 10}px`;
    boxRef.style.height = `${30 + i * 10}px`;
    boxRef.style.backgroundColor = getRandomColors();
    boxRef.style.display = 'inline-block';
    newBoxes.push(boxRef);
    }

    refs.boxes.append(...newBoxes);
}

function cleanBoxes(amount) {
    refs.boxes.innerHTML = '';
    refs.input.value = '';
}

refs.renderBtn.addEventListener("click", () =>
    createBoxes(refs.input.value)
);
refs.destroyBtn.addEventListener("click", cleanBoxes);