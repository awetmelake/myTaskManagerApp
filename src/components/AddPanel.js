import React, { Component } from "react";

class AddPanel extends Component {
  state = {
    title: "",
    id: null
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addPanel(this.state);
      this.setState({ title: "" }); //clear field
    }
    this.props.toggle();
  };

  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "addpanel" ? "initial" : "none"
    };
  };
  render() {
    return (
      <form style={this.getStyle()}>
        <div style={{ marginTop: "20px" }}>
          <label>New Panel Title</label>
          <br />
          <input name="title" onChange={this.handleChange} />
        </div>
        <button
          style={{ marginTop: "10px" }}
          type="submit"
          onClick={this.handleClick}
        >
          OK
        </button>
      </form>
    );
  }
}

export default AddPanel;
