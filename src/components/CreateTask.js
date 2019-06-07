import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    visible: false,
    title: ""
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible
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
        {this.state.visible && (
          <form style={promptStyle}>
            <textarea
              name="title"
              onChange={this.onChange}
              placeholder="Enter new task"
              rows="1"
              style={{ fontSize: "20px" }}
            />
            <textarea
              name="description"
              onChange={this.onChange}
              placeholder="description (optional)"
              rows="3"
              style={{ fontSize: "18px" }}
            />
            <button type="submit" />
          </form>
        )}
        <button style={btnStyle} onClick={this.toggle}>
          +
        </button>
      </div>
    );
  }
}
const btnStyle = {
  color: "white",
  float: "right",
  backgroundColor: "green",
  padding: "0 5px ",
  borderRadius: "40px",
  position: "relative",
  bottom: "20px"
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
  border: "2px solid black"
};

export default CreateTask;
