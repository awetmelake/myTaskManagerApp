import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

// components
import Task from "../Task/Task";
import AddTask from "../Task/AddTask";
import DelPanel from "./DelPanel";
import Toggle from "../Toggle/Toggle";

// mui
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// actions
import {
  createPanel,
  deletePanel,
  changePanelTitle,
  moveLeft,
  moveRight
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
    this.props.changePanelTitle(this.state.title, this.props.panel.id);
  };

  render() {
    const {
      panel,
      board,
      deletePanel,
      tasks,
      createTask,
      editMode,
      moveLeft,
      filter,
      moveRight
    } = this.props;
    const { editTitleMode, title } = this.state;
    return (
      <div
        className="panel white "
        style={editMode ? { flexGrow: 0 } : { flexGrow: 1 }}
      >
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
                  autoFocus
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

          {!editMode ? (
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
                      <ClickAwayListener onClickAway={toggle}>
                        <ul className="">
                          <li
                            onClick={e => {
                              this.toggleEdit();
                              toggle();
                            }}
                          >
                            Edit
                          </li>
                          {panel.index > 0 && (
                            <li onClick={e => moveLeft(panel.id, panel.index)}>
                              Move Left
                            </li>
                          )}
                          {panel.index < board.panels - 1 && (
                            <li onClick={e => moveRight(panel.id, panel.index)}>
                              Move Right
                            </li>
                          )}
                          <li onClick={this.toggleDelPanel}>Delete</li>
                        </ul>
                      </ClickAwayListener>
                    </div>
                  )}
                </div>
              )}
            </Toggle>
          )}
        </div>

        <div className="panel-tasks">
          {tasks.map(task => {
            if (panel.id === task.panel) {
              if (filter !== null) {
                if (task.color.includes(filter)) {
                  return <Task task={task} key={task.id} />;
                }
              } else {
                return <Task task={task} key={task.id} />;
              }
            }
          })}
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
  tasks: state.tasks.tasks,
  filter: state.tasks.filter
});

export default compose(
  connect(
    mapStateToProps,
    {
      createPanel,
      deletePanel,
      changePanelTitle,
      createTask,
      moveRight,
      moveLeft
    }
  )
)(Panel);
