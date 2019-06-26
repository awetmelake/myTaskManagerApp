import React, { Component } from "react";

class DelTask extends Component {
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
        <button onClick={this.handleClick} style={{ marginRight: "10px" }}>
          Delete
        </button>
        <button onClick={this.handleClick}>Cancel</button>
      </form>
    );
  }
}

export default DelTask;
