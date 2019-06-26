import React, { Component } from "react";
// TODO: add trash can image and make it delete panel
class TaskHeaderSet extends Component {
  render() {
    const { panel, toggleDel, changeWindow, toggle } = this.props;
    return (
      <ul onClick={e => {toggle()}}>
        <li>
          <p
            className="btn task-setting-btn"
            id="add-task-btn"
            onClick={changeWindow.bind(this, "addtask", panel.id)}
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
            src="https://www.iconbunny.com/icons/media/catalog/product/1/7/177.5-recycle-bin-icon-iconbunny.jpg"
            alt="del"
            onClick={changeWindow.bind(this, "delpanel", panel.id)}
            title="Delete panel"
          />
        </li>
      </ul>
    );
  }
}

export default TaskHeaderSet;
