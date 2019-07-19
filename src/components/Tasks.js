import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    const {
      task,
      panel,
      setTaskFocus,
      changeWindow,
      delFocused,
      toggleDel,
      userPrompt,
      editTask,
      moveTask,
      delTask,
      setTimer
    } = this.props;
    const { tasks } = panel;
    return tasks.map(task => (
      <TaskItem
        changeWindow={changeWindow}
        userPrompt={userPrompt}
        toggleDel={toggleDel}
        delFocused={delFocused}
        key={task.id}
        task={task}
        panel={panel}
        editTask={editTask}
        setTaskFocus={setTaskFocus}
        moveTask={moveTask}
        delTask={delTask}
        setTimer={setTimer}
      />
    ));
  }
}

//PropTypes
Tasks.propTypes = {
  panel: PropTypes.object.isRequired
};

export default Tasks;
