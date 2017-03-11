import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
class App extends Component {
  render() {
     return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
 */
 
class App extends Component {
    
    //Set state. 1-st thing
    constructor() {
        super();
        this.state ={
          now_serving: "gord",
          name_queue:["jenny","victoria","cici"]
        };
    }
    
    render() {
        return (
           <div>
               <NowServing studentName = {this.state.now_serving}/>
               <NameQueue studentQueue = {this.state.name_queue}/>
           </div>
        );
     }
}

class NowServing extends Component {
     render() {
         var name = this.props.studentName;
         return(
             <div>
                 <h2>Now Serving: </h2>
                 <h3>{name}</h3>
             </div>
         );
     }
}

class Timer extends Component {
     render() {
     }
}

class NameQueue extends Component {
     render() {
         var rows = [];
         this.props.studentQueue.forEach((student) => {
             rows.push(<tr>{student}</tr>);
         });
         return(
             <div>
                 <h2>Queue: </h2>
                 <table>
                    <tbody>{rows}</tbody>
                 </table>
             </div>
         );
     }
}

class QueueEntry extends Component {
     render() {
     }
}


export default App;
