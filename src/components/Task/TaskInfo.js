import React, { Component } from "react";
// import TaskItemSet from "./TaskItemSet.js";
// import ColorSelect from "./ColorSelect.js";
// import Timer from "./Timer";

// mui
import Dialog from "@material-ui/core/Dialog";

// components
import ColorSelect from "../ColorSelect";

// styles
import "./Task.scss";

class TaskInfo extends Component {
  state = {
    editMode: false,
    title: this.props.task.title,
    description: this.props.task.description,
    color: this.props.task.color
  };

  handleChange = e => this.setState({ [e.target.title]: e.target.value });

  toggleEdit = e => this.setState({ editMode: !this.state.editMode });

  handleSubmit = e => {
    e.preventDefault();
    this.toggleEdit();
    console.log(this.state);
  };

  render() {
    const { task, visible, toggleVisibility } = this.props;

    return (
      <Dialog open={visible} onBackdropClick={toggleVisibility}>
        <div className={`card task-info ${task.color}`}>
          <div className="card-content">
            <div
              className="task-info-title"
              onClick={e =>
                this.setState({
                  editMode: true
                })
              }
            >
              Title:
              {!this.state.editMode ? (
                <h5> {task.title}</h5>
              ) : (
                <div className="form-field" onSubmit={this.handleSubmit}>
                  <label htmlFor="panel-title"></label>
                  <input
                    onChange={this.handleChange}
                    id="panel-title"
                    type="text"
                    title="title"
                    value={this.state.title}
                    autoFocus
                    style={{ fontSize: "20px" }}
                  />
                </div>
              )}
            </div>

            <div className="task-info-title">
              Description:
              {!this.state.editMode ? (
                <h5> {task.description}</h5>
              ) : (
                <div className="form-field" onSubmit={this.handleSubmit}>
                  <label htmlFor="panel-title"></label>
                  <input
                    onChange={this.handleChange}
                    id="panel-title"
                    type="text"
                    title="description"
                    value={this.state.description}
                    style={{ fontSize: "20px" }}
                  />
                </div>
              )}
            </div>
          </div>

          {this.state.editMode && (
            <ColorSelect handleChange={this.handleChange} />
          )}

          {this.state.editMode && (
            <div className="center">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn-small grey darken-1 "
              >
                save changes
              </button>
              <button
                onClick={this.toggleEdit}
                type="submit"
                className="btn-small grey darken-1 "
              >
                cancel
              </button>
            </div>
          )}
        </div>
      </Dialog>
    );
  }
}

export default TaskInfo;
