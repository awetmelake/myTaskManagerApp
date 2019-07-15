import React, { Component } from "react";
import TaskItemSet from "./TaskItemSet.js";
import ColorSelect from "./ColorSelect.js";
import Timer from "./Timer";

class TaskInfo extends Component {
  state = {
    editMode: false,
    title: this.props.task.title,
    description: this.props.task.description,
    completeBy: this.props.task.completeBy,
    color: this.props.task.color,
    id: this.props.task.id,
    timer: {
      time: 0,
      isRunning: 0,
      type: "none"
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  //background color
  getBg = style =>
    Object.assign({}, { backgroundColor: this.state.color }, style);

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
        color: this.props.task.color,
        completeBy: this.props.task.completeBy
      });
    }
  };

  toggleTimer = type => {
    this.setState({
      timer: {
        isRunning: !this.state.timer.isRunning,
        type: type
      }
    });
  };

  render() {
    const {
      delTask,
      task,
      panel,
      setTaskFocus,
      toggleDel,
      toggle,
      moveTask,
      changeWindow
    } = this.props;
    const { description, id, completeBy } = task;
    const { timer } = this.state;
    return (
      <div
        className="disappear-onclick-background"
        onClick={e =>
          e.target.className === "disappear-onclick-background" && toggle()
        }
      >
        <div
          style={this.getBg()}
          className="task-info"
          onClick={e => {
            if (
              this.state.editMode &&
              e.target.className !== "" &&
              e.target.className !== "btn"
            ) {
              this.toggleEdit();
            }
          }}
        >
        Title:
        <img
        onClick={toggle}
        className="exit-btn-image btn"
        src="./images/exit.png"
        />
        {timer.type !== "none" && <Timer type={timer.type} />}
          <>
            {this.state.editMode ? (
              <input
                autoFocus={true}
                autoComplete="off"
                onChange={this.handleChange}
                name="title"
                style={this.getBg()}
                value={this.state.title}
              />
            ) : (
              <p>{this.state.title}</p>
            )}
          </>
          <br />
          {(description.length > 0 || this.state.editMode) && (
            <>Description: </>
          )}
          <br />
          <>
            {this.state.editMode ? (
              <>
                <input
                  autoComplete="off"
                  onChange={this.handleChange}
                  name="description"
                  style={this.getBg({ fontSize: "20px" })}
                  value={this.state.description}
                />
              </>
            ) : (
              <p style={{ fontSize: "20px" }}>{this.state.description}</p>
            )}
            <br />
          </>
          {(completeBy.length > 0 || this.state.editMode) && <>Complete By: </>}
          <br />
          {this.state.editMode ? (
            <>
              <input
                autoComplete="off"
                onChange={this.handleChange}
                name="completeBy"
                style={this.getBg({ fontSize: "20px" })}
                value={this.state.completeBy}
              />
              <br />
              <br />
              <button
                className="btn"
                style={{ marginRight: "10px" }}
                name="save"
                onClick={this.handleSubmit}
              >
                Save
              </button>
              <button className="btn" name="cancel" onClick={this.handleSubmit}>
                Cancel
              </button>
            </>
          ) : (
            <p style={{ fontSize: "20px" }}>{this.state.completeBy}</p>
          )}
          <br />
          <br />
          {this.state.editMode && (
            <ColorSelect handleChange={this.handleChange} />
          )}
          {
            <TaskItemSet
              setTaskFocus={setTaskFocus}
              toggleEdit={this.toggleEdit}
              id={id}
              toggleDel={toggleDel}
              panel={panel}
              delTask={delTask}
              moveTask={moveTask}
              changeWindow={changeWindow}
              task={task}
            />
          }
        </div>
      </div>
    );
  }
}

export default TaskInfo;
