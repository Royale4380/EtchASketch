

const gridContainer = document.querySelector('.grid-container');
let columnNumber = 64;
let squareSize = Math.round(960/columnNumber);

let columnStyle = (`grid-template-columns: repeat(${columnNumber}, 1fr)`)
gridContainer.setAttribute('style', columnStyle)
buildGrid(4096);

// let box1 = document.createElement("div");
// box1.classList.add("grid-item");
// box1.textContent = "1";

// let box2 = document.createElement("div");
// box2.classList.add("grid-item");
// box2.textContent = "2";

// let box3 = document.createElement("div");
// box3.classList.add("grid-item");
// box3.textContent = "3";

// let box4 = document.createElement("div");
// box4.classList.add("grid-item");
// box4.textContent = "4";

// gridContainer.appendChild(box1);
// gridContainer.appendChild(box2);
// gridContainer.appendChild(box3);
// gridContainer.appendChild(box4);


function buildGrid(numOfSquares){
    for(let i = 0; i<numOfSquares; i++){
        let square = document.createElement('div');
        square.classList.add('grid-item');
        let squareStyle = (`width: ${squareSize}; height: ${squareSize}`);
        square.setAttribute('style', squareStyle);
        gridContainer.appendChild(square);

    }
}