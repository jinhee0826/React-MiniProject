import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// public에 있는 index.html의 root를 가져와서 
// 그 안에 리액트 컴포너트로 보여줌(랜더)
// 가져온 div에 새로운 컴포넌트인 <App />을  render해줌
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.StrictMode>
// StrictMode 엄격 모드 => 한번 더 확인하고 실행 =>useEffect에서 2번 실행    
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
