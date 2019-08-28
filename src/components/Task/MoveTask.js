import React, { Component } from "react";

class MoveTask extends Component {
  render() {
    const { panels, userPrompt, changeWindow, moveTask } = this.props;
    const { target } = userPrompt;
    return (
      <div className="disappear-onclick-background">
        <div className="prompt-window move-task animated flipInX">
          {panels.map(panel => (
            <p
              className="btn move-task-item"
              onClick={e => {
                moveTask(target, panel.id);
                changeWindow("none", {});
              }}
              key={panel.id}
            >
              {panel.title}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default MoveTask;
