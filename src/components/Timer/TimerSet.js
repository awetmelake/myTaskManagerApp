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
  toggleSelectMode
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
      toggleSelectMode
    } = this.props;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <>
            <a title="Timer" className="material-icons" onClick={toggle}>
              access_time
            </a>

            {on && (
              <Dialog open={on} onBackdropClick={toggle}>
                <div className="card grey darken-3">
                  <i
                    className="material-icons right pointer close-icon"
                    onClick={toggle}
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
                          toggle();
                        }}
                        className="pointer"
                      >
                        {timer.target
                          ? tasks.filter(
                              task => task.id === timer.target
                            )[0].title
                          : "No selected task"}
                      </p>
                    </div>
                  </div>

                  <div
                    className="card-action"
                    style={{ display: "flex", justifyContent: "space-around " }}
                  >
                    <button
                      className="btn green"
                      onClick={e => {
                        startTimer();
                        toggle();
                      }}
                      disabled={timer.isRunning}
                    >
                      Start
                    </button>
                    <button
                      className="btn red"
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
        )}
      </Toggle>
    );
  }
}

const mapStateToProps = state => ({
  timer: state.timer,
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { startTimer, setTimerTarget, stopTimer, setTimerType, toggleSelectMode }
)(TimerSet);
