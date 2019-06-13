import React, { Component } from 'react';
import Tasks from './Tasks.js';
import TaskHeader from './TaskHeader.js';
import PropTypes from 'prop-types';

class TaskPanel extends Component {


  render() {
    const { setFocus, tasks, addTask, panels, delTask, toggleDel } = this.props;
    return panels.map(panel => (
      <div className='task-panel'>
        <TaskHeader
          panel={panel}
          addTask={addTask}
          delTask={delTask}
          toggleDel={toggleDel}
          key={panel.id}
        />
        <Tasks
          panel={panel.title}
          setFocus={setFocus}
          tasks={tasks}
          toggleDel={toggleDel}
        />
      </div>
    ));
  }
}

//PropTypes
TaskPanel.propTypes = {
  tasks: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired
};
export default TaskPanel;
