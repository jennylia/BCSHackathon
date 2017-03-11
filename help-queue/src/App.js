import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import StudentForm from './components/StudentForm'
import  QueueDisplay from './components/QueueDisplay'
class App extends Component {

    //Set state. 1-st thing
    constructor() {
        super();
        this.state ={
          now_serving: 1,
            //name_queue:["jenny","victoria",3]
        };
        this.deleteStudent = this.deleteStudent.bind(this);
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
            //console.log("name queue is", name_queue)
            //console.log("student is", students)
            this.setState({
                students: students
            });
        })
    }

    deleteStudent(){
        console.log("issued a delete student command")
        const studentQueue = firebase.database().ref().child('name_queue');
        console.log(studentQueue);
        var list = [];
        studentQueue.on('value', snap=> {
            var name_queue = snap.val()
            //debugger
            list = Object.keys(name_queue);

        });

        console.log(list[0]);
        var firstkey = list[0]
        studentQueue.child(firstkey).remove();
    }

    deleteAllStudents(){
        console.log("issued a deleteAll student command")
        const studentQueue = firebase.database().ref().child('name_queue');
        studentQueue.removeAll();
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

                <QueueDisplay studentQueue={this.state.students}/>


                <h2>Adding a student</h2>
                <StudentForm nowServing={this.state.now_serving}></StudentForm>
                <button onClick={this.deleteStudent}>Delete</button>

            </div>
        );
    }
}




export default App;
