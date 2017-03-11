import React, { Component } from 'react'
export default class Timer extends Component {

    constructor(props) {
        super(props)
        var duration = this.props.duration;
        var timer = parseInt(duration,10);
        this.state = {
            timer: timer,
            timeString: ''
        };

        setInterval(() => {
            --timer;
            if (timer <0) {
                timer = parseInt(duration,10);
            }
            var minutes = Math.floor(timer / 60);
            var seconds = timer % 60;
            var timeString = '';
            minutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
            seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
            timeString = minutes + ":" + seconds;
            this.setState({timeString: timeString})


        }, 1000)
    }
    render() {
        //var time = "1:20";

        const timeString = this.state.timeString;



        return(
            <div>
                <h3>Time left: {timeString}</h3>
            </div>
        );
    }
}