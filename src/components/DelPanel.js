import React, { Component } from "react";

class DelPanel extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.delPanel(this.props.userPrompt.target);
    this.props.changeWindow("none", {});
  };

  render() {
    const { type } = this.props.userPrompt;
    return (
      <div className="disappear-onclick-background">
        <form className="prompt-window">
          <label>Delete Panel?</label>
          <br />
          <br />
          <button
            className="btn"
            onClick={this.handleClick}
            style={{ marginRight: "10px" }}
          >
            yes
          </button>
          <button
            className="btn"
            onClick={e => {
              e.preventDefault();
              this.props.changeWindow("none", {});
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
