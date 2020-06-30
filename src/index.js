import  './style/style.css';
import closeIcon from './img/close_icon.svg';
import menuIcon from './img/menu_icon.svg';
import restarIcon from './img/restart_icon.svg';

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

// menu
menuOpenButton.addEventListener("click", menuOpen);
menuCloseButton.addEventListener("click", menuClose);
gameRestartBtn.addEventListener("click", gameRestart);
clearDataBtn.addEventListener("click", clearData);
menuAboutBtn.addEventListener("click", menuAbout);

pageReloadBtn.src = restarIcon;
menuOpenButton.src = menuIcon;
menuCloseButton.src = closeIcon;

function menuOpen() {
  menu.style.display = "block";
  menuOpenButton.style.display = "none";
}

function menuClose() {
  menu.style.display = "none";
  menuOpenButton.style.display = "block";
}

// game
let playerTurn = false;
let crossWinInfo = window.localStorage.getItem("crossWinInfo");
let circleWinInfo = window.localStorage.getItem("circleWinInfo");

function startGame() {
  if (crossWinInfo === null && circleWinInfo === null) {
    crossWinInfo = 0;
    circleWinInfo = 0;
    window.localStorage.setItem("crossWinInfo", crossWinInfo);
    window.localStorage.setItem("circleWinInfo", circleWinInfo);
  }

  circleWinCounter.textContent = circleWinInfo;
  crossWinCounter.textContent = crossWinInfo;

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
  while (isTrue) {
    let randomBox = Math.floor(Math.random() * box.length);
    if (!box[randomBox].hasAttribute("clicked")) {
      box[randomBox].setAttribute("clicked", "");
      box[randomBox].textContent = turnPlayer();
      isTrue = false;
    }
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
      winCounter(box[i].textContent);
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

function winCounter(item) {
  if (item == "X") {
    crossWinInfo++;
    window.localStorage.setItem("crossWinInfo", crossWinInfo);
  } else if (item == "O") {
    circleWinInfo++;
    window.localStorage.setItem("circleWinInfo", circleWinInfo);
  }
}

function clearData() {
  circleWinInfo = 0;
  crossWinInfo = 0;
  window.localStorage.setItem("crossWinInfo", crossWinInfo);
  window.localStorage.setItem("circleWinInfo", circleWinInfo);

  circleWinCounter.textContent = circleWinInfo;
  crossWinCounter.textContent = crossWinInfo;

  menuClose();
}

function menuAbout() {
  alert("This game from Artur Hovhannisyan");
}

async function pageReload() {
  await sleep(300);
  location.reload();
}
startGame();
