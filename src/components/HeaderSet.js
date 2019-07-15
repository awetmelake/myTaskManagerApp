import React, { Component } from "react";

class HeaderSet extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <div
        onClick={e =>
          e.target.className === "disappear-onclick-background" && toggle()
        }
        className="disappear-onclick-background"
      >
        <div className="header-set">
          <img
            onClick={toggle}
            className="exit-btn-image btn header-set-exit"
            src="./images/exit.png"
          />
          <p className="header-set-title">Menu</p>
        </div>
      </div>
    );
  }
}

export default HeaderSet;
