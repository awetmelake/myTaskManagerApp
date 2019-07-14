import React, { Component } from "react";
import ColorSelect from "./ColorSelect";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
    completeBy: "",
    focused: false,
    panel: this.props.panel,
    color: "yellow"
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addTask(this.state, this.props.userPrompt.target);
    }
    this.props.changeWindow("none", {});
  };

  render() {
    const { type } = this.props.userPrompt;
    return (
      <div className="disappear-onclick-background">
        <form
          style={{ backgroundColor: this.state.color }}
          autoComplete="off"
          className="prompt-window"
        >
          <h2>Add new task</h2>
          <br />
          <input
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description (optional)"
          />
          <br />
          <input
            type="submit"
            className="btn"
            style={{ marginTop: "5px" }}
            onClick={this.handleClick}
          />
          <br />
          <br />
          <ColorSelect handleChange={this.handleChange}/>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    //reset state
    this.setState({ title: "", description: "", color: "yellow" });
  }
}

export default AddTask;
