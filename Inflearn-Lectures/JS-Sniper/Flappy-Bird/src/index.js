const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

//유저의 키 정보를 저장하는 객체
let keys = {};

// 게임시작을 알리는 함수
const start = () => {
  console.log("시작");
  gameMessage.classList.add("hide");
  startBtn.classList.add("hide");
};
// 키다운 이벤트를 처리하는 함수
const pressOn = (e) => {
  console.log(e.code); // e.key를 사용할 수도 있지만 space 경우 공백으로 출력되기 때문에 code를 사용,
  keys[e.code] = true; // keys객체의 key값으로 현재 눌린 키의 정보를 담음,  눌려진 키의 정보를 true로 설정하여 해당 키가 눌려졌음을 표시
  console.log(keys);
};
// 키업 이벤트를 처리하는 함수
const pressOff = (e) => {
  console.log(e.code);
  keys[e.code] = false; // 눌려진 키의 정보를 false로 설정하여 해당 키가 놓아졌음을 표시
  console.log(keys);
};

startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
