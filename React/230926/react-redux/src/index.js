import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux' 
import { composeWithDevTools } from 'redux-devtools-extension'; // 

//  어짜피 새로운 데이터를 가지고 다시 렌더링 되기 때문의 별도의 subscribe 함수를 실행하지 않는다.
const store = createStore(rootReducer , composeWithDevTools());
console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
        <App />
</Provider>,
);