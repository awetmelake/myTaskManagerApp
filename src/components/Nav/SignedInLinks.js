import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut }) => {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/user-boards">Boards</NavLink>
      </li>

      <li>
        <NavLink to="/" onClick={signOut}>
          <i class="material-icons left">power_settings_new</i>Sign out
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
