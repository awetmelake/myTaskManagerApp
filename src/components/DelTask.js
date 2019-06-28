import React, { Component } from "react";

class DelTask extends Component {
  handleClick = e => {
    e.preventDefault();
    if (e.target.title === 'delete') {
      this.props.delTask(this.props.userPrompt.target);
    }
    this.props.toggleDel(this.props.userPrompt.target);
    this.props.changeWindow("none", {});
  };

  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "deltask" ? "initial" : "none"
    };
  };

  render() {
    const { type } = this.props.userPrompt;
    return (
      <div>
      {(type == 'deltask') && (<form style={this.getStyle()} className="prompt-window">
        <label>Select Tasks to Delete</label>
        <br />
        <br />
        <button title='delete' onClick={this.handleClick} style={{ marginRight: "10px" }}>
          Delete
        </button>
        <button title='cancel' onClick={this.handleClick}>Cancel</button>
      </form>)}
      </div>
    );
  }
}

export default DelTask;
