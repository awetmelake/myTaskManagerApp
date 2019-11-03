import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// components
// import Toggle from "../Toggle/Toggle.js";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

//actions
import { signOut } from "../../actions/authActions";

// styles
import "./Nav.scss";

class Nav extends Component {
  render() {
    const { auth, signOut } = this.props;
    const links = auth.uid ? (
      <SignedInLinks signOut={signOut} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div className="navbar main-nav" >
        <nav className="grey darken-4 z-depth-0" id='main-nav'>
          <div className="nav-wrapper z-depth-0">
            <header className="brand-logo center" id="brand-logo" >
              <NavLink to="/">TASKFLOW</NavLink>
            </header>
            {links}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.firebase.auth });

export default connect(
  mapStateToProps,
  { signOut }
)(Nav);
