import React, { Component } from "react";
import PropTypes from "prop-types";

class TaskItem extends Component {
  //dotted border on focus == true
  getStyle = focused => {
    return {
      border: focused ? "1px dotted black" : "1px solid black",
      backgroundColor: this.props.task.color
    };
  };

  render() {
    const { setFocus } = this.props;
    const { id, title, time, focused } = this.props.task;
    return (
      <div
        className="task-item"
        style={this.getStyle(focused)}
        onClick={setFocus.bind(this, id)}
      >
        {title}
        <p style={{ textAlign: "right" }} >{time}</p>
      </div>
    );
  }
}

//PropTypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
