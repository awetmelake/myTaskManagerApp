import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    const { tasks, panel, setFocus } = this.props;
    return tasks
      .filter(task => task.panel === panel)
      .map(task => (<TaskItem panel={panel} key={task.id} task={task} setFocus={setFocus} />));
  }
}

//PropTypes
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
