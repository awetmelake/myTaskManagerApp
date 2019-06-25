import React, { Component } from "react";
import AddTask from "./AddTask.js";
import DelTask from "./DelTask.js";
import DelPanel from "./DelPanel.js";

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
      delPanel,
      userPrompt,
      changeWindow,
      toggleDel
    } = this.props;
    return (
      <div
        onClick={e => {
          if (e.target.className === "disappear-onclick-background") {
            changeWindow("none", null);
            //clicking anywhere outside of current prompt changes window to none
          }
        }}
        className="disappear-onclick-background"
        style={this.getStyle()}
      >
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
        <DelPanel
          userPrompt={userPrompt}
          changeWindow={changeWindow}
          delPanel={delPanel}
        />
      </div>
    );
  }
}

export default UserPrompt;
