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

    //change state, called only once after it is rendered to the dom
    // great time for real time database
    componentDidMount(){
        const rootRef = firebase.database().ref().child('react');
        //create a reference to speedRef
        const speedRef = rootRef.child('now_serving');
        //on sync data in real time
        speedRef.on('value', snap=>{
            this.setState({
                now_serving: snap.val()
            });
        })
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

                {this.state.queue}
            </div>
        );
    }
}

export default App;
