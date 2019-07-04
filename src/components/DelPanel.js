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
      <>
        {type === "delpanel" && (
            <div className="disappear-onclick-background">
              <form className="prompt-window">
                <label>Delete Panel?</label>
                <br />
                <br />
                <button
                  onClick={this.handleClick}
                  style={{ marginRight: "10px" }}
                >
                  yes
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.changeWindow("none", {});
                  }}
                >
                  no
                </button>
              </form>
            </div>
          )}
      </>
    );
  }
}

export default DelPanel;
