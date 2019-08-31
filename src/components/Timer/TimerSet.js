import React, { Component } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Toggle from "../Toggle";

class TimerSet extends Component {
  render() {
    return (
      <Toggle>
        <ClickAwayListener onClickAway={toggle}>
          <div className="card grey darken">
            <div className="card-title">
              <div className="card-footer">
                <button className="btn">Start</button>
                <button className="btn">Stop</button>
              </div>
            </div>
          </div>
          -2
        </ClickAwayListener>
      </Toggle>
    );
  }
}

export default TimerSet;
