import React, { Component } from "react";

class AddPanel extends Component {
  state = {
    title: "",
    tasks: []
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.addPanel(this.state);
    }
    this.props.changeWindow("none", {});
  };

  render() {
    return (
      <div className="disappear-onclick-background">
        <form autoComplete="off" className="prompt-window animated bounceInUp">
          <label>Add New Panel</label>
          <br />
          <br />
          <input
            placeholder="Title"
            name="title"
            onChange={this.handleChange}
          />
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            onClick={this.handleClick}
          >
            Submit
          </button>
          <button
            className="btn"
            onClick={e => this.props.changeWindow("none", {})}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
  componentWillUnmount() {
    //reset state
    this.setState({ title: "" }); //clear field
  }
}

export default AddPanel;
