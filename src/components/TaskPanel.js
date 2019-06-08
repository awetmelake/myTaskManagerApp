import React, { Component } from "react";
import Tasks from "./Tasks.js";
import TaskHeader from "./TaskHeader.js";
import PropTypes from "prop-types";

class TaskPanel extends Component {
  render() {
    const { setFocus, tasks, createTask, panels} = this.props;
    //create as many TaskPanels as there are in App state
    return panels.map(panel => (
      <div className="task-panel">
        <TaskHeader title={panel} createTask={createTask} />
        <Tasks
          panel={panel}
          setFocus={setFocus}
          tasks={tasks}
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
