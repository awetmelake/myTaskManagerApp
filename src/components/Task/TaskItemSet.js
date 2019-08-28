import React, { Component } from "react";
// import Toggle from "./Toggle.js";

class TaskItemSet extends Component {
  state = {
    editMode: false
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  render() {
    const { toggleEdit, delTask, task, changeWindow, setTimer, panel } = this.props;

    return (
      <ul className="task-item-set btn">
        <li onClick={e => toggleEdit()}>edit</li>
        <li onClick={e => changeWindow("moveTask", task.id)}>move</li>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <li onClick={toggle}>timer</li>
              {on && (
                <div
                  onClick={e => {
                    e.target.className ===
                      "disappear-onclick-background timer" && toggle();
                  }}
                  className="disappear-onclick-background timer"
                >
                  <div className="prompt-window timer-set animated flipInX">
                    <p className="btn" onClick={e=>{
                      toggle();
                      setTimer(task.id, panel.id, true, task.timer.time)
                    }}>
                      Start Stopwatch
                    </p>

                  </div>
                </div>
              )}
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
                <div
                  onClick={e =>
                    e.target.className ===
                      "disappear-onclick-background delete" && toggle()
                  }
                  className="disappear-onclick-background delete"
                >
                  <div className="prompt-window delete-confirm animated flipInX">
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