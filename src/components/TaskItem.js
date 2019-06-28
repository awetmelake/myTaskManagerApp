import React, { Component } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle.js";
import TaskInfo from "./TaskInfo.js";

class TaskItem extends Component {
  //dotted border on (focus == true)
  getStyle = (focused, delMode) => {
    return {
      border: focused && delMode ? "2px dotted black" : "2px solid black",
      backgroundColor: this.props.task.color
    };
  };

  render() {
    const {
      setTaskFocus,
      task,
      panel,
      changeWindow,
      delTask,
      toggleDel,
      userPrompt
    } = this.props;
    const { title, focused, description, id } = task;
    return (
      <Toggle delTask={delTask}>
        {({ on, toggle }) => (
          <div>
            <div
              className="task-item"
              style={this.getStyle(focused, panel.delMode)}
              onClick={e => {
                setTaskFocus(id, panel.id);
                if(!panel.delMode && userPrompt.type !== 'deltask'){
                  changeWindow("taskinfo", task);
                  toggle();
                }
              }}
            >
              {title}
              <Toggle description={description}>
                {({ on, toggle }) => (
                  <div>
                    <p
                      style={(() => {
                        return {
                          display:
                            description !== undefined ? "initial" : "none"
                        };
                      })()}
                      className="task-item-show-desc btn"
                      onClick={toggle}
                      title="Show Description"
                    >
                      ...
                    </p>
                    {on && <p>{description}</p>}
                  </div>
                )}
              </Toggle>
            </div>
            {on  && (
              <TaskInfo
                setTaskFocus={setTaskFocus}
                toggleDel={toggleDel}
                toggle={toggle}
                task={task}
                delTask={delTask}
                panel={panel}
              />
            )}
          </div>
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
