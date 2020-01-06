let amountOfRows =  2;
let amountOfColumns = 2;
let color = "blue";

function addRow(){
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountOfColumns; i++){
        let cell = document.createElement("td");
        cell.className = "white-cell";
        cell.setAttribute('onclick', 'changeCellColor(this)')
        newRow.appendChild(cell);
    }

    mainGrid.children[0].appendChild(newRow);
    amountOfRows++;
}

function addColumn(){
    let mainGrid = document.getElementById("main-grid");
    let tableRows = mainGrid.children[0].children;
    //table -> tbody -> tr -> td

   console.log(tableRows[0]);  

    for(let i = 0; i < amountOfRows; i++){
        let cell = document.createElement("td");
        tableRows[i].appendChild(cell);
    }

    amountOfColumns++;
}

function selectColor() {
    color = document.getElementById("color").value;
    console.log(color);
}

function changeCellColor(el) {
    el.className = color + "-cell";
}

function fillUncoloredCells() {
    let uncoloredCells = document.getElementsByClassName("white-cell");
    uncoloredCells[0].className = color + "-cell";
    // console.log(uncoloredCells.length);
    // for(let i = 0; i < uncoloredCells.length; ++i) {
    //     let cell = uncoloredCells[i]
    //     cell.className = color + "-cell";
    // }
}

function removeRow(){
    let mainGrid = document.getElementById("main-grid");    
    let row = mainGrid.children[0].lastElementChild;

    mainGrid.children[0].removeChild(row);

    amountOfRows--;
}

function removeColumn(){
    let mainGrid = document.getElementById("main-grid");
    let tableRows = mainGrid.children[0].children;

    for(let i = 0; i < amountOfRows; i++){
        let column = tableRows[i].lastElementChild;
        tableRows[i].removeChild(column);
    }

    amountOfColumns--;
}