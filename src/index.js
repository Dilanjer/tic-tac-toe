import "./style/style.css";
import closeIcon from "./img/close_icon.svg";
import menuIcon from "./img/menu_icon.svg";
import restartIcon from "./img/restart_icon.svg";

const gameBoard = document.querySelector(".game-board");
const box = document.querySelectorAll(".box");
const endGame = document.querySelector(".player-info");
const playerWinText = document.querySelector(".player-win-text");
const aiCheckBox = document.querySelector(".checkbox");
const ai = document.querySelector(".ai");
const crossColor = document.querySelector(".cross");
const circleColor = document.querySelector(".circle");
const menu = document.querySelector(".menu");
const gameRestartBtn = document.querySelector(".restart-button");
const clearDataBtn = document.querySelector(".data-clear-button");
const menuAboutBtn = document.querySelector(".data-menu-open-button");
const playerClickOff = document.querySelector(".player-click-off");
const pageReloadBtn = document.querySelector(".page-reload-button");
const menuOpenButton = document.querySelector(".menu-open-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const circleWinCounter = document.querySelector(".circleWin");
const crossWinCounter = document.querySelector(".crossWin");

const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let playerTurn = false;
let crossWinInfo = parseInt(window.localStorage.getItem("crossWinInfo")) || 0;
let circleWinInfo = parseInt(window.localStorage.getItem("circleWinInfo")) || 0;
aiCheckBox.checked =
  JSON.parse(window.localStorage.getItem("aiCheckBoxInfo")) || true;

const initializeUI = () => {
  pageReloadBtn.src = restartIcon;
  menuOpenButton.src = menuIcon;
  menuCloseButton.src = closeIcon;
  circleWinCounter.textContent = circleWinInfo;
  crossWinCounter.textContent = crossWinInfo;
  crossColor.style.backgroundColor = "orange";
  circleColor.style.backgroundColor = "red";
  ai.style.display = "block";
  menu.style.display = "none";
  endGame.style.display = "none";
};

const switchMenuVisibility = (isOpen) => {
  menu.style.display = isOpen ? "block" : "none";
  menuOpenButton.style.display = isOpen ? "none" : "block";
};

const resetBoard = () => {
  box.forEach((item) => {
    item.textContent = "";
    item.removeAttribute("clicked");
  });
  playerWinText.textContent = "";
};

const updateLocalStorage = () => {
  window.localStorage.setItem("crossWinInfo", crossWinInfo);
  window.localStorage.setItem("circleWinInfo", circleWinInfo);
  window.localStorage.setItem("aiCheckBoxInfo", aiCheckBox.checked);
};

const updateScoreUI = () => {
  circleWinCounter.textContent = circleWinInfo;
  crossWinCounter.textContent = crossWinInfo;
};

const turnPlayer = () => {
  playerTurn = !playerTurn;
  crossColor.style.backgroundColor = playerTurn ? "blue" : "orange";
  circleColor.style.backgroundColor = playerTurn ? "orange" : "red";
  return playerTurn ? "X" : "O";
};

const findWinningMove = (combination, playerSymbol) => {
  const moves = combination.filter(
    (index) => box[index].textContent === playerSymbol
  );
  const emptySpaces = combination.filter(
    (index) => !box[index].hasAttribute("clicked")
  );
  return moves.length === 2 && emptySpaces.length === 1 ? emptySpaces[0] : null;
};

const makeRandomMove = (symbol) => {
  const availableBoxes = [...box].filter(
    (item) => !item.hasAttribute("clicked")
  );
  const randomBox =
    availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
  randomBox.textContent = symbol;
  randomBox.setAttribute("clicked", "");
};

const checkWinCondition = () => {
  for (const combination of winCombination) {
    const [a, b, c] = combination;
    if (
      box[a].textContent &&
      box[a].textContent === box[b].textContent &&
      box[a].textContent === box[c].textContent
    ) {
      return box[a].textContent;
    }
  }
  return [...box].every((item) => item.hasAttribute("clicked")) ? "Draw" : null;
};

const aiMove = () => {
  for (const combination of winCombination) {
    const move =
      findWinningMove(combination, "O") || findWinningMove(combination, "X");
    if (move !== null) {
      box[move].textContent = "O";
      box[move].setAttribute("clicked", "");
      turnPlayer();
      return;
    }
  }
  makeRandomMove("O");
  turnPlayer();
};

const handlePlayerMove = (event) => {
  ai.style.display = "none";
  const target = event.target;
  if (target.hasAttribute("data-game-box") && !target.hasAttribute("clicked")) {
    target.textContent = turnPlayer();
    target.setAttribute("clicked", "");

    const result = checkWinCondition();
    if (result) return endGameHandler(result);

    if (aiCheckBox.checked) {
      playerClickOff.style.display = "block";
      setTimeout(() => {
        aiMove();
        playerClickOff.style.display = "none";
        const aiResult = checkWinCondition();
        if (aiResult) endGameHandler(aiResult);
      }, 800);
    }
  }
};

const endGameHandler = (result) => {
  endGame.style.display = "block";
  playerWinText.textContent = result === "Draw" ? "Draw" : `Win: ${result}`;
  if (result === "X") crossWinInfo++;
  if (result === "O") circleWinInfo++;
  updateScoreUI();
  updateLocalStorage();
  gameBoard.removeEventListener("click", handlePlayerMove);
};

const startGame = () => {
  playerTurn = false;
  initializeUI();
  resetBoard();
  updateScoreUI();

  gameBoard.addEventListener("click", handlePlayerMove);
};

menuOpenButton.addEventListener("click", () => switchMenuVisibility(true));
menuCloseButton.addEventListener("click", () => switchMenuVisibility(false));
gameRestartBtn.addEventListener("click", startGame);
clearDataBtn.addEventListener("click", () => {
  crossWinInfo = 0;
  circleWinInfo = 0;
  updateScoreUI();
  updateLocalStorage();
});
aiCheckBox.addEventListener("change", updateLocalStorage);
menuAboutBtn.addEventListener("click", () =>
  alert("This game is created by Artur Hovhannisyan")
);

startGame();
