import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends Component {
  // makes sure page loads at the top when routing
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);
