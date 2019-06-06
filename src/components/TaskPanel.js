import React, { Component } from "react";
import Tasks from "./Tasks.js";
import TaskHeader from "./TaskHeader.js";
import PropTypes from "prop-types";

class TaskPanel extends Component {
  render() {
    return this.props.panels.map(panel => (
      <div className="task-panel">
        <TaskHeader title={panel} />
        <Tasks todos={this.props.todos} />
      </div>
    ));
  }
}

//PropTypes
TaskPanel.propTypes = {
  todos: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired
};
export default TaskPanel;
