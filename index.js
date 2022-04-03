const container = document.getElementById('container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(let i = 0; i < rows*columns; i++) {
        let cell = document.createElement('div');
        cell.innerText = (i+1);
        grid.appendChild(cell).className = "grid-item";
    }
}

createGrid(16, 16);