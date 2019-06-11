import React, { Component } from 'react';
import AddTask from './AddTask'
import Toggle from './Toggle'

class TaskSetting extends Component {

  render() {
    const { addTask, delTask, panel, toggle } = this.props;
    return (
      <div className='settings'>
        <AddTask
        toggle={toggle}
        panel={panel}
        addTask={addTask}
        />
      </div>
    );
  }

}

const btnStyle = {
  float: 'right',
  color: 'green',
  padding: '0 10px',
  borderRadius: '100px',
  position: 'relative',
  bottom: '25px',
  fontSize: '20px',
  fontWeight: '1000',
};
export default TaskSetting;
