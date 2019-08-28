import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Toggle from "./Toggle.js";
// import TaskInfo from "./TaskInfo.js";

// components
import TaskInfo from "./TaskInfo";

// styles
import "./Task.scss";

class Task extends Component {
  state = {
    showDesc: false,
    taskInfo: false
  };

  //dotted border on (focus == true)
  getStyle = () => ({
    border: this.props.task.focused ? "1px dotted black" : "1px solid black"
  });

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleTaskInfo = e => {
    // console.log(e.target.className);
    if (e.target.className === `task ${this.props.task.color}`) {
      this.setState({
        taskInfo: true
      });
    } else if (
      e.target.className === "MuiDialog-container MuiDialog-scrollPaper"
    ) {
      this.setState({
        taskInfo: false
      });
    }
  };

  render() {
    const { task } = this.props;
    return (
      <div
        className={`task ${task.color}`}
        style={this.getStyle()}
        onClick={this.toggleTaskInfo}
      >
        <div className="task-title">{task.title}</div>

        <TaskInfo
          visible={this.state.taskInfo}
          toggleVisibility={this.toggleTaskInfo}
          task={task}
        />

        <i
          className="tiny material-icons description-btn"
          onClick={this.toggleDesc}
        >
          description
        </i>

        {this.state.showDesc && (
          <div className="task-description">{task.description}</div>
        )}
      </div>
    );
  }
}

export default Task;
