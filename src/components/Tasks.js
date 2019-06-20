import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    const { panel, setTaskFocus } = this.props;
    const { tasks } = panel;
    return tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        panelId={panel.id}
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
