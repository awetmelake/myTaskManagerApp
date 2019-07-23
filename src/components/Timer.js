import React, { Component } from "react";
import Toggle from "./Toggle.js";

class Timer extends Component {
  state = {
    time: this.props.task.timer.time
  };

  resetTimer = () => {
    this.setState({
      time: 0
    });
  };

  componentWillMount() {
    //start timer on mount
    this.myInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  render() {
    const { task, panel, setTimer, clockify } = this.props;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            <p onClick={toggle} className="timer-display btn">
              {clockify(this.state.time)}
            </p>
            {on && (
              <div className="timer-display btn timer-display-set">
                <button
                  onClick={this.resetTimer.bind(this)}
                  style={{ marginRight: "10px" }}
                  className="btn"
                >
                  reset
                </button>
                <button
                  onClick={e => {
                    toggle();
                    setTimer(task.id, panel.id, false, this.state.time);
                  }}
                  className="btn"
                >
                  stop
                </button>
              </div>
            )}
          </>
        )}
      </Toggle>
    );
  }
  componentWillUnmount() {
    const { task, panel, setTimer} = this.props;
    setTimer(task.id, panel.id, true, this.state.time);
    this.setState({
      time: this.props.task.timer.time
    });
  }
}

export default Timer;
