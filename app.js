const grid = document.querySelector('.grid');
const colors = ['brown','blue','violet','red','sky-blue','dark-blue','light-green','light-pink','dark-red','yellow','yellow-green'];
let selectedColor = 'white';
let isDragStarted = false;

for(let i=1;i<=99;i++) {
    const div = document.createElement('div');
    div.classList.add('white','grid-cell-border');
    div.addEventListener('click',changeColor);
    div.addEventListener('mousedown',changeColor);
    div.addEventListener('mousemove',changeColor);
    div.addEventListener('mouseup',changeColor);
    grid.appendChild(div);
}

for(let i=0;i<=10;i++) {
    const div = document.createElement('div');
    div.classList.add('grid-cell-border','clickable-cell',colors[i]);
    div.addEventListener('click',colorSelection);
    grid.appendChild(div);
}

function colorSelection(event) {
    selectedColor = event.target.classList[2];
}


function changeColor(event) {
    if(event.type === 'click' || event.type === 'mouseup') {
        isDragStarted = false;
    } else if(event.type === 'mousedown') {
        isDragStarted = true;
    }
    console.log(event.type);
    if(isDragStarted || event.type === 'click') {
        if(event.target.classList.length === 3) event.target.classList.remove(event.target.classList[2]);
        event.target.classList.add(selectedColor)
    }
}