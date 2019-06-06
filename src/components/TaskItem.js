import React, { Component } from "react";
import PropTypes from "prop-types";

class TaskItem extends Component {
  getStyle = () => {
    return (
      this.props.focused ? {borderStyle: 'dotted'} : {borderStyle: 'solid'}
    )

  };

  render() {
    return (
      <div className="task-item"
      style={this.getStyle()}>
        <p> {this.props.todo.title} </p>
      </div>
    );
  }
}

//PropTypes
TaskItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TaskItem;
