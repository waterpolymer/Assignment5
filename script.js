let amountOfRows = 4;
let amountOfColumns = 4;
let color = "gray";
let initialColor = color;
let isMouseDown = false;
let mainGrid = document.getElementById("main-grid");

function initialize() {
    for (let i = 0; i < amountOfRows; ++i) {
        let row = document.createElement("tr");
        for (let j = 0; j < amountOfColumns; ++j) {
            let cell = document.createElement("td");
            cell.className = initialColor + "-cell ";
            cell.setAttribute('onclick', 'changeCellColor(this)');
            cell.setAttribute('onmouseover', 'mouseHover(this) ');
            row.appendChild(cell);
        }
        mainGrid.children[0].appendChild(row);
    }
}

function addRow() {
    let newRow = document.createElement("tr");

    for (let i = 0; i < amountOfColumns; i++) {
        let cell = document.createElement("td");
        cell.className = initialColor + "-cell ";
        cell.setAttribute('onclick', 'changeCellColor(this)');
        cell.setAttribute('onmouseover', 'mouseHover(this) ');
        newRow.appendChild(cell);
    }

    mainGrid.children[0].appendChild(newRow);
    amountOfRows++;
}

function addColumn() {
    let tableRows = mainGrid.children[0].children;
    //table -> tbody -> tr -> td

    for (let i = 0; i < amountOfRows; i++) {
        let cell = document.createElement("td");
        cell.className = initialColor + "-cell ";
        cell.setAttribute('onclick', 'changeCellColor(this)')
        cell.setAttribute('onmouseover', 'mouseHover(this)');
        tableRows[i].appendChild(cell);
    }

    amountOfColumns++;
}

function removeRow() {
    let row = mainGrid.children[0].lastElementChild;
    mainGrid.children[0].removeChild(row);
    amountOfRows--;
}

function removeColumn() {
    let tableRows = mainGrid.children[0].children;

    for (let i = 0; i < amountOfRows; i++) {
        let column = tableRows[i].lastElementChild;
        tableRows[i].removeChild(column);
    }

    amountOfColumns--;
}

function updateColor(newColor) {
    color = newColor;
    document.getElementById("color").style.backgroundColor = newColor;
}

function selectColor() {
    color = document.getElementById("color").value;
    let newColor = color;
    switch (newColor) {
        case "blue":
            newColor = "#1976d2";
            break;
        case "yellow":
            newColor = "#ebd534"
    }
    document.getElementById("color").style.backgroundColor = newColor;
}

function changeCellColor(el) {
    el.className = color + "-cell";
}

function fillUncoloredCells() {
    let uncoloredCells = document.getElementsByClassName(initialColor + "-cell ");

    for (let i = uncoloredCells.length - 1; i >= 0; --i) {
        changeCellColor(uncoloredCells[i]);
    }
}

function fillAllCells() {
    let cells = document.getElementsByTagName("td");
    for (let i = cells.length - 1; i >= 0; --i) {
        changeCellColor(cells[i]);
    }
}

function resetCells() {
    let cells = document.getElementsByTagName("td");
    let temp = color;
    color = initialColor;
    for (let i = cells.length - 1; i >= 0; --i) {
        changeCellColor(cells[i]);
    }
    color = temp;
}


function mouseDownEvent() {
    //console.log("Mouse  is down")
    isMouseDown = true;
}

function mouseUpEvent() {
    isMouseDown = false;
    let tableRows = mainGrid.children[0].children

    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {

            let cell = tableRows[i].children[j];

            //console.log(cell);
            if (cell.children.length > 0) {
                cell.removeChild(cell.children[0]);
                changeCellColor(cell);
            }
        }
    }
}

function mouseHover(eli) {
    if (isMouseDown) {
        let tmp = document.createElement("p");
        eli.appendChild(tmp);
        console.log("Am hovering when mousedown");
        //console.log(event);
    }
}