import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// 외부에서 연결할 때 가장 처음에 호출해서 관련 기능을 사용할 수 있게 해야함
// 웹을 사용할 때 파이어베이스를 들어오기 위해 import

// import {} from, import from을 통해서 가져오는 경우 
// : export, export default로 되어있는 값을 가져와서,
//  현재 js파일에서만 사용(다른 곳에서 사용하려면 다시 import)

// js, css를 들고올 때 import해서만 들고 오는 경우 
// : 전체 파일에 그 내용이 적용(어디에서 한 곳에 들고와도 ok)
import './database/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
