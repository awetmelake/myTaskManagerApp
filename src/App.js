import React, { Component } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel.js";
import Header from "./components/Header.js";

/*
TODO:
Pomodoro Timer
Possibly a way to draw and drop tasks from panel to panel??

*/
const uuidv4 = require("uuid/v4");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: uuidv4(),
          title: "wake up",
          discription: "sdfsdf",
          panel: "DONE",
          focused: false,
          time: 0,
          color: "yellow"
        },
        {
          id: uuidv4(),
          title: "take a walk",
          discription: "sdfsdfsdf",
          panel: "DONE",
          focused: false,
          time: 0,
          color: "lightblue"
        },
        {
          id: uuidv4(),
          title: "sleep",
          discription: "dasdas",
          panel: "TODO",
          focused: false,
          time: 0,
          color: "yellow"
        }
      ],
      panels: ["TODO", "DONE"]
    };
  }

  addPanel = panel => {
    this.setState({
      panels: [...this.state.panels, panel]
    });
  };

  delPanel = panel => {
    this.setState({
      panels: [...this.state.panel.filter(title => panel !== title)]
    });
  };

  addTask = task => {
    task.id = uuidv4();
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  };

  delTask = id => {
    this.setState({
      panels: [...this.state.tasks.filter(task => task.id !== id)]
    });
  };

  //Toggle task item focus
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
        <Header
          name="TASKFLOW"
          addPanel={this.addPanel}
          delPanel={this.delPanel}
        />
        <TaskPanel
          tasks={this.state.tasks}
          panels={this.state.panels}
          setFocus={this.setFocus}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
