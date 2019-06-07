import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>{this.props.name}</header>
      </div>
    );
  }
}

export default Header;
