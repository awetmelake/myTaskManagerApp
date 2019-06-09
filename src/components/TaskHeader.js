import React, { Component } from "react";
import CreateTask from './CreateTask.js'
import Toggle from './Toggle.js'

class TaskHeader extends Component {
  render(){
    return(
      <div className="task-header">
        <h2>{this.props.panel}</h2>
        <Toggle status={this.props.panel} createTask={this.props.createTask}>
          {({on, toggle}) => (
            <div>
              {on && (<CreateTask toggle={toggle} panel={this.props.panel} createTask={this.props.createTask}/>)}
              <p style={btnStyle} onClick={toggle}>+</p>
            </div>
          )}
        </Toggle>
      </div>
    )
  }
}
const btnStyle = {
  float: "right",
  color: "green",
  padding: "0 10px",
  borderRadius: "100px",
  position: "relative",
  bottom: "33px",
  fontSize: "30px",
  fontWeight: "1000",
};

export default TaskHeader;
