const gameBoard = document.querySelector(".game-board");
const box = document.querySelectorAll(".box");
const endGame = document.querySelector(".player-info");
const playerWinText = document.querySelector(".player-win-text");
const aiCheckBox = document.querySelector(".checkbox");
const ai = document.querySelector(".ai");
const crossColor = document.querySelector(".cross");
const circleColor = document.querySelector(".circle");
const playerClickOff = document.querySelector(".player-click-off");
const pageReloadBtn = document.querySelector(".page-reload");
const circleWinCounter = document.querySelector(".circleWin");
const crossWinCounter = document.querySelector(".crossWin");

const winCombination = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [6, 4, 2],
];
let playerTurn = false;
// let crossWinInfo = localStorage.getItem("crossWinInfo");
// let circleWinInfo = localStorage.getItem("circleWinInfo");
// crossWinInfo = 0;
// circleWinInfo = 0;
// localStorage.setItem("circleWinInfo", circleWinInfo);
// localStorage.setItem("crossWinInfo", crossWinInfo);

function startGame() {
  crossColor.style.backgroundColor = "orange";
  circleColor.style.backgroundColor = "red";
  aiCheckBox.checked = true;
  ai.style.display = "block";
  playerTurn = false;
  gameBoard.addEventListener("click", playerClick);
  pageReloadBtn.addEventListener("click", pageReload);
}

async function playerClick(target, gameBox) {
  target = event.target;
  gameBox = target.hasAttribute("data-game-box");
  ai.style.display = "none";

  if (gameBox && !target.hasAttribute("clicked")) {
    target.textContent = turnPlayer();
    target.setAttribute("clicked", "");
    if (aiCheckBox.checked) {
      playerClickOff.style.display = "block";
      areaCheck();
      await sleep(800);
      aiClick();
    }
  }
  areaCheck();
}

function turnPlayer(item) {
  playerTurn = !playerTurn;
  if (playerTurn) {
    crossColor.style.backgroundColor = "blue";
    circleColor.style.backgroundColor = "orange";

    return (item = "X");
  } else {
    circleColor.style.backgroundColor = "red";
    crossColor.style.backgroundColor = "orange";

    return (item = "O");
  }
}
function aiClick() {
  if (playerWinText.textContent != "") {
    playerClickOff.style.display = "none";
    return;
  }
  crossColor.style.backgroundColor = "orange";
  let isTrue = true;
  let count = 0;
  while (isTrue) {
    let randomBox = Math.floor(Math.random() * box.length);
    if (!box[randomBox].hasAttribute("clicked")) {
      box[randomBox].setAttribute("clicked", "");
      box[randomBox].textContent = turnPlayer();
      isTrue = false;
    }
    if (count++ == 20) break;
  }
  playerClickOff.style.display = "none";
}

function areaCheck() {
  if (playerWinText.textContent != "") return;
  for (let i = 0; i < box.length; i++) {
    if (winCheck(box[i].textContent) && box[i].textContent != "") {
      gameBoard.removeEventListener("click", playerClick);
      endGame.style.display = "block";
      crossColor.style.backgroundColor = "blue";
      circleColor.style.backgroundColor = "red";
      console.log("win", box[i].textContent);
      return (playerWinText.textContent = `win: ${box[i].textContent}`);
    } else if (drawCheck()) {
      return (
        (playerWinText.textContent = `Draw`), (endGame.style.display = "block")
      );
    }
  }
}

function winCheck(item) {
  return winCombination.some((combintation) => {
    return combintation.every((index) => {
      return box[index].textContent == item;
    });
  });
}

function drawCheck() {
  return [...box].every((item) => {
    return item.hasAttribute("clicked");
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function gameRestart() {
  endGame.style.display = "none";
  playerWinText.textContent = "";
  box.forEach((item) => {
    item.textContent = "";
    item.removeAttribute("clicked");
  });
  startGame();
}

async function pageReload() {
  await sleep(300);
  location.reload();
}
startGame();
