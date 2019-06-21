import React, { Component } from "react";
import Tasks from "./Tasks.js";
import TaskHeader from "./TaskHeader.js";
import PropTypes from "prop-types";

class TaskPanel extends Component {
  render() {
    const {
      panels,
      setTaskFocus,
      addTask,
      delTask,
      toggleDel,
      delPanel,
      changeWindow
    } = this.props;
    return panels.map(panel => (
      <div className="task-panel">
        <TaskHeader
          panel={panel}
          addTask={addTask}
          delTask={delTask}
          delPanel={delPanel}
          toggleDel={toggleDel}
          changeWindow={changeWindow}
          key={panel.id}
        />
        <Tasks
          panel={panel}
          setTaskFocus={setTaskFocus}
          toggleDel={toggleDel}
        />
      </div>
    ));
  }
}

//PropTypes
TaskPanel.propTypes = {
  panels: PropTypes.array.isRequired
};
export default TaskPanel;