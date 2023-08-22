
// 셀렉트
// const select = document.querySelector(".custom-select");
// const btn = select.querySelector(".btn-select"); //select
// const list = select.querySelector(".list"); //option
// const optionList = list.querySelectorAll("button"); // option list
// const firstOption = list.querySelector("button"); //option first button
// const lastOption = optionList[optionList.length - 1]; //option last button

// let selectOption = firstOption;

// // select option 열기
// const handleOpen = function () {
//   btn.classList.toggle("on");
//   // 선택된 option으로 포커스 이동
//   selectOption.focus();
// };

// // 다음 option으로 이동
// const nextOption = function (e) {
//   e.preventDefault();
//   const next = e.target.closest("li").nextElementSibling;
//   if (next) {
//     next.querySelector("button").focus();
//   } else {
//     firstOption.focus();
//   }
// };

// // 이전 option으로 이동
// const prevOption = function (e) {
//   e.preventDefault();
//   const prev = e.target.closest("li").previousElementSibling;
//   if (prev) {
//     prev.querySelector("button").focus();
//   } else {
//     lastOption.focus();
//   }
// };

// // 아래방향키 tab, 위쪽 방향키 shift + tab
// const moveOption = function (e) {
//   // 아래쪽 방향키(↓)	40 / tab
//   if (e.keyCode === 40 || (!e.shiftKey && e.keyCode === 9)) {
//     nextOption(e);
//   }
//   // 위쪽 방향키(↑)	38 / shift + tab
//   if (e.keyCode === 38 || (e.shiftKey && e.keyCode === 9)) {
//     prevOption(e);
//   }
// };

// // option 선택
// const handleSelect = function (e) {
//   if (e.target.nodeName === "BUTTON") {
//     btn.innerText = e.target.innerText;
//     btn.classList.remove("on");
//     window.setTimeout(function () {
//       btn.focus();
//     }, 100);
//     selectOption = e.target;
//   }
// };

// // select 닫기
// const handleClose = function () {
//   btn.classList.remove("on");
//   window.setTimeout(function () {
//     btn.focus();
//   }, 100);
// };

// // option 열기 : 클릭하거나, 스페이스, 엔터, 위아래 화살표 방향 누를 때
// // button의 경우 클릭(스페이스, 엔터 지원)
// btn.addEventListener("click", handleOpen);
// btn.addEventListener("keydown", function (e) {
//   if (e.keyCode === 40 || e.keyCode === 38) {
//     handleOpen();
//   }
// });

// // option 닫기 : list에서 ESC(27) 누를 때, 영역 밖 클릭 시
// list.addEventListener("keydown", function (e) {
//   if (e.keyCode === 27) {
//     handleClose();
//   }
// });
// document.addEventListener("click", function (e) {
//   if (!e.target.closest(".custom-select")) {
//     btn.classList.remove("on");
//   }
// });

// // option 선택하기
// optionList.forEach((element) =>
//   element.addEventListener("click", function (e) {
//     handleSelect(e);
//   })
// );

// // option 키보드로 제어하기
// optionList.forEach((element) =>
//   element.addEventListener("keydown", function (e) {
//     moveOption(e);
//   })
// );

// ----------------------------------------------------------------


// 선택자에 따른 성능차이 => 최대한 적은 범위를 찾도록 하는게 좋다
// 하지만 제일 좋은건 깨지지않게 만드는 것

// <!-- <li><button type="button">Python</button></li>
// <li><button type="button">Java</button></li>
// <li><button type="button">JavaScript</button></li>
// <li><button type="button">C#</button></li>
// <li><button type="button">C/C++</button></li> -->



  // 1. 버튼을 누르면 목록이 나와야한다.
  const btn = document.querySelector('.btn-select');
  btn.addEventListener('click', function () {
      btn.classList.toggle('on');
  });

  // 2. 목록의 버튼을 누르면 버튼의 텍스트가 첫번째 버튼에 반영되어야 한다.
  // const btns = document.querySelectorAll('.list button');
  // btns.forEach((itemBtn) => {
  //     itemBtn.addEventListener('click', function () {
  //         btn.textContent = itemBtn.textContent;
  //         btn.classList.remove('on');
  //     });
  // });

  // 3. li 를 동적으로 생성해주세요.
  const list = document.querySelector('.list');
  const arrLang = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];

  // HTML 요소를 생성하는 예전 방식
  // arrLang.forEach((item) => {
  //     const li = document.createElement('li');
  //     const btn = document.createElement('button');
  //     btn.setAttribute('type', 'button');
  //     btn.textContent = item;
  //     li.append(btn);
  //     list.appendChild(li);
  // });

  // 배열을 통한 동적인 요소 생성
  arrLang.forEach((item) => {
      const li = document.createElement('li'); // li태그 생성
      li.innerHTML = `<button type='button'>${item}</button>`;
      list.appendChild(li);
  });

  // 4. 이벤트를 이벤트 위임을 통해서 구현해주세요.
  //  ul 태그에 이벤트를 위임
  list.addEventListener('click', (event) => {
      if (event.target.nodeName === "BUTTON") {
          btn.textContent = event.target.textContent;
          btn.classList.remove('on');
      }
  });
