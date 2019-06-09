import React, { Component } from "react";

class CreateTask extends Component {
  onChange = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>

          <form style={promptStyle}>
            <label>Title</label>
            <br/>
            <input
              name="title"
              onChange={this.onChange}
              style={{padding: '5px',}}
            />
            <label>Description</label>
            <textarea
              name="description"
              onChange={this.onChange}
              style={{padding: '10px',}}
            />
            <br/>
          </form>

      </div>
    );
  }
}

const promptStyle = {
  textAlign: "center",
  padding: "20px",
  width: "300px",
  height: "200px",
  backgroundColor: "#f3f3f3",
  position: "fixed",
  top: "50vh",
  left: "calc(50vw - 150px)",
  border: "2px solid black",
};

export default CreateTask;
