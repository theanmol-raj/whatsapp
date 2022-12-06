import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const day = <h1>Hello its Tuesday  </h1> ;


root.render(
  <div>
    {day}
  </div>  
);

