const container = document.getElementById('container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(let i = 0; i < rows*columns; i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', e => 
        e.target.classList.add('my-color-class'));
    }
}

createGrid(16, 16);