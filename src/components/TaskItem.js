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
    const { setTaskFocus, task, panelId } = this.props;
    const { title, focused, description, id } = task;
    return (
      <div
        className="task-item"
        style={this.getStyle(focused)}
        onClick={setTaskFocus.bind(this, id, panelId)}
      >
        {title}
        <Toggle description={description}>
          {({ on, toggle }) => (
            <div>
              <p
                style={(() => {
                  return {display: description !== undefined ? 'initial': 'none'}
                })()}
                className="task-item-show-desc btn"
                onClick={toggle}
                title='Show Description'
              >
                ...
              </p>
              {on && <p>{description}</p>}
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
