import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import PropTypes from "prop-types";
// import AddTodo from './AddTodo.js'

class Tasks extends Component {
  render() {
    return (
      this.props.todos.map(todo => (
        <TaskItem key={todo.id} todo={todo} />
      ))
    )
  }
}

//PropTypes
Tasks.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Tasks;
