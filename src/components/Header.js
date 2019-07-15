import React, { Component } from "react";
import Toggle from "./Toggle.js";
import HeaderSet from "./HeaderSet.js";

class Header extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <img
                id="header-set-btn"
                className="btn"
                src="./images/Hamburger_icon.svg.png"
                onClick={toggle}
              />
              {on && <HeaderSet toggle={toggle}/>}
            </>
          )}
        </Toggle>
        <header>TASKFLOW</header>
      </div>
    );
  }
}

export default Header;
