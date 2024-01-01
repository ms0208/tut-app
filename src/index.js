import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import R1 from './R1';
import R2 from './R2';
import R4 from './R4';
import R5 from './R5';
import R6 from './R6';
import R7 from './R7';
import R8 from './R8';
import R9 from './R9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <R1 />
    <R2 />
    <R4 />
    <R5 />
    <R6 />
    <R7 />
    <R8 />
    <R9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
