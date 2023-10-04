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

function generateGrid(numSquares) {
    if (!checkNumSquares(numSquares)) {
        container.replaceChildren();
        container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr`;
        container.style.gridTemplateRow = `repeat(${numSquares}, 1fr`;
        for (let i = 0; i < numSquares * numSquares; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
        body.appendChild(container);
        hoverEffect();
    } else {
        alert("Please Enter a number lower than 100");
    }

}

function checkNumSquares(numSquares) {
    return numSquares > 100
        
    
}

function hoverEvent(e) {
    e.target.classList.add('onhover');
}

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







