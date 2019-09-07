import React, { Component } from "react";
import { connect } from "react-redux";

// actions
import { setTime } from "../../actions/taskActions";
import { stopTimer } from "../../actions/timerActions";

class Timer extends Component {
  state = {
    pomodoroCount: 1500,
    stopwatchCount: 0,
    break: false,
    elapsedTime: 0
  };

  startPomodoro = () => {
    this.pomodoro = setInterval(() => {
      if (this.state.pomodoroCount === 0 && !this.state.break) {
        this.startBreak();
      }
      this.setState({
        pomodoroCount: this.state.pomodoroCount - 1,
        elapsedTime: this.state.elapsedTime + 1
      });
    }, 1000);
  };

  startBreak = () => {
    this.setState({
      break: true,
      pomodoroCount: 300
    });
  };

  startSession = () => {
    this.setState({
      break: false
    });
  };

  startStopwatch = () => {
    this.stopwatch = setInterval(() => {
      this.setState({
        stopwatchCount: this.state.stopwatchCount + 1,
        elapsedTime: this.state.elapsedTime + 1
      });
    }, 1000);
  };

  stopPomodoro = () => {
    clearInterval(this.pomodoro);
  };

  stopStopwatch = () => {
    clearInterval(this.stopwatch);
  };

  pad = num => {
    return ("0" + num).slice(-2);
  };

  timeFormat = secs => {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  };

  render() {
    const { timer, stopTimer } = this.props;
    const { type } = timer;

    return (
      <div className="timer grey lighten-2">
        <button className="btn red" onClick={e => stopTimer(this.state.elapsedTime)}></button>
        <div style={{ float: "right" }}>
          {type === "pomodoro" ? (
            <p>{this.timeFormat(this.state.pomodoroCount)}</p>
          ) : (
            <p>{this.timeFormat(this.state.stopwatchCount)}</p>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.timer.type === "pomodoro" && this.startPomodoro();
    this.props.timer.type === "stopwatch" && this.startStopwatch();
  }

  componentWillUnmount() {
    this.stopPomodoro();
    this.stopStopwatch();
  }
}

const mapStateToProps = state => ({
  timer: state.timer
});

export default connect(
  mapStateToProps,
  { setTime, stopTimer }
)(Timer);
