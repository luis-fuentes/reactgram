import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyCb2FLp6iCTdMrMe0n0LtgSzyG5yugp9Ck",
  authDomain: "tutoriales-48bd8.firebaseapp.com",
  databaseURL: "https://tutoriales-48bd8.firebaseio.com",
  storageBucket: "tutoriales-48bd8.appspot.com",
  messagingSenderId: "84055575874"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
