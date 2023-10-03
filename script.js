function grid() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    for (let column = 0; column < 16; column++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let row = 0; row < 16; row++) {
            const div = document.createElement('div');
            div.textContent= row;
            div.classList.add('square');
            rowDiv.appendChild(div);
            console.log(row);
        }
        columnDiv.appendChild(rowDiv);
        container.appendChild(columnDiv);
        body.appendChild(container);
    }
}

grid();




