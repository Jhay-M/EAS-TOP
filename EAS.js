let num = 16;
const container = document.querySelector('div.container');
const reset = document.querySelector('div.reset');
const button = document.createElement('button');
button.textContent = 'New Grid';
button.classList.add('newGrid');
reset.appendChild(button);

function makeDivs() { //Cell Maker for Grid
    for (i = 0; i < (num * num); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    };
} 

function random() {
    return Math.floor(Math.random() * 257);
}

function setTrails() { //Color-Trail Function
    const containers = document.querySelectorAll('.gridItem');
    containers.forEach((div) => {
        div.addEventListener('mouseenter', function(e) {
            div.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        });
    });
}

function clearGrid() {
    const gridItems = document.querySelectorAll('.gridItem');
        gridItems.forEach((div) => {
            container.removeChild(div);
    });
}

function initGrid() { //Main Process
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    makeDivs();
    setTrails();
}

initGrid();

button.addEventListener('click', function (e) {
    clearGrid();
    num = prompt('How many Squares per Side?', 16); 
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    makeDivs();
    setTrails();
});