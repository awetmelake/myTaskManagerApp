import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    const {
      panel,
      setTaskFocus,
      changeWindow,
      delTask,
      toggleDel,
      userPrompt
    } = this.props;
    const { tasks } = panel;
    return tasks.map(task => (
      <TaskItem
        changeWindow={changeWindow}
        userPrompt={userPrompt}
        toggleDel={toggleDel}
        delTask={delTask}
        key={task.id}
        task={task}
        panel={panel}
        setTaskFocus={setTaskFocus}
      />
    ));
  }
}

//PropTypes
Tasks.propTypes = {
  panel: PropTypes.object.isRequired
};

export default Tasks;
