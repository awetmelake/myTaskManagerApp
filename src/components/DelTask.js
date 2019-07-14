import React, { Component } from "react";

class DelTask extends Component {
  handleClick = e => {
    e.preventDefault();
    if (e.target.title === "delete") {
      this.props.delFocused(this.props.userPrompt.target);
    }
    this.props.toggleDel(this.props.userPrompt.target);
    this.props.changeWindow("none", {});
  };

  render() {
    return (
      <form className="prompt-window">
        <label>Select Tasks to Delete</label>
        <br />
        <br />
        <button
          title="delete"
          className="btn"
          onClick={this.handleClick}
          style={{ marginRight: "10px" }}
        >
          Delete
        </button>
        <button className="btn" title="cancel" onClick={this.handleClick}>
          Cancel
        </button>
      </form>
    );
  }
}

export default DelTask;
