
// 셀렉트
const select = document.querySelector(".custom-select");
const btn = select.querySelector(".btn-select"); //select
const list = select.querySelector(".list"); //option
const optionList = list.querySelectorAll("button"); // option list
const firstOption = list.querySelector("button"); //option first button
const lastOption = optionList[optionList.length - 1]; //option last button

let selectOption = firstOption;

// select option 열기
const handleOpen = function () {
  btn.classList.toggle("on");
  // 선택된 option으로 포커스 이동
  selectOption.focus();
};

// 다음 option으로 이동
const nextOption = function (e) {
  e.preventDefault();
  const next = e.target.closest("li").nextElementSibling;
  if (next) {
    next.querySelector("button").focus();
  } else {
    firstOption.focus();
  }
};

// 이전 option으로 이동
const prevOption = function (e) {
  e.preventDefault();
  const prev = e.target.closest("li").previousElementSibling;
  if (prev) {
    prev.querySelector("button").focus();
  } else {
    lastOption.focus();
  }
};

// 아래방향키 tab, 위쪽 방향키 shift + tab
const moveOption = function (e) {
  // 아래쪽 방향키(↓)	40 / tab
  if (e.keyCode === 40 || (!e.shiftKey && e.keyCode === 9)) {
    nextOption(e);
  }
  // 위쪽 방향키(↑)	38 / shift + tab
  if (e.keyCode === 38 || (e.shiftKey && e.keyCode === 9)) {
    prevOption(e);
  }
};

// option 선택
const handleSelect = function (e) {
  if (e.target.nodeName === "BUTTON") {
    btn.innerText = e.target.innerText;
    btn.classList.remove("on");
    window.setTimeout(function () {
      btn.focus();
    }, 100);
    selectOption = e.target;
  }
};

// select 닫기
const handleClose = function () {
  btn.classList.remove("on");
  window.setTimeout(function () {
    btn.focus();
  }, 100);
};

// option 열기 : 클릭하거나, 스페이스, 엔터, 위아래 화살표 방향 누를 때
// button의 경우 클릭(스페이스, 엔터 지원)
btn.addEventListener("click", handleOpen);
btn.addEventListener("keydown", function (e) {
  if (e.keyCode === 40 || e.keyCode === 38) {
    handleOpen();
  }
});

// option 닫기 : list에서 ESC(27) 누를 때, 영역 밖 클릭 시
list.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    handleClose();
  }
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select")) {
    btn.classList.remove("on");
  }
});

// option 선택하기
optionList.forEach((element) =>
  element.addEventListener("click", function (e) {
    handleSelect(e);
  })
);

// option 키보드로 제어하기
optionList.forEach((element) =>
  element.addEventListener("keydown", function (e) {
    moveOption(e);
  })
);




// const selectBtn = document.querySelector('.btn-select');
// const list = document.querySelector('.list');
// const btnList = document.querySelectorAll('.list button');

// // 1. 버튼을 누르면 목록이 나와야한다.
// // 2. 목록의 버튼을 누르면 버튼의 텍스트가 첫번째 버튼에 반영되어야 한다.

//   selectBtn.addEventListener('click', () =>{
//   selectBtn.classList.toggle('on');
// })

// // btnList은 유사배열로 저장됨 
// // NodeList(5) [button, button, button, button, button]
// btnList.forEach((btn)=>{
//   btn.addEventListener('click', () =>{
//   selectBtn.textContent =  btn.textContent;
//   selectBtn.classList.remove('on'); 
// });

// })


// 선택자에 따른 성능차이 => 최대한 적은 범위를 찾도록 하는게 좋다
// 하지만 제일 좋은건 깨지지않게 만드는 것