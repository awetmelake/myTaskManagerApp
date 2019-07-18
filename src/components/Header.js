import React, { Component } from "react";
import Toggle from "./Toggle.js";
import HeaderSet from "./HeaderSet.js";

class Header extends Component {
  render() {
    const { boards, addPanel, changeWindow } = this.props;
    return (
      <header>
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
        <p className='header-title'>TASKFLOW</p>
      </header>
    );
  }
}

export default Header;
