import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
// import App6 from './App6';
import App from './App';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
