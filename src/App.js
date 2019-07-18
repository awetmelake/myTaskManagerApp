import React, { Component } from "react";
import "./App.css";
import TaskPanel from "./components/TaskPanel.js";
import Header from "./components/Header.js";
import UserPrompt from "./components/UserPrompts.js";
//random id generator
const uuidv4 = require("uuid/v4");

/*
TODO:
timer
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      panels: [
        {
          title: "To Do",
          id: uuidv4(),
          delMode: false,
          tasks: [
            {
              id: uuidv4(),
              title: "Pick up kids from school",
              description: "",
              completeBy: "4:00pm",
              focused: false,
              color: "lightgreen",
              time: 0
            }
          ]
        },
        {
          title: "In Progress",
          id: uuidv4(),
          delMode: false,
          tasks: [
            {
              id: uuidv4(),
              title: "Work on project",
              description: "add finishing touches",
              completeBy: "Thursday",
              focused: false,
              color: "yellow",
              time: 0
            }
          ]
        },
        {
          title: "Done",
          id: uuidv4(),
          delMode: false,
          tasks: [
            {
              id: uuidv4(),
              title: "Wake up",
              description: "",
              completeBy: "5:00 am",
              focused: false,
              color: "red",
              time: 0
            }
          ]
        }
      ],
      userPrompt: {
        type: "none",
        target: {}
      }
    };
  }

  //add and delete functions//
  //pass in new panel object, added to state panels
  addPanel = panel => {
    panel.id = uuidv4();
    panel.delMode = false;
    this.setState({
      panels: [...this.state.panels, panel]
    });
  };

  //delete panel by panel id
  delPanel = panelId =>
    this.setState({
      panels: this.state.panels.filter(panel => panel.id !== panelId)
    });

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

  //delete task by id
  delTask = taskId => {
    this.setState({
      panels: this.state.panels.map(panel => {
        panel.tasks = panel.tasks.filter(task => task.id !== taskId);
        return panel;
      })
    });
  };

  //delete focused tasks inside passed panel
  delFocused = panelId => {
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.tasks = panel.tasks.filter(task => task.focused === false);
        }
        return panel;
      })
    });
  };

  moveTask = (taskId, targetPanelId) => {
    let curTask;
    this.state.panels.forEach(panel => {
      panel.tasks.forEach(task => {
        if (task.id === taskId) {
          curTask = task;
        }
      });
    });
    this.delTask(taskId);
    this.addTask(curTask, targetPanelId);
  };

  //replace task with matching id and panel id with new task object
  editTask = (newTask, taskId, panelId) => {
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.tasks = panel.tasks.map(task => {
            if (task.id === taskId) {
              task = newTask;
            }
            return task;
          });
        }
        return panel;
      })
    });
  };

  editPanelTitle = (newTitle, panelId) => {
    this.setState({
      panels: this.state.panels.map(panel => {
        if (panel.id === panelId) {
          panel.title = newTitle;
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

  //toggle deletemode property of panel
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
      this.setState({ userPrompt: { type, target } });
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          changeWindow={this.changeWindow}
          boards={this.state.boards}
          addPanel={this.addPanel}
        />
        <TaskPanel
          panels={this.state.panels}
          changeWindow={this.changeWindow}
          toggleDel={this.toggleDel}
          setTaskFocus={this.setTaskFocus}
          editTask={this.editTask}
          userPrompt={this.state.userPrompt}
          editPanelTitle={this.editPanelTitle}
          delTask={this.delTask}
        />
        <UserPrompt
          panels={this.state.panels}
          toggleDel={this.toggleDel}
          userPrompt={this.state.userPrompt}
          changeWindow={this.changeWindow}
          addTask={this.addTask}
          addPanel={this.addPanel}
          delFocused={this.delFocused}
          delPanel={this.delPanel}
          moveTask={this.moveTask}
        />
      </div>
    );
  }
}

export default App;
