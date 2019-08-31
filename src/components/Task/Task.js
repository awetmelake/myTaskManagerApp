import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

// components
import TaskInfo from "./TaskInfo";

// actions

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

        {task.description.length > 0 && (
          <i
            className="tiny material-icons description-btn"
            onClick={this.toggleDesc}
              title="Show description"
          >
            description
          </i>
        )}

        {this.state.showDesc && (
          <div className="task-description">{task.description}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  panels: state.panels.panels,
  tasks: state.tasks.tasks
});

export default compose(
  connect(
    mapStateToProps,
    {}
  )
)(Task);
