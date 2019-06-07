import React, { Component } from "react";
import PropTypes from "prop-types";

class TaskItem extends Component {
  //dotted border on focus == true
  getStyle = () => {
    return {
      borderStyle: this.props.task.focused ? "solid" : "dotted"
    };
  };

  render() {
    const { id, title } = this.props.task;
    return (
      <p
        className="task-item"
        style={this.getStyle()}
        onClick={this.props.setFocus.bind(this, id)}
      >{title}</p>
    );
  }
}

//PropTypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
