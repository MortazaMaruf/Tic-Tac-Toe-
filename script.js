const cell = document.querySelectorAll("#cell");
const stutsText = document.querySelector("#stutsText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cell.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    stutsText.textContent = `${currentPlayer}'s Turn`;
    running = true;



}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (option[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    option[index] = currentPlayer;
    cell.textContent = currentPlayer;

}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    stutsText.textContent = `${currentPlayer}'s Turn!`;

}
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = option[condition[0]];
        const cellB = option[condition[1]];
        const cellC = option[condition[2]];
        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        } if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        stutsText.textContent = `${currentPlayer}'s Win!`;
        roundWon = false;
    }else if (!option.includes("")) {
        stutsText.textContent = `Draw! `;
        running = false;
    } else {
        changePlayer();

    }
}
function restartGame() {
   currentPlayer = "X";
    option = ["", "", "", "", "", "", "", "", ""];
    stutsText.textContent = `${currentPlayer}'trun!`;
    cell.forEach(cell => cell.textContent = "");
    running = true;
}
