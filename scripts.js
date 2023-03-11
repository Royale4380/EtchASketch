

const gridContainer = document.querySelector('.grid-container');
// let columnNumber = 100;
// let squareSize = Math.round(960/columnNumber);
// let gridSize = columnNumber * columnNumber;
 let isHoverOn = false;
 let eraserActive = false;
 let squareColor = "#080808";
 let isMouseDownOn = false;

// let columnStyle = (`grid-template-columns: repeat(${columnNumber}, 1fr)`)
// gridContainer.setAttribute('style', columnStyle)
// buildGrid(gridSize);


const color = document.querySelector("#color-picker");
color.addEventListener("input", ()=>{updateColor(event)});

function updateColor(e){
    squareColor = e.target.value;
}

setGridRowsCols(50);

function setGridRowsCols(colNumber){
    let columnNumber = colNumber;
    let squareSize = Math.round(960/columnNumber);
    let gridSize = columnNumber * columnNumber;
    let columnStyle = (`grid-template-columns: repeat(${columnNumber}, 1fr)`)
    gridContainer.setAttribute('style', columnStyle)
    buildGrid(gridSize, squareSize);

}

gridContainer.addEventListener('mousedown', function(e){
    let target = e.target;
    if(target.classList == "grid-item"){
        // if(isHoverOn){
        //     gridContainer.removeEventListener('mouseover',handler);
        //     isHoverOn = false;
        // }else{
        //     gridContainer.addEventListener('mouseover', handler);
        // }
        gridContainer.addEventListener('mouseover', handler);
    }

});

gridContainer.addEventListener('mouseup', function(e){
    let target = e.target;
    if(target.classList == "grid-item"){
        
        gridContainer.removeEventListener('mouseover', handler);  
    }
});

var handler = function(e){
    let target = e.target;
    if (target.classList == "grid-item"){
        if(!eraserActive){
            target.setAttribute('style', 'background-color: ' + squareColor + ';');
        }else{
            target.setAttribute('style', 'background-color: rgb(230, 229, 229);');
        }
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

function clearGridColor(){
   const childrenArray =  Array.from(gridContainer.children);
   childrenArray.forEach((item) => {item.setAttribute("style","background-color: rgb(230, 229, 229)")}); 

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

function eraserToggle(){
    let btnEraser = document.querySelector("#btn-eraser");
    if(!eraserActive){
        eraserActive = true;
        btnEraser.textContent = "Eraser Off"
    }else{
        eraserActive = false;
        btnEraser.textContent = "Eraser On"
    }
    console.log(eraserActive);
}




