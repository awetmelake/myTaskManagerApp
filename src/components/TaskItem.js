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
      editTask
    } = this.props;

    const { title, description, id } = task;

    return (
      <Toggle delTask={delTask}>
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
                  console.log(e.target.className);
                  toggle();
                }
              }}
            >
              {title}
              <Toggle description={description}>
                {({ on, toggle }) => (
                  <>
                    {description.length > 0 && (
                      <p
                        className="task-item-show-desc btn"
                        onClick={toggle}
                        title="Show Description"
                      >
                        ...
                      </p>
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
