import React, { Component } from "react";

class DelTask extends Component {
  state = {
    on: false
  };
  handleClick = e => {
    e.preventDefault();
    this.props.delTask(this.props.userPrompt.target);
    this.props.toggleDel(this.props.userPrompt.target);
    this.props.changeWindow("none", null);
  };

  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "deltask" ? "initial" : "none"
    };
  };

  render() {
    return (
      <form style={this.getStyle()} className="prompt-window">
        <label>Select Tasks to Delete</label>
        <br />
        <br />
        <input type="submit" onClick={this.handleClick} />
      </form>
    );
  }
}

export default DelTask;
