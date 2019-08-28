import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/log-in">Log in </Link>
      </li>
      <li>
        <Link to="/sign-up">Sign up</Link>
      </li>
    </ul>
  );
};

// SignedOutLink.propTypes = {
//   : PropTypes.
// };

export default SignedOutLink;
