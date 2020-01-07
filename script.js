let amountOfRows =  2;
let amountOfColumns = 2;
let color = "blue";
let isMouseDown = false;

let mainGrid = document.getElementById("main-grid");

function addRow(){
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountOfColumns; i++){
        let cell = document.createElement("td");
        cell.className = "white-cell";
        cell.setAttribute('onclick', 'changeCellColor(this)');
        cell.setAttribute('onmouseover', 'mouseHover(this) ');
        newRow.appendChild(cell);
    }

    mainGrid.children[0].appendChild(newRow);
    amountOfRows++;
}

function addColumn(){
    let tableRows = mainGrid.children[0].children;
    //table -> tbody -> tr -> td

    for(let i = 0; i < amountOfRows; i++){
        let cell = document.createElement("td");
        cell.className = "white-cell";
        cell.setAttribute('onclick', 'changeCellColor(this)')
        cell.setAttribute('onmouseover', 'mouseHover(this)');
        tableRows[i].appendChild(cell);
    }

    amountOfColumns++;
}

function selectColor() {
    color = document.getElementById("color").value;
    //console.log(color);
}

function changeCellColor(el) {
    el.className = color + "-cell";
}

function fillUncoloredCells() {
    let uncoloredCells = document.getElementsByClassName("white-cell");

    // uncoloredCells[0].className = color + "-cell";

    for(let i = uncoloredCells.length - 1; i >= 0; --i) {
        console.log(uncoloredCells.length);
        uncoloredCells[i].className = color + "-cell";
    }
}

function removeRow(){
    let row = mainGrid.children[0].lastElementChild;
    mainGrid.children[0].removeChild(row);
    amountOfRows--;
}

function removeColumn(){
    let tableRows = mainGrid.children[0].children;

    for(let i = 0; i < amountOfRows; i++){
        let column = tableRows[i].lastElementChild;
        tableRows[i].removeChild(column);
    }

    amountOfColumns--;
}

function mouseDownEvent(){
    //console.log("Mouse  is down")
    isMouseDown = true;
}

function mouseUpEvent(){
    isMouseDown = false;
    let tableRows = mainGrid.children[0].children

    for(let i = 0; i < amountOfRows; i++){
        for(let j = 0; j < amountOfColumns; j++){

            let cell = tableRows[i].children[j];

            //console.log(cell);
            if(cell.children.length > 0){
                cell.removeChild(cell.children[0]);
                changeCellColor(cell);
            }
        }
    }
}

function mouseHover(eli){
    if(isMouseDown){
        let tmp = document.createElement("p");
        eli.appendChild(tmp);
        console.log("Am hovering when mousedown");
        //console.log(event);
    }
}