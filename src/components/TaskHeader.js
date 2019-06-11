import React, { Component } from "react";
import TaskSetting from "./TaskSetting.js";
import Toggle from "./Toggle.js";
import HeaderSet from "./HeaderSet";

class TaskHeader extends Component {
  render() {
    const { addTask, delTask, panel } = this.props;
    return (
      <div className="task-header">
      <h2>{panel}</h2>
        <Toggle status={panel} addTask={addTask}>
          {({ on, toggle }) => (
            <div>
              <p style={{}}onClick={toggle}>settings</p>
                {on && (
                  <HeaderSet toggle={toggle} panel={panel} addTask={addTask} />
                )}
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}
const btnStyle = {};

export default TaskHeader;
