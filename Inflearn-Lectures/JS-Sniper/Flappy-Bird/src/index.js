const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

let keys = {};
let ghost = document.createElement("div");

// 유령의 정보를 담은 변수
let player = {
  x: 0,
  y: 0,
  speed: 5,
};

const start = () => {
  gameMessage.classList.add("hide");
  startBtn.classList.add("hide");
  ghost.setAttribute("class", "ghost");
  gameArea.appendChild(ghost);
  // 현재 위치 초기화
  player.x = ghost.offsetLeft;
  player.y = ghost.offsetTop;
  window.requestAnimationFrame(playGame);
};
// requestAnimationFrame : 애니메이션을 부드럽게 처리해주는 함수

const playGame = () => {
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight && player.x < gameArea.offsetWidth - ghost.offsetWidth) {
    player.x += player.speed;
  }
  if (keys.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < gameArea.offsetHeight - ghost.offsetHeight) {
    player.y += player.speed;
  }
  ghost.style.left = player.x + "px";
  ghost.style.top = player.y + "px";
  window.requestAnimationFrame(playGame); // 여기서 자기 자신을 또 실행함(무한반복하게 됨)
};

const pressOn = (e) => {
  console.log(e.code);
  keys[e.code] = true;
  console.log(keys);
};

const pressOff = (e) => {
  console.log(e.code);
  keys[e.code] = false;
  console.log(keys);
};

startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
