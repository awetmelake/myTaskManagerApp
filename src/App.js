import React, { Component } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel.js";
import Header from "./components/Header.js";
//random id generator
const uuidv4 = require("uuid/v4");

/*
TODO:
Pomodoro Timer
Possibly a way to draw and drop tasks from panel to panel??

Problems:
panel title not showing on new panel creation
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delMode: false,
      tasks: [
        {
          id: uuidv4(),
          title: "wake up",
          description: "sdfsdf",
          panel: "TODO",
          focused: false,
          // time: 0,
          color: "yellow"
        }
      ],
      panels: [
        {
          title: "TODO",
          id: uuidv4()
        }
      ]
    };
  }

  //add and delete functions
  addPanel = panel => {
    panel.id = uuidv4();
    this.setState({
      panels: [...this.state.panels, panel]
    });
  };

  delPanel = id => {
    this.setState({
      panels: [...this.state.panel.filter(panel => panel.id !== id)]
    });
  };

  addTask = task => {
    task.id = uuidv4();
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  };

  delTask = () => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.focused === false)]
    });
  };

  //toggle functions
  setFocus = id => {
    if (this.state.delMode) {
      this.setState({
        //map through task items => return a new tasks array with toggled items
        tasks: this.state.tasks.map(task => {
          if (task.id === id) {
            task.focused = !task.focused;
          }
          return task;
        })
      });
    }
  };

  toggleDel = () => {
    this.setState({
      delMode: !this.state.delMode
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          name="TASKFLOW"
          addPanel={this.addPanel}
          delPanel={this.delPanel}
        />
        <TaskPanel
          tasks={this.state.tasks}
          panels={this.state.panels}
          toggleDel={this.toggleDel}
          setFocus={this.setFocus}
          addTask={this.addTask}
          delTask={this.delTask}
        />
      </div>
    );
  }
}

export default App;
