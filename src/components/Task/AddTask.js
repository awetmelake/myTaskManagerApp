import React, { Component } from "react";

// import uuid from 'uuidv4';
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
    panel: this.props.panel.id
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.state)
  };

  render() {
    const { toggleVisibility, visibility} = this.props;
    return (
      <Dialog open={visibility} onBackdropClick={toggleVisibility}>
        <div className={` add-task ${this.state.color} `}>
          <form autoComplete="off">
            <h4 className="center">Add new task</h4>

            <div className="input-field">
              <label htmlFor="title" className="black-text">
                title
              </label>
              <input name="title" type="text" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="description" className="black-text">
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
              <button className="btn grey darken-1" onClick={this.handleSubmit}>Save</button>
              <button className="btn grey darken-1" onClick={toggleVisibility}>Cancel</button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

export default AddTask;
