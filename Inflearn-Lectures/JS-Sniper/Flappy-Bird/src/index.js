const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

const start = () => {
  console.log("시작");
  gameMessage.classList.add("hide");
  startBtn.classList.add("hide");
};
const pressOn = () => {
  console.log("on");
};
const pressOff = () => {
  console.log("off");
};

startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
