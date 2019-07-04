import React, { Component } from "react";
import TaskItemSet from "./TaskItemSet.js";

class TaskInfo extends Component {
  state = {
    editMode: false,
    title: this.props.task.title,
    description: this.props.task.description,
    color: this.props.task.color,
    id: this.props.task.id
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  getStyle = () => ({
    backgroundColor: this.props.task.color,
    border: "none",
    borderBottom: "1px solid black"
  });

  handleSubmit = e => {
    const { editTask, task, panel } = this.props;
    this.toggleEdit();
    if (e.target.name === "save") {
      editTask(this.state, task.id, panel.id);
    } else {
      //reset state
      this.setState({
        title: this.props.task.title,
        description: this.props.task.description,
        color: this.props.task.color
      });
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      delTask,
      task,
      panel,
      setTaskFocus,
      toggleDel,
      toggle
    } = this.props;

    const { description, id } = task;

    return (
      <div
        className="disappear-onclick-background"
        onClick={e =>
          e.target.className === "disappear-onclick-background" && toggle()
        }
      >
        <div style={this.getStyle()} className="task-info">
          Title:
          <div>
            {this.state.editMode ? (
              <input
                onChange={this.handleChange}
                name="title"
                style={this.getStyle()}
                value={this.state.title}
              />
            ) : (
              <p>{this.state.title}</p>
            )}
          </div>
          {description.length > 0 && <>Description: </>}
          <div>
            {this.state.editMode ? (
              <>
                <input
                  onChange={this.handleChange}
                  name="description"
                  style={this.getStyle()}
                  value={this.state.description}
                />
                <br />
                <br />
                <button
                  style={{ marginRight: "10px" }}
                  name="save"
                  onClick={this.handleSubmit}
                >
                  save
                </button>
                <button name="cancel" onClick={this.handleSubmit}>
                  cancel
                </button>
              </>
            ) : (
              <p>{this.state.description}</p>
            )}
          </div>
          <>
            <TaskItemSet
              setTaskFocus={setTaskFocus}
              toggleEdit={this.toggleEdit}
              id={id}
              toggleDel={toggleDel}
              panel={panel}
              delTask={delTask}
            />
          </>
        </div>
      </div>
    );
  }
}

export default TaskInfo;
