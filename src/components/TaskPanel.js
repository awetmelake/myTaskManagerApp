import React, { Component } from "react";
import Tasks from "./Tasks.js";
import TaskHeader from "./TaskHeader.js";
import PropTypes from "prop-types";

class TaskPanel extends Component {
  render() {
    //create as many TaskPanels as there are in App state
    return this.props.panels.map(panel => (
      <div className="task-panel">
        <TaskHeader
        title={panel}
        createTask ={this.props.createTask}
        />
        <Tasks
        panel={panel}
        setFocus={this.props.setFocus}
        tasks={this.props.tasks}
        />
      </div>
    ));
  }
}

//PropTypes
TaskPanel.propTypes = {
  tasks: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired
};
export default TaskPanel;
