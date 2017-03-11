import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAA4QmoUVWffWgPAXFAm4JtJL25LkQMV8Y",
    authDomain: "helpqueue-b72fd.firebaseapp.com",
    databaseURL: "https://helpqueue-b72fd.firebaseio.com",
    storageBucket: "helpqueue-b72fd.appspot.com",
};

firebase.initializeApp(config);

window.database = firebase.database();

class App extends Component {


    //constructor(){
    //    super();
    //    this.set = {
    //      now_serving: 1
    //    };
    //}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
