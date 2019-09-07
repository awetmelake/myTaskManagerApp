import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../Footer/Footer";
// actions
import { createUser } from "../../actions/authActions";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };
  render() {
    const { authErr } = this.props;
    return (
      <div>
        <div className="row" style={{ minHeight: "100vh" }}>
          <br />
          <br />
          <div className="col s12 m4 offset-m4 ">
            <div className="card">
              <div className="card-content  light-blue darken-4 white-text">
                <h3>Sign Up</h3>
              </div>

              <div className="card-content">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input
                      onChange={this.handleChange}
                      className="validate"
                      type="text"
                      id="email"
                      name="email"
                    />
                  </div>
                  <br />

                  <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input
                      onChange={this.handleChange}
                      type="password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <br />

                  <div className="input-field">
                    <label htmlFor="password">confirm password</label>
                    <input
                      onChange={this.handleChange}
                      type="password"
                      name="confirmPassword"
                    />
                  </div>
                  <br />

                  <p className="center red-text">
                    <i>{authErr}</i>
                  </p>

                  <div className="input-field">
                    <button
                      className="btn-large light-blue darken-4"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Register
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authErr: state.auth.err
});

export default connect(
  mapStateToProps,
  { createUser }
)(SignUp);
