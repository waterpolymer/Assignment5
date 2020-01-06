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

    mainGrid.appendChild(newRow);
    amountOfRows++;
}

function addColumn(){
    let mainGrid = document.getElementById("main-grid");
    
    for(let i = 0; i < amountOfRows; i++){
        let cell = document.createElement("td");
        //tr
        mainGrid.children[i].children.appendChild(cell);
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