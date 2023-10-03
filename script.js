function hoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', hoverEvent)
    });
}

function addNewGrid() {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = "New Grid";
    button.classList.add('btn');
    body.appendChild(button);
}

function generateGrid(length) {
    container.replaceChildren();
    for (let column = 0; column < length; column++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let row = 0; row < length; row++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.height = newWidth(length) + "px";
            div.style.width = newWidth(length) + "px";
            rowDiv.appendChild(div);
        }
        columnDiv.appendChild(rowDiv);
        container.appendChild(columnDiv);
        body.appendChild(container);
    }
    hoverEffect();
}

function newWidth(length) {
    const newWidth = rowLength / length;
    return newWidth;
}

function hoverEvent(e) {
    e.target.classList.add('onhover');
}

const rowLength = 400;
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const title = document.createElement('h1');
title.textContent = "Etch-a-Sketch";
body.appendChild(title);
addNewGrid();
generateGrid(16);


const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    console.log("hello");
    let length = prompt("Please Enter new grid length: ");
    generateGrid(length);
})







