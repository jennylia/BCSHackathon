import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import StudentForm from './components/StudentForm'

class App extends Component {

    //Set state. 1-st thing
    constructor() {
        super();
        this.state ={
          now_serving: 1,
            //name_queue:["jenny","victoria",3]
        };
    }

    //change state, called only once after it is rendered to the dom
    // great time for real time database
    componentDidMount(){
        const nowServe = firebase.database().ref().child('now_serving');

        nowServe.on('value', snap=>{
            console.log(snap.val())
            this.setState({
                now_serving: snap.val()
            });
        })

        const studentQueue = firebase.database().ref().child('name_queue');
        studentQueue.on('value', snap=>{
            var name_queue = snap.val()
            //debugger
            var students = Object.values(name_queue).map(({studentName, studentNumber}) => studentName)
            console.log("name queue is", name_queue)
            console.log("student is", students)
            this.setState({
                students: students
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
                <h1>Now Serving Student: {this.state.now_serving}</h1>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                {this.state.students}

                <h2>Adding a student</h2>
                <StudentForm></StudentForm>

            </div>
        );
    }
}

export default App;
