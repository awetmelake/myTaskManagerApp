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
              <p className='header-add-panel-btn' onClick={toggle}>
                +
              </p>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default Header;
