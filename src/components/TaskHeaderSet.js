import React, { Component } from "react";

class TaskHeaderSet extends Component {
  render() {
    const { panel, toggleDel, changeWindow, toggle, toggleEdit } = this.props;
    return (
      <ul onClick={toggle}>
        <li>
          <img
            onClick={e => toggleEdit()}
            className="btn"
            id="edit-panel-title-btn"
            src="../images/edit-icon.png"
            alt="edit"
            title="Edit Title"
          />
        </li>
        <li>
          <p
            className="btn task-setting-btn"
            id="add-task-btn"
            onClick={e => changeWindow("addtask", panel.id)}
            title="Add task"
          >
            +
          </p>
        </li>
        <li>
          <p
            className="btn task-setting-btn"
            id="del-task-btn"
            onClick={e => {
              changeWindow("deltask", panel.id);
              toggleDel(panel.id);
            }}
            title="Delete Task"
          >
            -
          </p>
        </li>
        <li>
          <img
            className="btn"
            id="del-panel-btn"
            src="../images/recycle-bin-image.jpg"
            alt="del"
            onClick={e => changeWindow("delpanel", panel.id)}
            title="Delete panel"
          />
        </li>
      </ul>
    );
  }
}

export default TaskHeaderSet;
