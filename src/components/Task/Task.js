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
import {Types} from "../../actions/types"

const taskSource = {
  // canDrag(props) {
  //   return props.isReady
  // },
  //
  // isDragging(props, monitor) {
  //   return monitor.getItem().id === props.id
  // },

  beginDrag(props, monitor, component) {
    const item = { id: props.task.id }
    return item
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    // this.props.moveTask(item.id) // find a way to get target panel
    // alert("you dropped this item into panel")
    console.log(monitor.getItem())
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

class Task extends Component {
  state = {
    showDesc: false,
    taskInfo: false
  };

  //dotted border on (focus == true)
  getStyle = () => ({
    boxShadow:
      this.props.task.focused && this.props.timerRunning
        ? "2px 2px 5px black"
        : "0 0 0 white"
  });

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleTaskInfo = e => {
    if (
      e.target.className ===
        `task ${this.props.task.color} task-${
          this.props.largeNames ? "large-tasks" : ""
        }` &&
      !this.props.selectMode &&
      !this.props.editMode
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
      toggleFocus,
      largeNames,
      isDragging,
      connectDragSource
    } = this.props;

    return connectDragSource(
      <div
        className={`task ${task.color} task-${largeNames ? "large-tasks" : ""}`}
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
