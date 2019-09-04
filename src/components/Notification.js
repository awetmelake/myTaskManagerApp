import React, { Component } from "react";
import { connect } from "react-redux";

// actions
import { clearNotification } from "../actions/uiActions";
class Notification extends Component {
  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      const notify = document.querySelector(".notification");
      notify.animate(
        {
          opacity: [0, 0.98, 1],
          offset: [0, 0.25, 1],
          easing: ["ease-in-out"]
        },
        10000
      );
    }
  }
  render() {
    return (
      <div className="notification grey darken-2 white-text">
        <div className="center">{this.props.notification}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notification: state.ui.notification
});

export default connect(
  mapStateToProps,
  { clearNotification }
)(Notification);

// type: "SET_NOTIFICATION", payload: 'notification'
