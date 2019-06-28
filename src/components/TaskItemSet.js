import React, { Component } from "react";

class TaskItemSet extends Component {
  state = {
    editMode: false
  };s
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    if(this.state.editMode){
      //turn text to inputs
    }
  };
  render() {
    const { delTask, id, panel, setTaskFocus, toggleDel } = this.props;
    return (
      <ul className="task-item-set btn">
        <li onClick={this.toggleEdit}>edit</li>
        <li>timer</li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <li
          onClick={e => {
            toggleDel(panel.id);
            setTaskFocus(id, panel.id);
            delTask(panel.id);
            toggleDel(panel.id);
          }}
        >
          delete
        </li>
      </ul>
    );
  }
}

export default TaskItemSet;
