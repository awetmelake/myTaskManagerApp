import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

//actions
import { guestLogin, logIn } from "../../actions/authActions";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.title]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="col s12 m4 offset-m4 ">
            <div className="card">
              <div className="card-content  light-blue darken-4 white-text">
                <h3>Log In</h3>
              </div>

              <div className="card-content">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input
                      title="email"
                      onChange={this.handleChange}
                      type="email"
                      id="email"
                    />
                  </div>
                  <br />

                  <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input
                      title="password"
                      onChange={this.handleChange}
                      type="password"
                      id="password"
                    />
                  </div>
                  <br />

                  <div className="input-field">
                    <button
                      className="btn-large light-blue darken-4"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Login
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-content">
                <Link to="/">
                  <button
                    className="btn-large green darken-2 "
                    style={{ width: "100%" }}
                    onClick={e => this.props.guestLogin()}
                  >
                    Login as guest
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  { guestLogin, logIn }
)(LogIn);
