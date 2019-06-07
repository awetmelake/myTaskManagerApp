import React from 'react';
import CreateTask from './CreateTask.js'

const TaskHeader = (props) => (
  <div className="task-header">
    <h2>{props.title}</h2>
    <CreateTask/>
  </div>
);


export default TaskHeader;
