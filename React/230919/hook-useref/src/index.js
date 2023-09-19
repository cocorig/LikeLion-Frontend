import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // 개발자가 순수한 컴포넌트를 렌더링하고있는지 파악하기 위해서 두번씩 렌더링하게된다.
<React.StrictMode>
  <App/>
</React.StrictMode>

);


// 순수하다는 의미는 값은 값을 넘겼을 때 항상 같은 결과를 출력해야한다는 의미입니다.
// 리액트는 컴포넌트를 렌더링할 떼 값을 전달하는데 같응 props로 전달하면 같은 값을 전달
