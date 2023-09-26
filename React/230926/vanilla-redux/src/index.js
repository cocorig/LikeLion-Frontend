// import React from "react";
// // import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
import {createStore} from "redux";
    
// Count를 Vanila JS로 구현해본다면 클릭 이벤트가 발생할 때마다 count의 상태값을 직접 수정한 후, HTML을 업데이트 해줍니다.
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// 2. 리듀서 생성(store의 상태값을 수정할 reducer 함수를 만들어줍니다.)
const countReducer = (state = 0, action) => { // state 초기화
  switch (action.type) {  // switch문
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state > 0 ? state -1 : 0;
    default:
      return state;
  }
}


// 1. 저장소 생성
const store = createStore(countReducer);
/**
 * 
 * @param {Number} count 
 * 화면에 업데이트 해주는 함수
 */
const handleWrite = ()=>{
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
}

store.subscribe(handleWrite)
/**
 * count + 1, 상태를 변화시켜주는 함수
 */
const addNumber = ()=>{
  store.dispatch({ type: "ADD" });
}
/**
 * count - 1, 상태를 변화시켜주는 함수
 */
const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });

};


// Init
// number.textContent = count;
// updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);