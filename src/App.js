import React, { Component } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel.js";
import Header from "./components/Header.js";
import UserPrompt from "./components/UserPrompts.js";
//random id generator
const uuidv4 = require("uuid/v4");

/*
TODO:
Pomodoro Timer
Header menu nav
Edit title on click functionality
toggle navs disappear when clicked off 
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [
        {
          title: "TODO",
          id: uuidv4(),
          delMode: false,
          tasks: [
            {
              id: uuidv4(),
              title: "wake up",
              description: "sdfsdf",
              panel: "TODO",
              focused: false,
              color: "yellow"
            }
          ]
        },
        {
          title: "DONE",
          id: uuidv4(),
          delMode: false,
          tasks: [
            {
              id: uuidv4(),
              title: "sleep",
              description: "go to bed at 10",
              panel: "Done",
              focused: false,
              color: "yellow"
            }
          ]
        }
      ],
      userPrompt: {
        type: "none",
        target: null
      }
    };
  }

  //add and delete functions//
  //pass in new panel object
  addPanel = panel => {
    panel.id = uuidv4();
    panel.delMode = false;
    this.setState({
      panels: [...this.state.panels, panel]
    });
  };

  delPanel = panelId => {
    this.setState({
      panels: this.state.panels.filter(panel => panel.id !== panelId)
    });
  };

  //pass in task object and panel id
  addTask = (task, panelId) => {
    task.id = uuidv4();
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.tasks = [...panel.tasks, task];
        }
        return panel;
      })
    });
  };

  delTask = panelId => {
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.tasks = panel.tasks.filter(task => task.focused === false);
        }
        return panel;
      })
    });
  };

  //toggle functions//
  setTaskFocus = (taskId, panelId) => {
    this.setState({
      //map through panel task items => return a new tasks array with toggled items
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId && panel.delMode) {
          panel.tasks.map(task => {
            if (task.id === taskId) {
              task.focused = !task.focused;
            }
            return task;
          });
        }
        return panel;
      })
    });
  };

  toggleDel = panelId => {
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.delMode = !panel.delMode;
        }
        return panel;
      })
    });
  };

  //change prompt window
  changeWindow = (type, target) => {
    if (target !== this.state.userPrompt.target) {
      this.setState({ userPrompt: { type: type, target: target } });
    } else {
      this.setState({ userPrompt: { type: "none" } });
    }
  };

  render() {
    return (
      <div className="App">
        <Header name="TASKFLOW" addPanel={this.addPanel} />
        <TaskPanel
          panels={this.state.panels}
          changeWindow={this.changeWindow}
          toggleDel={this.toggleDel}
          setTaskFocus={this.setTaskFocus}
          delPanel={this.delPanel}
        />
        <UserPrompt
          toggleDel={this.toggleDel}
          userPrompt={this.state.userPrompt}
          changeWindow={this.changeWindow}
          addTask={this.addTask}
          delTask={this.delTask}
          delPanel={this.delPanel}
        />
      </div>
    );
  }
}

export default App;
