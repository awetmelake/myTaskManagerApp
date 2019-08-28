import React from "react";
// import PropTypes from "prop-types";
import { Link,NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/user-boards">Boards</NavLink>
      </li>

      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>

      <li>
        <NavLink to="/" onClick={signOut}>
          Sign out
        </NavLink>
      </li>

      <li>
        <a className="dropdown-trigger" href="#!" data-target="dropdown1">
          Dropdown<i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </ul>
  );
};



export default SignedInLinks;
