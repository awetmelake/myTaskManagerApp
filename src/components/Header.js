import React, { Component } from "react";
import AddPanel from './AddPanel.js'
import Toggle from "./Toggle.js";

class Header extends Component {
  render() {
    return (
      <div>
        <header>{this.props.name}</header>
        <Toggle addPanel={this.props.addPanel}>
          {({ on, toggle }) => (
            <div>
              {on && (
                <AddPanel
                  toggle={toggle}
                  panel={this.props.panel}
                  addPanel={this.props.addPanel}
                />
              )}
              <p style={btnStyle} onClick={toggle}>
                +
              </p>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

const btnStyle = {
  float: "right",
  color: "green",
  marginRight: "30px",
  borderRadius: "100px",
  position: "relative",
  bottom: "65px",
  fontSize: "48px",
  fontWeight: "1000"
};
export default Header;
