import React, { Component } from 'react';
import Assignment1 from './Assignment1/Assignment1';
import Assignment2 from './Assignment2/Assignment2';
import "./App.css";

class App extends Component {
  state = {
    assign1Visible: false,
    assign2Visible: false
  }

  clickHandler =  (show,hide) => {
    this.setState({
      [show+"Visible"] : true,
      [hide+"Visible"] : false
    })
  }

  render(){
    let assignment1 = null;
    let assignment2 = null;

    if (this.state.assign1Visible){
      assignment1 = <Assignment1 />;
    }

    if (this.state.assign2Visible){
      assignment2 = <Assignment2 />;
    }

    return(
      <div className = "App"> 
        <ul className="nav-bar">
          <li className={this.state.assign1Visible? "visible" : ""} onClick = {this.clickHandler.bind(this, "assign1", "assign2")}>Assignment 1</li>
          <li className={this.state.assign2Visible? "visible" : ""} onClick = {this.clickHandler.bind(this, "assign2", "assign1")}>Assignment 2</li>
        </ul>
        <div className = "content">
          {assignment1}
          {assignment2}
        </div>
      </div>
    );
  }
}

export default App;