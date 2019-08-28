import React, { Component } from "react";
import { connect } from "react-redux";

// components
import Task from "../Task/Task";
import AddTask from "../Task/AddTask";
import DelPanel from "./DelPanel";

// actions
import {
  createPanel,
  deletePanel,
  changePanelTitle
} from "../../actions/panelActions";

import {createTask} from "../../actions/taskActions";

// styles
import "./Panel.scss";

class Panel extends Component {
  state = {
    showSet: false,
    editMode: false,
    title: "",
    showAddTask: false
  };

  toggleSet = () => {
    this.setState({
      showSet: !this.state.showSet
    });
  };

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  // toggleDelPanel = e => {
  //   if (e.target.className) {
  //     this.setState({
  //       showAddPanel: !this.state.showAddPanel
  //     });
  //   } else {
  //     this.setState({
  //       showAddPanel: !this.state.showAddPanel
  //     });
  //   }
  // };

  toggleAddTask = e => {
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
    this.props.changePanelTitle(
      this.state.title,
      this.props.panel.title,
      this.props.board.id
    );
  };

  render() {
    const { panel, board, deletePanel } = this.props;

    return (
      <div className="panel white " key={panel.id}>
        <div className="panel-header  grey lighten-2">
          <div className="panel-title">
            {!this.state.editMode ? (
              panel.title
            ) : (
              <form className="form-field" onSubmit={this.handleSubmit}>
                <label htmlFor="panel-title"></label>
                <input
                  onChange={this.handleChange}
                  id="panel-title"
                  type="text"
                  title="title"
                />
              </form>
            )}
          </div>

          <i
            className="material-icons add-task-btn"
            id="toggleAddTask"
            onClick={this.toggleAddTask}
          >
            add
          </i>
        </div>

        <div className="panel-tasks">
          {panel.tasks.map(task => (
            <Task task={task} key={task.title} deletePanel={deletePanel} />
          ))}
        </div>

        <DelPanel
          visibility={false}
          toggleVisibility={this.toggleDelPanel}
          board={board}
          panel={panel}
          deletePanel={deletePanel}
        />

        <AddTask
          visibility={this.state.showAddTask}
          toggleVisibility={this.toggleAddTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { createPanel, deletePanel, changePanelTitle }
)(Panel);
