import React, { Component } from "react";

class NavSet extends Component {
  render() {
    const { toggle, changeWindow, boards } = this.props;
    return (
      <div
        onClick={e =>
          e.target.className === "disappear-onclick-background" && toggle()
        }
        className="disappear-onclick-background"
      >
        <div className="header-set animated fadeInRight ">
          <img
            alt="exit btn"
            onClick={toggle}
            className="exit-btn-image btn header-set-exit"
            src="./images/exit.png"
          />
          <p className="header-set-title">Menu</p>
          <p
            className="header-set-item btn"
            onClick={e => {
              toggle();
              changeWindow("addpanel", {});
            }}
          >
            Add Panel
          </p>
          <p
            className="header-set-item btn"
            onClick={e => {
              toggle();
              changeWindow("timerset", {});
            }}
          >
            Timer
          </p>
        </div>
      </div>
    );
  }
}

export default NavSet;
