import React, { Component } from "react";
import AddTask from "./AddTask.js";
import DelTask from "./DelTask.js";
import DelPanel from "./DelPanel.js";
import MoveTask from "./MoveTask.js";
import TimerSet from "./TimerSet.js";

/*class created to hold components that need a disappear on click background, also moves these components closer to app level state for easier editing */
class UserPrompt extends Component {
  render() {
    const {
      addTask,
      delFocused,
      delPanel,
      userPrompt,
      changeWindow,
      toggleDel,
      moveTask,
      panels
    } = this.props;
    const { type, target } = userPrompt;
    return (
      <div
        onClick={e =>
          e.target.className === "disappear-onclick-background" &&
          changeWindow("none", {})
        }
      >
        {type === "addtask" && (
          <AddTask
            userPrompt={userPrompt}
            changeWindow={changeWindow}
            addTask={addTask}
          />
        )}
        {type === "delpanel" && (
          <DelPanel
            userPrompt={userPrompt}
            changeWindow={changeWindow}
            delPanel={delPanel}
          />
        )}
        {type === "deltask" && (
          <DelTask
            userPrompt={userPrompt}
            changeWindow={changeWindow}
            delFocused={delFocused}
            toggleDel={toggleDel}
          />
        )}
        {type === "moveTask" && (
          //movetask is here because it needs the whole panel array to display panels to move to
          <MoveTask
            panels={panels}
            userPrompt={userPrompt}
            changeWindow={changeWindow}
            moveTask={moveTask}
          />
        )}
      </div>
    );
  }
}

export default UserPrompt;
