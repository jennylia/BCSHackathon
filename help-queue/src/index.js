import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAA4QmoUVWffWgPAXFAm4JtJL25LkQMV8Y",
    authDomain: "helpqueue-b72fd.firebaseapp.com",
    databaseURL: "https://helpqueue-b72fd.firebaseio.com",
    storageBucket: "helpqueue-b72fd.appspot.com",
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
