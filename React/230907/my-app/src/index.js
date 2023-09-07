import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRender from './ListRender';
import ReactFragment from './ReactFragment';
import Timer from './Timer';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
     */}
    {/* <ListRender/> */}
     <Clock/>
    <Timer></Timer>
    <ReactFragment/>
  </React.StrictMode>
);
