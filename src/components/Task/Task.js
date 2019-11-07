import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { DragSource } from "react-dnd";

// components
import TaskInfo from "./TaskInfo";

// actions
import { setTimerTarget } from "../../actions/timerActions";
import { toggleSelectMode } from "../../actions/uiActions";
import { toggleFocus } from "../../actions/taskActions";

// styles
import "./Task.scss";

// constants
import { Types } from "../../actions/types";
import { BORDER_COLORS } from "../../colors.js";

const taskSource = {
  beginDrag(props, monitor, component) {
    const item = { id: props.task.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Task extends Component {
  state = {
    showDesc: false,
    taskInfo: false,
    borderColor: BORDER_COLORS[this.props.task.color.split(" ")[0]]
  };

  getStyle = () => ({
    boxShadow:
      this.props.task.focused && this.props.timerRunning
        ? `0px 0px 5px black`
        : "none",
  });

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleTaskInfo = e => {
    let targetClass = e.target.className;
    let targetId = e.target.id;
    if (
      targetId ===
        "task-item" &&
      !this.props.selectMode &&
      !this.props.editMode
    ) {
      this.setState({
        taskInfo: true
      });
    } else if (
      targetClass === "MuiDialog-container MuiDialog-scrollPaper" || targetId === "task-timer-btn"
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
      toggleFocus,
      largeNames,
      isDragging,
      connectDragSource
    } = this.props;
    let opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div
        className={`task ${task.color} task-${largeNames ? "large-tasks" : ""} grey-text text-darken-4`}
        id="task-item"
        style={{ ...this.getStyle(), opacity: opacity, border: `1px solid ${this.state.borderColor}` }}
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
  timerRunning: state.timer.isRunning,
  largeNames: state.tasks.largeNames,
  editMode: state.boards.editMode
});

export default compose(
  connect(
    mapStateToProps,
    { setTimerTarget, toggleSelectMode, toggleFocus }
  ),
  DragSource(Types.TASK, taskSource, collect)
)(Task);
