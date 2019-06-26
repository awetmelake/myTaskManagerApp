import React, { Component } from "react";
import Toggle from "./Toggle.js";
import TaskHeaderSet from "./TaskHeaderSet";

class TaskHeader extends Component {
  render() {
    const { panel, toggleDel, changeWindow } = this.props;
    const { title } = panel;
    return (
      <div className="task-header">
        <h2 className="task-header-title">{title}</h2>
        <div className="task-header-setting">
          <Toggle>
            {({ on, toggle }) => (
              <div>
                <p className="btn task-header-setting-btn" onClick={toggle}>
                  ...
                </p>
                {on && (
                  <TaskHeaderSet
                    changeWindow={changeWindow}
                    toggle={toggle}
                    panel={panel}
                    toggleDel={toggleDel}
                  />
                )}
              </div>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default TaskHeader;
