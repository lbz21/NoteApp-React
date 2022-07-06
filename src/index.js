import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';

require('firebase/firestore');

//firebase configurations
var firebaseConfig = {

  apiKey: "AIzaSyDQc08Z1Zv0B9hUTFzbgHblZvxvYU7iR0A",
  authDomain: "cont-web-resit.firebaseapp.com",
  databaseURL: "https://cont-web-resit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cont-web-resit",
  storageBucket: "cont-web-resit.appspot.com",
  messagingSenderId: "193620581323",
  appId: "1:193620581323:web:1fe7de1a3e9116793e344e",
  measurementId: "G-DYEP195NZ6"
};

firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('note-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
