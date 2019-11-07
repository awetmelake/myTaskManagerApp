import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Footer/Footer";

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
    const { auth, authErr } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="blue darken-3">
        <div className="row" style={{minHeight: "calc(100vh - 34px)"}}>
          <div className="col s12 m8 offset-m2 l4 offset-l4" style={{ marginTop: "4em"}}>
            <div className="card">
              <div className="card-content center">
                <h3 className="center">Log In</h3>
                <br />
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

                  <p className="center red-text">
                    <i>{authErr}</i>
                  </p>

                  <div className="input-field">
                    <button
                      className="btn-large light-blue darken-4 z-depth-0"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Login
                    </button>
                  </div>
                  <br />
                </form>
                <br />
                <div className="card-action row">
                  <div className="col s12 ">
                    <div className="left">

                    <p style={{ paddingBottom: ".5em" }} className="grey-text">
                      Just looking around?
                    </p>
                    <Link to="/">
                      <button
                        className="btn green darken-2 z-depth-0"
                        onClick={e => this.props.guestLogin()}
                      >
                        Log in a guest
                      </button>
                      <div className="clearfix"></div>
                    </Link>
                  </div>
                  <div className="right">
                    <p style={{ paddingBottom: ".5em" }} className="grey-text">
                      New here?
                    </p>
                    <Link to="/sign-up">
                      <button
                        className="btn blue darken-2 z-depth-0"
                      >
                        Sign up
                      </button>
                      <div className="clearfix"></div>
                    </Link>
                  </div>
                  </div>
                </div>
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
  auth: state.firebase.auth,
  authErr: state.auth.err
});

export default connect(
  mapStateToProps,
  {
    guestLogin,
    logIn
  }
)(LogIn);
