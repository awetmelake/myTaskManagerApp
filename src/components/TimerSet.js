import React, { Component } from "react";
import Timer from "./Timer.js";

class TimerSet extends Component {
  state = {
    time: 0,
    isRunning: 0,
    type: "stopwatch"
  };

  render() {
    const { time, isRunning, type } = this.state;
    const { userPrompt } = this.props;
    return (
      <div className="prompt-window timer-set">
        <p className="btn">Start Stopwatch</p>
        <p className="btn">Start Pomodoro</p>
      </div>
    );
  }
}

export default TimerSet;
