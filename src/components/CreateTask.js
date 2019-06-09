import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    title: '',
    focused: false,
    time: 0,
    panel: this.props.panel,
  };
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleClick = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.createTask(this.state);
      this.setState({title: '', discription: ''}); //clear field
    }
    this.props.toggle();

  }
  render() {
    return (
      <div>
        <form style={promptStyle}>
          <div style={{ marginTop: "20px" }}>
            <label>Title</label>
            <br />
            <input name="title" onChange={this.handleChange} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>Description</label>
            <br />
            <textarea name="description" onChange={this.handleChange} />
          </div>
          <button style={{marginTop: '10px'}} type='submit' onClick={this.handleClick}>OK</button>
        </form>
      </div>
    );
  }
}

const promptStyle = {
  textAlign: "center",
  width: "300px",
  height: "200px",
  backgroundColor: "#f3f3f3",
  position: "fixed",
  top: "50vh",
  left: "calc(50vw - 150px)",
  border: "2px solid black"
};

export default CreateTask;
