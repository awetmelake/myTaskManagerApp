import React, { Component } from "react";
import { connect } from "react-redux";

// import TaskItemSet from "./TaskItemSet.js";
// import ColorSelect from "./ColorSelect.js";
// import Timer from "./Timer";

// mui
import Dialog from "@material-ui/core/Dialog";

// actions
import { editTask, delTask } from "../../actions/taskActions";

// components
import ColorSelect from "../ColorSelect";
import Toggle from "../Toggle/Toggle";

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

  toggleEdit = e => this.setState({ editMode: !this.state.editMode });

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTask(this.state);
    this.toggleEdit();
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
                <h5> {task.description}</h5>
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
                className="btn-small grey darken-1 "
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

          <Toggle>
            {({ on, toggle }) => (
              <div className="container">
                <i
                  className="material-icons pointer small task-info-del-btn"
                  onClick={toggle}
                  title="Delete Task"
                >
                  delete
                </i>
                {on && (
                  <div className="task-info-del-confirm card white red-text">
                    <p>Delete task?</p>
                    <div className="card-footer">
                      <button className="btn-small" onClick={e => delTask(task.id)}>
                        Yes
                      </button>
                      <button className="btn-small" onClick={toggle}>
                        No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Toggle>
        </div>
      </Dialog>
    );
  }
}

export default connect(
  null,
  { editTask, delTask }
)(TaskInfo);
