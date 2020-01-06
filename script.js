let amountOfRows =  2;
let amountOfColumns = 2;

function addRow(){
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountOfColumns; i++){
        let cell = document.createElement("td");
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