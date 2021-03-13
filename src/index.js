import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let counter = 0;

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  counter += 1;
}, 1000);



