import React, { Component } from "react";
import AddTask from "./AddTask.js";
import DelTask from "./DelTask.js";
import AddPanel from "./AddPanel.js";

class UserPrompt extends Component {
  getStyle = () => {
    if (this.props.userPrompt.type === "none") {
      return { display: "none" };
    }
  };
  render() {
    const {
      addTask,
      delTask,
      addPanel,
      userPrompt,
      changeWindow,
      toggleDel
    } = this.props;
    return (
      <div style={this.getStyle()} className="prompt-window">
        <AddTask
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          addTask={addTask}
        />
        <DelTask
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          delTask={delTask}
          toggleDel={toggleDel}
        />
        <AddPanel
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          addPanel={addPanel}
        />
      </div>
    );
  }
}

export default UserPrompt;
