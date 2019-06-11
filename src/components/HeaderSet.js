import React, { Component } from 'react';
import AddTask from './AddTask.js'
import Toggle from './Toggle.js'
class HeaderSet extends Component {
  state = {
    deleteMode : false,

  }
  render() {
    const { panel, toggle, addTask, delTask } = this.props;
    return (
      <div style={{backgroundColor: 'lightgray', border: '1px solid black', borderRadius: '10px'}}>
        <ul style={{listStyleType: 'none'}}>
          <li style={liStyle}>
            <Toggle status={panel} addTask={addTask}>
              {({ on, toggle }) => (
                <a>
                  <a style={btnStyle}onClick={toggle}>+</a>
                  {on && (
                    <AddTask toggle={toggle} panel={panel} addTask={addTask} />
                  )}
                </a>
              )}
            </Toggle>
          </li>
          <li>
            <Toggle status={panel} addTask={addTask}>
              {({ on, toggle }) => (
                <a>
                  <a style={btnStyle}onClick={toggle}>trash</a>
                  {on && (
                    <AddTask toggle={toggle} panel={panel} addTask={addTask} />
                  )}
                </a>
              )}
            </Toggle>
          </li>
        </ul>
      </div>
    );
  }

}

//styles 
const btnStyle = {
  color: 'green',
  padding: '0 10px',
  borderRadius: '100px',
  position: 'relative',
  fontSize: '30px',
  fontWeight: '1000',
};
const liStyle ={
  display: 'inline',
}
export default HeaderSet;
