import React, { Component } from 'react'

export default class QueueDisplay extends Component {
    render(){
        const { studentQueue }  = this.props;
        if (!studentQueue) {
            return <div>Empty</div>
        }
        return (
            <div>
            {studentQueue.map((student, index) => (
                <div key={index}>{student}</div>
            ))}
            </div>
        )
    }
}