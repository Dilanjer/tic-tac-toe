const gameBoard = document.querySelector(".game-board");
const box = document.querySelectorAll(".box");
const playerInfo = document.querySelector(".player-info");
const endGameInfo = document.querySelector(".player-win");
const restartBtn = document.querySelector(".restart");
const aiCheckBox = document.querySelector(".checkbox");
const aiElement = document.querySelector(".ai");
const crossColor = document.querySelector(".cross");
const circleColor = document.querySelector(".circle");
const playerClickOff = document.querySelector(".player-click-off");
const pageReloadBtn = document.querySelector(".page-reload");

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

function startGame() {
  crossColor.style.backgroundColor = "orange";
  circleColor.style.backgroundColor = "red";
  aiCheckBox.checked = true;
  aiElement.style.display = "inline-block";
  playerTurn = false;
  gameBoard.addEventListener("click", playerClick);
  pageReloadBtn.addEventListener("click", pageReload);
}

async function playerClick(target, gameBox) {
  target = event.target;
  gameBox = target.hasAttribute("game-box");
  aiElement.style.display = "none";

  if (gameBox && !target.hasAttribute("clicked")) {
    target.innerHTML = turnPlayer();
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
  crossColor.style.backgroundColor = "orange";
  let isTrue = true;
  let count = 0;
  while (isTrue) {
    let randomBox = Math.floor(Math.random() * box.length);
    if (!box[randomBox].hasAttribute("clicked")) {
      box[randomBox].setAttribute("clicked", "");
      box[randomBox].innerHTML = turnPlayer();
      isTrue = false;
    }
    if (count++ == 20) break;
  }
  playerClickOff.style.display = "none";
}

function areaCheck() {
  for (let i = 0; i < box.length; i++) {
    if (winCheck(box[i].innerHTML) && box[i].innerHTML != "") {
      gameBoard.removeEventListener("click", playerClick);
      playerInfo.style.display = "block";
      crossColor.style.backgroundColor = "blue";
      circleColor.style.backgroundColor = "red";
      return (endGameInfo.textContent = `win: ${box[i].innerHTML}`);
    } else if (drawCheck()) {
      return (
        (endGameInfo.textContent = `Draw`), (playerInfo.style.display = "block")
      );
    }
  }
}

function winCheck(item) {
  return winCombination.find((combintation) => {
    return combintation.every((index) => {
      return box[index].innerHTML == item;
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
  playerInfo.style.display = "none";
  box.forEach((item) => {
    item.innerHTML = "";
    item.removeAttribute("clicked");
  });
  startGame();
}

async function pageReload() {
  await sleep(300);
  location.reload();
}
startGame();
