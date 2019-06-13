import React, { Component } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle.js";

class TaskItem extends Component {
  //dotted border on focus == true
  getStyle = focused => {
    return {
      border: focused ? "2px dotted black" : "2px solid black",
      backgroundColor: this.props.task.color
    };
  };

  render() {
    const { setFocus } = this.props;
    const { title,  focused, description, id } = this.props.task;
    return (
      <div
        className="task-item"
        style={this.getStyle(focused)}
        onClick={setFocus.bind(this, id )}
      >
        {title  }
        <Toggle description={description}>
          {({ on, toggle }) => (
            <div>
              <a className="task-item-setting-btn" onClick={toggle}>
                ...
              </a>
              {on && (
                <p>{description}</p>
              )}
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

//PropTypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
