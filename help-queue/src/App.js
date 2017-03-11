import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    //Set state. 1-st thing
    constructor() {
        super();
        this.state ={
          now_serving: 1,
            queue:[]
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <h1>{this.state.now_serving}</h1>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
