import React, { Component } from "react";
// TODO: add trash can image and make it delete panel
class TaskHeaderSet extends Component {
  render() {
    const { panel, toggleDel, changeWindow } = this.props;
    return (
      <ul>
        <li>
          <p
            className="btn task-setting-btn"
            id="add-task-btn"
            onClick={changeWindow.bind(this, "addtask", panel.id)}
          >
            +
          </p>
        </li>
        <li>
          <p
            className="btn task-setting-btn"
            id="del-task-btn"
            onClick={e => {
              toggleDel(panel.id);
              changeWindow("deltask", panel.id);
            }}
          >
            -
          </p>
        </li>
        <li>
          <img
            href="https://www.iconbunny.com/icons/media/catalog/product/1/7/177.5-recycle-bin-icon-iconbunny.jpg"
            alt="del"
            onClick={changeWindow.bind(this, "delpanel", null)}
          />
        </li>
      </ul>
    );
  }
}

export default TaskHeaderSet;
