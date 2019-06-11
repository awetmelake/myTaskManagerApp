import React, { Component } from "react";
import Tasks from "./Tasks.js";
import TaskHeader from "./TaskHeader.js";
import PropTypes from "prop-types";

class TaskPanel extends Component {
  render() {
    const { setFocus, tasks, createTask, panels, delTask, addTask} = this.props;
    //create as many TaskPanels as there are in App state
    return panels.map(panel => (
      <div className="task-panel">
        <TaskHeader
        panel={panel}
        createTask={createTask}
        delTask={delTask}
        addTask={addTask}
        />
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
