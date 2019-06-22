import React, { Component } from "react";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
    focused: false,
    time: 0,
    panel: this.props.panel,
    color: "yellow"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addTask(this.state, this.props.userPrompt.target);
      this.setState({ title: "", description: "" }); //clear field
    }
    this.props.changeWindow("none", null);
  };

  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "addtask" ? "initial" : "none"
    };
  };

  render() {
    return (
      <form style={this.getStyle()} className="prompt-window">
        <h2>Add new task</h2>
        <br />
        <input name="title" placeholder="Title" onChange={this.handleChange} />
        <br />
        <br />
        <textarea
          name="description"
          onChange={this.handleChange}
          placeholder="Description (optional)"
        />
        <br />
        <label>Color </label>
        <input
          type="color"
          name="color"
          value="#ffff00"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="submit"
          style={{ marginTop: "5px" }}
          onClick={this.handleClick}
        />
      </form>
    );
  }
}

export default AddTask;
