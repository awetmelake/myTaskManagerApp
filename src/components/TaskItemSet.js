import React, { Component } from "react";
import TimerSet from "./TimerSet.js";
import Toggle from "./Toggle.js";

class TaskItemSet extends Component {
  state = {
    editMode: false
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  render() {
    const {
      toggleEdit,
      delTask,
      id,
      panel,
      setTaskFocus,
      toggleDel,
      task,
      changeWindow
    } = this.props;
    
    return (
      <ul className="task-item-set btn">
        <li onClick={e => toggleEdit()}>edit</li>
        <li onClick={e => changeWindow("moveTask", task.id)}>move</li>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <li onClick={toggle}>timer</li>
              {on && <TimerSet />}
            </>
          )}
        </Toggle>
        <br />
        <br />
        <br />
        <Toggle>
          {({ on, toggle }) => (
            <>
              <li onClick={toggle}>delete</li>
              {on && (
                <div className="prompt-window delete-confirm">
                  <p style={{ fontSize: "15px" }}>Delete?</p>
                  <button
                    onClick={e => delTask(task.id)}
                    style={{ marginRight: "10px" }}
                    className="btn"
                  >
                    yes
                  </button>
                  <button onClick={toggle} className="btn">
                    no
                  </button>
                </div>
              )}
            </>
          )}
        </Toggle>
      </ul>
    );
  }
}

export default TaskItemSet;
