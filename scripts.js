

const gridContainer = document.querySelector('.grid-container');
// let columnNumber = 100;
// let squareSize = Math.round(960/columnNumber);
// let gridSize = columnNumber * columnNumber;
 let isHoverOn = false;

// let columnStyle = (`grid-template-columns: repeat(${columnNumber}, 1fr)`)
// gridContainer.setAttribute('style', columnStyle)
// buildGrid(gridSize);

setGridRowsCols(50);

function setGridRowsCols(colNumber){
    let columnNumber = colNumber;
    let squareSize = Math.round(960/columnNumber);
    let gridSize = columnNumber * columnNumber;
    let columnStyle = (`grid-template-columns: repeat(${columnNumber}, 1fr)`)
    gridContainer.setAttribute('style', columnStyle)
    buildGrid(gridSize, squareSize);

}

gridContainer.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList == "grid-item"){
        if(isHoverOn){
            gridContainer.removeEventListener('mouseover',handler);
            isHoverOn = false;
        }else{
            gridContainer.addEventListener('mouseover', handler);
        }
    }

});

var handler = function(e){
    let target = e.target;
    if (target.classList == "grid-item"){
        target.setAttribute('style', 'background-color: blue');
        isHoverOn = true;
    }
};

function promptUser(){
    let numResponse = 0;
    while(true){
        let response = prompt('Enter the number of grid rows (Max 100):')
        if (isNaN(response)){
            response = prompt('Enter a valid number (max 100)');
        }else{
            numResponse = parseInt(response);
            if(numResponse > 100){
                response = prompt('Enter a valid number (max 100)');
            }else{
                break;
            }
        }

    }
   
    isHoverOn = false;
    clearGrid();
    setGridRowsCols(numResponse);
    
}


function clearGrid(){

    while (gridContainer.hasChildNodes){
        let currentChild = gridContainer.lastChild;
        if(currentChild !== null){
            if(currentChild.classList =='grid-item'){
                gridContainer.removeChild(gridContainer.lastChild);
            }else{
                break;
            }
        }else{
            break;
        }
    }

}

function buildGrid(numOfSquares, squareSize){
    for(let i = 0; i<numOfSquares; i++){
        let square = document.createElement('div');
        square.classList.add('grid-item');
        let squareStyle = (`width: ${squareSize}; height: ${squareSize}`);
        square.setAttribute('style', squareStyle);
        gridContainer.appendChild(square);
       
    }
}



