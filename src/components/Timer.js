import React, { Component } from "react";
import Toggle from "./Toggle.js";

class Timer extends Component {
  state = {
    time: 0
  };

  resetTimer = () => {
    this.setState({
      time: 0
    });
  };
  componentWillMount() {
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
                  onClick={e => this.resetTimer()}
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
    clearInterval(this.myInterval);
    this.setState({
      time: this.props.task.timer.time
    });
  }
}

export default Timer;
