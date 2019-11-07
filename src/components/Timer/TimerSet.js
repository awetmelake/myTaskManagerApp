// removed depth on buttons
import React, { Component } from "react";
import { connect } from "react-redux";

// mui
import Dialog from "@material-ui/core/Dialog";
import Select from "@material-ui/core/Select";

// components
import Toggle from "../Toggle/Toggle";

// actions
import {
  startTimer,
  setTimerTarget,
  stopTimer,
  setTimerType,
  toggleSelectMode,
  toggleTimerSet
} from "../../actions/timerActions";

class TimerSet extends Component {
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      timer,
      startTimer,
      setTimerTarget,
      stopTimer,
      setTimerType,
      tasks,
      toggleSelectMode,
      toggleTimerSet,
      showTimer
    } = this.props;
    return (
      <>
        <a
          title="Timer"
          className="material-icons grey-text text-darken-4"
          onClick={toggleTimerSet}
        >
          access_time
        </a>

        {showTimer && (
          <Dialog open={showTimer} onBackdropClick={toggleTimerSet}>
            <div className="card grey darken-3">
              <i
                className="material-icons right pointer close-icon"
                onClick={toggleTimerSet}
              >
                close
              </i>
              <div className="card-content">
                <div className="card-title center white-text ">
                  Timer settings
                </div>
                <br />
                <form className="center  white-text">
                  <input
                    className={`btn-small white-text ${
                      timer.type === "stopwatch" ? "blue" : "btn-flat"
                    }`}
                    value="stopwatch"
                    type="button"
                    name="type"
                    onClick={e => setTimerType("stopwatch")}
                  />
                  <input
                    className={`btn-small white-text ${
                      timer.type === "pomodoro" ? "blue" : "btn-flat"
                    }`}
                    value="pomodoro"
                    type="button"
                    name="type"
                    onClick={e => setTimerType("pomodoro")}
                  />
                </form>
                <br />
                <div className="white-text center">
                  <p
                    onClick={e => {
                      toggleSelectMode();
                      toggleTimerSet();
                    }}
                    className="pointer"
                  >
                    <i>
                      {timer.target
                        ? tasks.filter(task => task.id === timer.target)[0]
                            .title
                        : "No selected task"}
                    </i>
                  </p>
                </div>
              </div>

              <div
                className="card-action"
                style={{ display: "flex", justifyContent: "space-around " }}
              >
                <button
                  className="btn green  z-depth-0"
                  onClick={e => {
                    startTimer();
                    toggleTimerSet();
                  }}
                  disabled={timer.isRunning}
                >
                  Start
                </button>
                <button
                  className="btn red  z-depth-0"
                  onClick={e => {
                    stopTimer();
                  }}
                  disabled={!timer.isRunning}
                >
                  Stop
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  timer: state.timer,
  tasks: state.tasks.tasks,
  showTimer: state.timer.isVisible
});

export default connect(
  mapStateToProps,
  {
    startTimer,
    setTimerTarget,
    stopTimer,
    setTimerType,
    toggleSelectMode,
    toggleTimerSet
  }
)(TimerSet);
