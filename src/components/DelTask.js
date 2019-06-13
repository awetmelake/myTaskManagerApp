import React, { Component } from "react";

class DelTask extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.delTask();
    this.props.toggle();
    this.props.toggleDel();
  };
  render() {
    const { delTask } = this.props;
    return (
      <form className="prompt-window">
        <label>Select Tasks to Delete</label>
        <br />
        <button onClick={this.handleClick}>OK</button>
      </form>
    );
  }
}

export default DelTask;
