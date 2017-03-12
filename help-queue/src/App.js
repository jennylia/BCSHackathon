import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import StudentForm from './components/StudentForm'
import  QueueDisplay from './components/QueueDisplay'
import Timer from './components/Timer'
class App extends Component {

    //Set state. 1-st thing
    constructor() {
        super();
        this.state ={
          now_serving: 1,
            timerVal: 300,
            studentLength: 1,
        };
        this.deleteStudent = this.deleteStudent.bind(this);
        this.incrementServe = this.incrementServe.bind(this);

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

        const studentLength = firebase.database().ref().child('studentLength');
        studentLength.on('value', snap=>{
            console.log(snap.val())
            this.setState({
                studentLength: snap.val()
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


    incrementServe(){
        var nextNumber = this.state.now_serving + 1 ;
        const nowServe = firebase.database().ref().child('now_serving');

        this.setState({
            timerVal: 300
        })
        nowServe.set(nextNumber);
    }
    render() {
        return (
            <div className="App">
                <div className="jumbotron"><h1>Help Queue</h1></div>

                <h1>Now Serving Student: {this.state.now_serving}</h1>

                <QueueDisplay studentQueue={this.state.students}/>
                <Timer duration={this.state.timerVal}/>

                <h2>Adding a student</h2>
                <StudentForm nowServing={this.state.now_serving} studentLength={this.state.studentLength}></StudentForm>
                <button className="btn-danger" onClick={this.deleteStudent}>Delete</button>
                <button className="btn-primary" onClick={this.incrementServe}>Next Student</button>

            </div>
        );
    }
}




export default App;
