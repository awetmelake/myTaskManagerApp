import React, { Component } from 'react';

class AddPanel extends Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addPanel(this.state.title);
      this.setState({ title: ''}); //clear field
    }
    this.props.toggle();
  };
  render() {
    return (
      <div>
        <form style={promptStyle}>
          <div style={{ marginTop: '20px' }}>
            <label>New Panel Title</label>
            <br />
            <input name='title' onChange={this.handleChange} />
          </div>
          <button
            style={{ marginTop: '10px',}}
            type='submit'
            onClick={this.handleClick}
          >
            OK
          </button>
        </form>
      </div>
    );
  }
}

const promptStyle = {
  textAlign: 'center',
  width: '300px',
  height: '200px',
  backgroundColor: '#f3f3f3',
  position: 'fixed',
  top: '30vh',
  left: 'calc(50vw - 150px)',
  border: '2px solid black',
  float: ''
};

export default AddPanel;
