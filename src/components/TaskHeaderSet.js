import React, { Component } from "react";
import AddTask from "./AddTask.js";
import DelTask from "./DelTask.js";
import Toggle from "./Toggle.js";

class TaskHeaderSet extends Component {
  render() {
    const { panel, toggle, addTask, delTask, toggleDel } = this.props;
    return (
      <ul>
        <li>
          <Toggle>
            {({ on, toggle }) => (
              <div>
                <p style={btnStyle} onClick={toggle}>
                  +
                </p>
                {on && (
                  <AddTask
                    toggle={toggle}
                    panel={panel.title}
                    addTask={addTask}
                  />
                )}
              </div>
            )}
          </Toggle>
        </li>
        <li>
          <Toggle>
            {({ on, toggle }) => (
              <div>
                <p style={btnStyle} onClick={(e) => {toggle(); toggleDel()}}>
                  -
                </p>
                {on && <DelTask delTask={delTask} toggle={toggle} toggleDel={toggleDel}/>}
              </div>
            )}
          </Toggle>
        </li>
      </ul>
    );
  }
}
//styles
const btnStyle = {
  padding: "0 10px",
  position: "relative",
  bottom: '10px',
  fontSize: "30px",
  fontWeight: "1000"
};
const liStyle = {
  display: "inline",
  width: "fit-content"
};
export default TaskHeaderSet;
