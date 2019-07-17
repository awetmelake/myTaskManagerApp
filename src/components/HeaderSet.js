import React, { Component } from "react";
import Toggle from "./Toggle.js";

class HeaderSet extends Component {
  render() {
    const { toggle, changeWindow, boards } = this.props;
    return (
      <div
        onClick={e =>
          e.target.className === "disappear-onclick-background" && toggle()
        }
        className="disappear-onclick-background"
      >
        <div className="header-set">
          <img
            alt="exit btn"
            onClick={toggle}
            className="exit-btn-image btn header-set-exit"
            src="./images/exit.png"
          />
          <p className="header-set-title">Menu</p>
          <p
            className="header-set-item btn"
            onClick={e => changeWindow("addpanel", {})}
          >
            Add Panel
          </p>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <p onClick={toggle} className="header-set-item btn">
                  Boards
                </p>
                {on &&
                  boards.map(board => (
                    <p key={board.id} className="header-set-item btn">
                      {board.name}
                    </p>
                  ))}
              </>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default HeaderSet;
