import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rheader from './component/r_header';
import Rfooter from './component/r_Footer'

ReactDOM.render(
  <React.StrictMode>
    <Rheader />
    <App />
    <Rfooter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
