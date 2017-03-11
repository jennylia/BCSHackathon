import React, { Component, PropTypes } from 'react'
import * as firebase from 'firebase';

export default class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

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

        var studentQueue = firebase.database().ref().child('name_queue');
        var studentObj = {
            studentName: currentName,
            studentNumber: 100
        }
        //var nowServier = firebase.database().ref.child('now_serving');
        studentQueue.push(
            studentObj
        );


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