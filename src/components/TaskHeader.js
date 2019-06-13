import React, { Component } from 'react';
import TaskSetting from './TaskSetting.js';
import Toggle from './Toggle.js';
import TaskHeaderSet from './TaskHeaderSet';

class TaskHeader extends Component {
  render() {
    const { addTask, delTask, panel, toggleDel } = this.props;
    return (
      <div className='task-header'>
        <h2 className='task-header-title'>{panel.title}</h2>
        <div className='task-header-setting'>
          <Toggle >
            {({ on, toggle }) => (
              <div>
                <p className='task-header-setting-btn' onClick={toggle}>
                  ...
                </p>
                {on && (
                  <TaskHeaderSet toggle={toggle} panel={panel} addTask={addTask} delTask={delTask} toggleDel={toggleDel}/>
                )}
              </div>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}
const btnStyle = {};

export default TaskHeader;
