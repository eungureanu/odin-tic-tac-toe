let lastPlayed="0";
let content="";
let cellID=1;
let counter=0;

const message=document.querySelector("h2");
const Game = {
    board: []
}

const gameboard = document.querySelector(".gameboard");
gameboard.addEventListener("click", playGame);

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetGame);

function playGame(e) {
    if (e.target.innerHTML == "") {
        if (lastPlayed == "X") {
            content = "0";
            // console.log("content of the cell you just clicked is now " + content);
            e.target.innerHTML = content;
            lastPlayed = content;
            counter++;
            // console.log(Game.board);
            // console.log("The cell id where you added "+content+" is "+e.target.id);
            // placeContentAndReturnObject(e);
            // console.log(Game.board);
            checkWin(placeContentAndReturnObject(e));
            // checkWonPerColumn(placeContentAndReturnObject(e), content);
            // checkWonPerRow(placeContentAndReturnObject(e), content);
            // checkWonFirstDiagonal(placeContentAndReturnObject(e), content);
            // checkWonSecondDiagonal(placeContentAndReturnObject(e), content);
        } else {
            content = "X";
            // console.log("content of the cell you just clicked is now " + content);
            e.target.innerHTML = content;
            lastPlayed = content;
            counter++;
            // console.log(Game.board);
            // console.log("The cell id where you added "+content+" is "+e.target.id);
            // placeContentAndReturnObject(e);
            // console.log(Game.board);
            checkWin(placeContentAndReturnObject(e));
            // checkWonPerColumn(placeContentAndReturnObject(e), content);
            // checkWonPerRow(placeContentAndReturnObject(e), content);
            // checkWonFirstDiagonal(placeContentAndReturnObject(e), content);
            // checkWonSecondDiagonal(placeContentAndReturnObject(e), content);
        }
    }
}

function placeContentAndReturnObject(e){
    for (i=0; i<Game.board.length; i++){
        if (Game.board[i].cellID == e.target.id) {
            Game.board[i].content = content;
            return Game.board[i];
        }
    }
}

function checkWin(cellObject){
    if (checkWonPerRow(cellObject)==1 || 
        checkWonPerColumn(cellObject)==1 || 
        checkWonFirstDiagonal(cellObject)==1 || 
        checkWonSecondDiagonal(cellObject)==1) {
        console.log(cellObject.content+" wins!");
        gameboard.removeEventListener("click", playGame);
        message.innerHTML=cellObject.content+" WINS!";
        message.setAttribute("class", "");
        return cellObject.content+" wins!";
    } 
    if (counter==9){
        console.log("It's a draw");
        message.innerHTML="It's a draw!";
        message.setAttribute("class", "");
        return "draw";
    }
}

function checkWonPerRow(cellObject) {
    let result = 1;
    for (i = 0; i < Game.board.length; i++) {
        if (Game.board[i].rowIndex == cellObject.rowIndex){
            if (Game.board[i].content !== cellObject.content) {
                // console.log(value+" did not win");
                return 0;
            }
        }
    }
    // console.log(result);
    return result;
}

function checkWonPerColumn(cellObject) {
    let result = 1;
    for (i = 0; i < Game.board.length; i++) {
        if (Game.board[i].columnIndex == cellObject.columnIndex){
            if (Game.board[i].content !== cellObject.content) {
                // console.log(value+" did not win");
                return 0;
            }
        } 
    }
    // console.log(result);
    return result;
}

function checkWonFirstDiagonal(cellObject){
    let result = 1;
    for (i = 0; i < Game.board.length; i++) {
        if (Game.board[i].rowIndex == Game.board[i].columnIndex){
            if (Game.board[i].content !== cellObject.content) {
                // console.log(value+" did not win");
                return 0;
            }
        } 
    }
    // console.log(result);
    return result;
}

function checkWonSecondDiagonal(cellObject){
    let result = 1;
    for (i = 0; i < Game.board.length; i++) {
        if ((Game.board[i].rowIndex == 1 && Game.board[i].columnIndex==3) || (Game.board[i].rowIndex == 2 && Game.board[i].columnIndex==2) || (Game.board[i].rowIndex == 3 && Game.board[i].columnIndex==1)){
            if (Game.board[i].content !== cellObject.content) {
                // console.log(value+" did not win");
                return 0;
            }
        } 
    }
    // console.log(result);
    return result;
}

function resetGame(){
    window.location.reload();
}

function buildGameboard(){
    for (i=1; i<=3; i++){
        for (j=1; j<=3; j++){
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.setAttribute("id", cellID);
            gameboard.appendChild(cell);
            Game.board.push(createCell(cellID, i, j, content));//le-am creat si ce fac cu ele? le pun intr-un array
            cellID++;
        }
    }
}

function createCell(cellID, rowIndex, columnIndex, content){
    return {
        cellID: cellID,
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        content: content
    };    
}

buildGameboard();
console.log(Game.board);
