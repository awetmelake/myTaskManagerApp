import React, { Component } from "react";
import { connect } from "react-redux";

// mui
import Dialog from "@material-ui/core/Dialog";

// actions
import { editTask, delTask } from "../../actions/taskActions";

// components
import ColorSelect from "../ColorSelect";
import DelTask from "./DelTask";

// styles
import "./Task.scss";

class TaskInfo extends Component {
  state = {
    editMode: false,
    title: this.props.task.title,
    description: this.props.task.description,
    color: this.props.task.color,
    id: this.props.task.id,
    panel: this.props.task.panel
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleEdit = e =>
    this.setState({
      title: this.props.task.title,
      description: this.props.task.description,
      color: this.props.task.color,
      editMode: !this.state.editMode
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTask(this.state);
    this.setState({
      editMode: false
    });
  };

  pad = num => {
    return ("0" + num).slice(-2);
  };

  timeFormat = secs => {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    minutes = minutes % 60;
    return `${minutes > 0 ? this.pad(minutes) + "m" : ""} ${this.pad(secs)}s`;
  };

  render() {
    const { task, visible, toggleVisibility, delTask } = this.props;

    return (
      <Dialog open={visible} onBackdropClick={toggleVisibility}>
        <div className={`card task-info ${this.state.color}`}>
          <div className="card-content">
            <div className="task-info-title">
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
                    name="title"
                    autoFocus
                    value={this.state.title}
                    style={{ fontSize: "20px" }}
                  />
                </div>
              )}
            </div>

            <div className="task-info-title">
              Description:
              {!this.state.editMode ? (
                <h5 style={{ fontSize: "1.3em" }} > {task.description}</h5>
              ) : (
                <div className="form-field">
                  <label htmlFor="panel-title"></label>
                  <input
                    onChange={this.handleChange}
                    id="panel-title"
                    type="text"
                    name="description"
                    value={this.state.description}
                    style={{ fontSize: "20px" }}
                  />
                </div>
              )}
            </div>

            <div className="task-info-title">
              {!this.state.editMode && task.time > 0 && (
                <div>
                  Time spent:
                  {" " + this.timeFormat(task.time)}
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
                type="submit"
                className="btn-small grey darken-1"
                onClick={this.handleSubmit}
              >
                save changes
              </button>
              <button
                onClick={this.toggleEdit}
                className="btn-small grey darken-1"
              >
                cancel
              </button>
            </div>
          )}
          <i
            className="material-icons pointer small task-info-edit-btn"
            onClick={this.toggleEdit}
            title="Edit Task"
          >
            edit
          </i>

          <DelTask task={task} delTask={delTask} />
        </div>
      </Dialog>
    );
  }
}

export default connect(
  null,
  { editTask, delTask }
)(TaskInfo);
