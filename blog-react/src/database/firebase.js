// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "blog-react-55bb0.firebaseapp.com",
  projectId: "blog-react-55bb0",
  storageBucket: "blog-react-55bb0.appspot.com",
  messagingSenderId: "851879832076",
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 앱을 지정해주고 변수를 선언을 했음 
// => index.js에서 import 했을때  파이어베이스 실행
// -> 모든공간에 영향을 끼친다
