import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 1 method
const day = <h1>Hello its Tuesday  </h1> ;


// functiional approach

function day2(){
  return <h1>Hello its Tuesday 2 </h1>
}

// way of Component

function Day(){
  return <h1>Hello its Tuesday 3 </h1>
}




root.render(
  <div>
    {day}
    {day2()}
    {Day()}

  </div>  
);

