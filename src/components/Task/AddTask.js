// colored buttons

import React, { Component } from "react";

// components
import ColorSelect from "../ColorSelect";

// mui
import Dialog from "@material-ui/core/Dialog";

// styles
import "./Task.scss";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
    completeBy: "",
    color: "yellow",
    panel: this.props.panel.id,
    time: 0,
    visible: true
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.props.toggleVisibility(e);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      title: "",
      description: "",
      completeBy: "",
      color: "yellow",
      panel: this.props.panel.id,
      time: null
    });
  };
  render() {
    const { toggleVisibility, visibility } = this.props;
    return (
      <Dialog open={visibility} onBackdropClick={toggleVisibility}>
        <div className={` add-task ${this.state.color} `}>
          <form autoComplete="off">
            <h4 className="center">Create new task</h4>

            <div className="input-field">
              <label htmlFor="title" className="grey-text text-darken-3">
                title
              </label>
              <input name="title" type="text" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="description" className="grey-text text-darken-3">
                description
              </label>
              <input
                name="description"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <ColorSelect handleChange={this.handleChange} />
            <br />

            <div className="container center">
              <button className=" z-depth-0 btn darken-1 green" onClick={this.handleSubmit}>
                Save
              </button>
              <button className=" z-depth-0 btn darken-1 red" onClick={toggleVisibility}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

export default AddTask;
