import React, { Component } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle.js";
import TaskInfo from "./TaskInfo.js";

class TaskItem extends Component {
  //dotted border on (focus == true)
  getStyle = () => {
    return {
      border:
        this.props.task.focused && this.props.panel.delMode
          ? "2px dotted black"
          : "2px solid black",
      backgroundColor: this.props.task.color
    };
  };

  render() {
    const {
      setTaskFocus,
      task,
      panel,
      delTask,
      toggleDel,
      userPrompt,
      editTask,
      moveTask,
      changeWindow
    } = this.props;

    const { title, description, id } = task;

    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            <div
              className="task-item"
              style={this.getStyle()}
              onClick={e => {
                setTaskFocus(id, panel.id);
                if (
                  !panel.delMode &&
                  userPrompt.type !== "deltask" &&
                  e.target.className !== "task-item-show-desc btn"
                ) {
                  toggle();
                }
              }}
            >
              {title}
              <br />
              <Toggle>
                {({ on, toggle }) => (
                  <>
                    {description.length > 0 && (
                      <button
                        className="task-item-show-desc btn"
                        style={{ backgroundColor: this.props.task.color }}
                        onClick={toggle}
                        title="Show Description"
                      >
                        ...
                      </button>
                    )}
                    {on && <p>{description}</p>}
                  </>
                )}
              </Toggle>
            </div>
            {on && (
              <TaskInfo
                setTaskFocus={setTaskFocus}
                editTask={editTask}
                toggleDel={toggleDel}
                toggle={toggle}
                task={task}
                delTask={delTask}
                panel={panel}
                moveTask={moveTask}
                changeWindow={changeWindow}
              />
            )}
          </>
        )}
      </Toggle>
    );
  }
}

//PropTypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
