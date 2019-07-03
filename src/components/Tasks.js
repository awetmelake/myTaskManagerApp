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
      userPrompt,
      editTask
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
        editTask={editTask}
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
