// import React from "react";
// // import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);


// Count를 Vanila JS로 구현해본다면 클릭 이벤트가 발생할 때마다 count의 상태값을 직접 수정한 후, HTML을 업데이트 해줍니다.
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

let count = 0;

/**
 * 
 * @param {Number} count 
 * 화면에 업데이트 해주는 함수
 */
const updateResult = (count)=>{
  number.textContent = count;
  quantity.textContent = count;
  totalPrice.textContent = count * PRICE;
}

/**
 * count + 1, 상태를 변화시켜주는 함수
 */
const addNumber = ()=>{
  count++;
  minus.disabled = false;
  updateResult(count);
}
/**
 * count - 1, 상태를 변화시켜주는 함수
 */
const substractNumber = () => {
  count -= 1;
  plus.disabled = false;
  updateResult(count);
};


// Init
number.textContent = count;
updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);