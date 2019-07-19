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
      toggleDel,
      delPanel,
      changeWindow,
      userPrompt,
      editTask,
      editPanelTitle,
      delTask, setTimer
    } = this.props;

    return (
      <div className="panels">
        {panels.map(panel => (
          <div className="task-panel" key={panel.id}>
            <TaskHeader
              panel={panel}
              addTask={addTask}
              delPanel={delPanel}
              toggleDel={toggleDel}
              changeWindow={changeWindow}
              editPanelTitle={editPanelTitle}
            />
            <Tasks
              changeWindow={changeWindow}
              userPrompt={userPrompt}
              panel={panel}
              editTask={editTask}
              setTaskFocus={setTaskFocus}
              toggleDel={toggleDel}
              delTask={delTask}
              setTimer={setTimer}
            />
          </div>
        ))}
      </div>
    );
  }
}

//PropTypes
TaskPanel.propTypes = {
  panels: PropTypes.array.isRequired
};
export default TaskPanel;
