import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

// components
import TaskInfo from "./TaskInfo";

// actions
import { setTimerTarget } from "../../actions/timerActions";
import { toggleSelectMode } from "../../actions/uiActions";
import { toggleFocus } from "../../actions/taskActions";
// styles
import "./Task.scss";

class Task extends Component {
  state = {
    showDesc: false,
    taskInfo: false
  };

  //dotted border on (focus == true)
  getStyle = () => ({
    border:
      this.props.task.focused && this.props.timerRunning
        ? "2px solid black"
        : "1px solid black"
  });

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleTaskInfo = e => {
    if (
      e.target.className === `task ${this.props.task.color}` &&
      !this.props.selectMode
    ) {
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
    const {
      task,
      selectMode,
      setTimerTarget,
      toggleSelectMode,
      toggleFocus
    } = this.props;
    return (
      <div
        className={`task ${task.color}`}
        style={this.getStyle()}
        onClick={e => {
          if (selectMode) {
            setTimerTarget(task.id);
            toggleFocus(task.id);
            toggleSelectMode();
          } else {
            this.toggleTaskInfo(e);
          }
        }}
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
  tasks: state.tasks.tasks,
  selectMode: state.ui.selectMode,
  timerRunning: state.timer.isRunning
});

export default compose(
  connect(
    mapStateToProps,
    { setTimerTarget, toggleSelectMode, toggleFocus }
  )
)(Task);
