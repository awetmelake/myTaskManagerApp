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
      changeWindow,
      setTimer
    } = this.props;

    const { title, description, id, completeBy, time } = task;

    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            <div
              className="task-item btn"
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
              <p style={{ marginBottom: "5px" }}>{title}</p>
              {completeBy.length > 0 && (
                <>
                  <img
                    className="task-item-clock-icon"
                    src="./images/clock-icon.png"
                    alt="clock icon"
                  />
                  <p>{completeBy}</p>
                </>
              )}

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
                    {on && (
                      <p className="task-item-description">{description}</p>
                    )}
                  </>
                )}
              </Toggle>
            </div>
            {on && (
              <TaskInfo
                setTimer={setTimer}
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
