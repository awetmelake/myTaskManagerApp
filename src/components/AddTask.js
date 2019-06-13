import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    title: '',
    focused: false,
    time: 0,
    panel: this.props.panel,
    color: 'yellow'
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addTask(this.state);
      this.setState({ title: ', discription: ' }); //clear field
    }
    this.props.toggle();
  };

  handleColor = () => {};
  render() {
    return (
      <form className='prompt-window'>
        <div style={{ marginTop: '5px' }}>
          <label>Title</label>
          <br />
          <input name='title' onChange={this.handleChange} />
        </div>
        <div style={{ marginTop: '5px' }}>
          <label>Description</label>
          <br />
          <textarea name='description' onChange={this.handleChange} />
        </div>
        <button
          style={{ marginTop: '5px' }}
          type='submit'
          onClick={this.handleClick}
        >
          OK
        </button>
        <ul>
          <li>
            <input type=''></input>
          </li>
        </ul>
      </form>
    );
  }
}

export default AddTask;
