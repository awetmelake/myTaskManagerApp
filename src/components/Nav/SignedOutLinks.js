import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/log-in">
        Log in
        <i className="material-icons right">exit_to_app </i>
       </Link>
      </li>
      <li>
        <Link to="/sign-up">
        <i className="material-icons right">person_add  </i>

        Sign up
      </Link>
      </li>
    </ul>
  );
};

// SignedOutLink.propTypes = {
//   : PropTypes.
// };

export default SignedOutLink;
