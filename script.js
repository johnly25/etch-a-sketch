function grid() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h1');
    title.textContent = "Etch-a-Sketch";
    body.appendChild(title);

        for(let column = 0; column < 16; column++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let row = 0; row < 16; row++) {
            const div = document.createElement('div');
            div.classList.add('square');
            rowDiv.appendChild(div);
        }
        columnDiv.appendChild(rowDiv);
        container.appendChild(columnDiv);
        body.appendChild(container);
    }
}
grid();

function hoverEvent(e) {
    console.log(e);
    e.target.classList.add('onhover');
}
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', hoverEvent)
});

//const square = document.querySelector('.square');
//square.addEventListener('mouseover', hoverEvent);






