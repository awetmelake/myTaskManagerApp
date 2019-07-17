import React, { Component } from "react";
import Toggle from "./Toggle.js";
import HeaderSet from "./HeaderSet.js";

class Header extends Component {
  render() {
    const { boards, addPanel, changeWindow } = this.props;
    return (
      <div>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <img
                alt="header nav button"
                id="header-set-btn"
                className="btn"
                src="./images/Hamburger_icon.svg.png"
                onClick={toggle}
              />
              {on && (
                <HeaderSet
                  changeWindow={changeWindow}
                  addPanel={addPanel}
                  boards={boards}
                  toggle={toggle}
                />
              )}
            </>
          )}
        </Toggle>
        <header>TASKFLOW</header>
        <div>
          <p>{}</p>
        </div>
      </div>
    );
  }
}

export default Header;
