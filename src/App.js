import React, { Component } from 'react';
import './App.css';
import TaskPanel from './components/TaskPanel.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[
        {
          id: 1,
          title: 'wake up',
          status: 'done',
          focused: true,
        },
        {
          id: 2,
          title: 'take a walk',
          status: 'todo',
          focused: 'false',

        },
        {
          id: 3,
          title: 'sleep',
          status: 'done',
          focused: 'false',
        },
      ],
      panels:[
        'Todo',
        'In Progress',
        'Done'
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <TaskPanel todos={this.state.todos} panels={this.state.panels}/>
      </div>
    );
  }

}

export default App;
