const container = document.getElementById('container');
const header = document.createElement('div');
const mainContent = document.createElement('div');
const buttons = document.createElement('div');
const resetButton = document.createElement('button');
const grid = document.createElement('div');

mainContent.classList.add('content')
header.classList.add('header');
header.textContent = 'Etch-a-Sketch';
header.style.cssText = 'color: white; font-size: 45px'
buttons.classList.add('buttons');
resetButton.classList.add('resetButton');
resetButton.textContent = 'Reset';
grid.classList.add('grid');

buttons.appendChild(resetButton);
mainContent.appendChild(header);
mainContent.appendChild(grid);
container.appendChild(buttons);
container.appendChild(mainContent);

function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(let i = 0; i < rows*columns; i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-item";
    }
    document.querySelectorAll('.grid-item').forEach(cell => cell.addEventListener('mouseover', (e) => { 
    e.target.style.backgroundColor = 'black'}))
}
createGrid(16, 16);