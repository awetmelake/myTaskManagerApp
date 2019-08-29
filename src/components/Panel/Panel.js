import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// components
import Task from "../Task/Task";
import AddTask from "../Task/AddTask";
import DelPanel from "./DelPanel";
import Toggle from "../Toggle/Toggle";

// actions
import {
  createPanel,
  deletePanel,
  changePanelTitle
} from "../../actions/panelActions";

import { createTask } from "../../actions/taskActions";

// styles
import "./Panel.scss";

class Panel extends Component {
  state = {
    showSet: false,
    editTitleMode: false,
    title: this.props.panel.title,
    id: this.props.panel.id,
    showAddTask: false,
    showDelPanel: false
  };

  toggleDelPanel = e => {
    this.setState({
      showDelPanel: !this.state.showDelPanel
    });
  };

  toggleEdit = e => {
    this.setState({
      editTitleMode: !this.state.editTitleMode
    });
  };

  toggleAddTask = e => {
    e.preventDefault();
    if (e.target.id === "toggleAddTask") {
      this.setState({
        showAddTask: true
      });
    } else {
      this.setState({
        showAddTask: false
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.title]: e.target.value
    });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleEdit();
    this.props.changePanelTitle(this.state.title);
  };

  render() {
    const {
      panel,
      board,
      deletePanel,
      tasks,
      createTask,
      updateTasks,
      editBoardMode
    } = this.props;
    const { editTitleMode, title } = this.state;
    return (
      <div className="panel white ">
        <div className="panel-header  grey lighten-2">
          <div className="panel-title">
            {!editTitleMode ? (
              panel.title
            ) : (
              <form className="form-field" onSubmit={this.handleSubmit}>
                <label htmlFor="panel-title"></label>
                <input
                  onChange={this.handleChange}
                  id="panel-title"
                  type="text"
                  title="title"
                  value={title}
                  className="center"
                  style={{ width: "80%", fontSize: "20px" }}
                />
                <br />
                <div className="container center">
                  <button className="btn-small" onClick={this.handleSubmit}>
                    Save
                  </button>
                  <button className="btn-small" onClick={this.toggleEdit}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {!editBoardMode ? (
            <i
              className="material-icons add-task-btn"
              id="toggleAddTask"
              onClick={this.toggleAddTask}
              title="Create new panel"
            >
              add
            </i>
          ) : (
            <Toggle>
              {({ on, toggle }) => (
                <div>
                  <i
                    className="material-icons add-task-btn black-text"
                    id="toggleAddTask"
                    title="See more options"
                    onClick={toggle}
                  >
                    more
                  </i>
                  {on && (
                    <div className="card white panel-settings">
                      <ul className="">
                        <li
                          onClick={e => {
                            this.toggleEdit();
                            toggle();
                          }}
                        >
                          Edit
                        </li>
                        <li>Move Left</li>
                        <li>Move Right</li>
                        <li onClick={this.toggleDelPanel}>Delete</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </Toggle>
          )}
        </div>

        <div className="panel-tasks">
          {tasks.map(
            task =>
              panel.id === task.panel && (
                <Task task={task} key={task.id} deletePanel={deletePanel} />
              )
          )}
        </div>

        <DelPanel
          visibility={this.state.showDelPanel}
          toggleVisibility={this.toggleDelPanel}
          board={board}
          panel={panel}
          deletePanel={deletePanel}
        />

        <AddTask
          panel={panel}
          createTask={createTask}
          visibility={this.state.showAddTask}
          toggleVisibility={this.toggleAddTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  boards: state.boards.boards,
  tasks: state.tasks.tasks
});

export default compose(
  connect(
    mapStateToProps,
    { createPanel, deletePanel, changePanelTitle, createTask }
  )
)(Panel);
