import React, { Component } from "react";

class TaskHeaderSet extends Component {
  render() {
    const { panel, toggleDel, changeWindow, toggle, toggleEdit } = this.props;
    return (
      <ul className="task-header-set animated flipInX" onClick={toggle}>
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
          <button
            className="btn task-setting-btn"
            id="add-task-btn"
            onClick={e => changeWindow("addtask", panel.id)}
            title="Add task"
          >
            +
          </button>
        </li>
        <li>
          <button
            className="btn task-setting-btn"
            id="del-task-btn"
            onClick={e => {
              changeWindow("deltask", panel.id);
              toggleDel(panel.id);
            }}
            title="Delete Task"
          >
            -
          </button>
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
