import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    on: false,
    title: ""
  };
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        {this.state.on && (
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
            <button style={{}} type="submit">ok</button>
          </form>
        )}
        <p style={btnStyle} onClick={this.toggle}>
          +
        </p>
      </div>
    );
  }
}
const btnStyle = {
  float: "right",
  color: "green",
  padding: "0 10px",
  borderRadius: "100px",
  position: "relative",
  bottom: "33px",
  fontSize: "30px",
  fontWeight: "1000",
};
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
