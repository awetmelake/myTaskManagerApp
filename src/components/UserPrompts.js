import React, { Component } from "react";
import AddTask from "./AddTask.js";
import DelTask from "./DelTask.js";
import DelPanel from "./DelPanel.js";

class UserPrompt extends Component {
  render() {
    const {
      addTask,
      delTask,
      delPanel,
      userPrompt,
      changeWindow,
      toggleDel
    } = this.props;
    return (
      <div
        onClick={e => {
          //add class to child components to make them disappear on background click
          if (e.target.className === "disappear-onclick-background") {
            changeWindow("none", null);
          }
        }}
      >
        <AddTask
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          addTask={addTask}
        />
        <DelPanel
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          delPanel={delPanel}
        />
        <DelTask
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          delTask={delTask}
          toggleDel={toggleDel}
        />

      </div>
    );
  }
}

export default UserPrompt;
