import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";
import Toggle from "./Toggle.js";

class Tasks extends Component {
  render() {
    const { tasks, panel, setFocus, delMode } = this.props;
    return tasks
      .filter(task => task.panel === panel)
      .map(task => (
        <TaskItem key={task.id} task={task} setFocus={setFocus} delMode={delMode} />
      ));
  }
}

//PropTypes
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default Tasks;
