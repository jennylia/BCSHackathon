import React, { Component } from 'react'
import * as firebase from 'firebase';

export default class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        var currentName = this.state.value;
        event.preventDefault();

        console.log("what is nowServe", this.props.nowServing);

        var nextNumber = this.props.nowServing + 1 ;
        console.log("the next Number is:", nextNumber);

        var studentQueue = firebase.database().ref().child('name_queue');
        var studentObj = {
            studentName: currentName,
            studentNumber: nextNumber
        }
        studentQueue.push(
            studentObj
        );

        //update the next number
        //const nowServe = firebase.database().ref().child('now_serving');
        //nowServe.set(nextNumber);


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}