import React, { Component } from "react";

class Timer extends Component {
  state = {
    count: 0,
    type: null,
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ width: "100px", height: "100px" }}>
        <p>{count}</p>
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
}

export default Timer;
