import React, { Component } from "react";
import TaskItemSet from "./TaskItemSet.js";
class TaskInfo extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.task.color,
      fontSize: "25px"
    };
  };

  render() {
    const { delTask, task, panel, setTaskFocus, toggleDel } = this.props;
    const { title, description, id } = task;
    return (
      <div
        className="disappear-onclick-background"
        onClick={e => {
          if (e.target.className === "disappear-onclick-background") {
            this.props.toggle();
          }
        }}
      >
        <div style={this.getStyle()} className="task-info ">
          <p>Title:</p>
          {title}
          {description.length > 0 && <p>Description: </p>}
          {description}
          <div>
            <TaskItemSet
              setTaskFocus={setTaskFocus}
              id={id}
              toggleDel={toggleDel}
              panel={panel}
              delTask={delTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskInfo;
