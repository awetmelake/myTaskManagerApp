import React, { Component } from "react";

class DelPanel extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.delPanel(this.props.userPrompt.target);
    this.props.changeWindow("none", null);
  };
  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "delpanel" ? "initial" : "none"
    };
  };
  render() {
    return (
      <div style={this.getStyle()} className="disappear-onclick-background">
        <form style={this.getStyle()} className="prompt-window">
          <label>Delete Panel?</label>
          <br />
          <br />
          <button onClick={this.handleClick} style={{ marginRight: "10px" }}>
            yes
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.changeWindow("none", null);
            }}
          >
            no
          </button>
        </form>
      </div>
    );
  }
}

export default DelPanel;
