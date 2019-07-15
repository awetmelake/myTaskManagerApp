import React, { Component } from "react";
import Toggle from "./Toggle.js";
import TaskHeaderSet from "./TaskHeaderSet";

class TaskHeader extends Component {
  state = {
    editMode: false,
    title: this.props.panel.title
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    this.toggleEdit();
    if (e.target.name === "save") {
      this.props.editPanelTitle(this.state.title, this.props.panel.id);
    } else {
      //reset title
      this.setState({
        title: this.props.panel.title
      });
    }
  };

  render() {
    const { panel, toggleDel, changeWindow } = this.props;
    return (
      <div className="task-header">
        {this.state.editMode ? (
          <>
            <input
              autoComplete="off"
              autoFocus={true}
              className="task-header-title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                textAlign: "center"
              }}
            />
            <br />
            <div style={{ margin: "0 auto" }}>
              <button
                className="btn"
                style={{ marginRight: "10px" }}
                name="save"
                onClick={this.handleSubmit}
              >
                save
              </button>
              <button className="btn" name="cancel" onClick={this.handleSubmit}>
                cancel
              </button>
            </div>
          </>
        ) : (
          <p className="task-header-title">{this.state.title}</p>
        )}
        <div className="task-header-setting">
          <Toggle>
            {({ on, toggle }) => (
              <>
                <p className="btn task-header-setting-btn" onClick={toggle}>
                  ...
                </p>
                {on && !this.state.editMode && (
                  <TaskHeaderSet
                    toggleEdit={this.toggleEdit}
                    changeWindow={changeWindow}
                    toggle={toggle}
                    panel={panel}
                    toggleDel={toggleDel}
                  />
                )}
              </>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default TaskHeader;
