import React, { Component } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel.js";
import Header from "./components/Header.js";

/*
TODO:
Pomodoro Timer
Possibly a way to draw and drop tasks from panel to panel??
Make button for adding tasks in TaskHeader
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "wake up",
          status: "DONE",
          focused: true,
          time: 0,

        },
        {
          id: 2,
          title: "take a walk",
          status: "DONE",
          focused: "false",
          time: 0,
        },
        {
          id: 3,
          title: "sleep",
          status: "TODO",
          focused: "false",
          time: 0,
        }
      ],
      panels: [
        "TODO",
        "DONE"
      ],
    };
  }
  //Create new panels
  createPanel = title => {
    this.setState({
      panels: [...this.state.panels, title],
    });
  };

  //Create new
  createTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  //Toggle focus
  setFocus = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        //map through task items=> return a new tasks array=> setState
        if (task.id === id) {
          task.focused = !task.focused;
        }
        return task;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Header name="TASKFLOW" />
        <TaskPanel
          createPanel={this.createPanel}
          tasks={this.state.tasks}
          panels={this.state.panels}
          setFocus={this.setFocus}
          createTask={this.createTask}
        />
      </div>
    );
  }
}

export default App;
