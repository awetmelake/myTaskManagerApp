import React, { Component } from 'react';

class DelPanel extends Component {
  getStyle = () => {
    return {
      display: this.props.userPrompt.type === "delpanel" ? "initial" : "none"
    };
  };
  render() {
    return (
      <div>
        <form >
          <label>Delete Panel?</label>
          <br />
          <br />
          <button style={{marginRight: '10px'}}>yes</button>
          <button>no</button>
        </form>
      </div>
    );
  }

}

export default DelPanel;
