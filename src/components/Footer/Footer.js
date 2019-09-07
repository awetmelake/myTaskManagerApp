import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { auth } = this.props;
    return (
      <footer
        className="page-footer black"
        style={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text" data-aos="fade-in" data-aos-delay="0">
                TaskFlow
              </h5>
              <ul>
                <li data-aos="fade-right" data-aos-delay="0">
                  <Link to="/">Home</Link>
                </li>

                {auth.uid ? (
                  <li data-aos="fade-right" data-aos-delay="100">
                    <Link
                      className="grey-text text-lighten-3"
                      to="/user-boards"
                    >
                      Boards
                    </Link>
                  </li>
                ) : (
                  <>
                    <li data-aos="fade-right" data-aos-delay="200">
                      <Link to="/log-in">Log in</Link>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="300">
                      <Link to="/sign-up">Sign up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <p className="grey-text text-lighten-4" data-aos="fade-left" data-aos-delay="200">
                Portfolio:
                <a
                  className="grey-text text-lighten-3"
                  href="http://www.awettech.com"
                >
                  {" "}
                  www.awettech.com
                </a>
              </p>
              <p className="grey-text text-lighten-4" data-aos="fade-left" data-aos-delay="300">
                Email: awetmelake@gmail.com
              </p>
              <p className="grey-text text-lighten-4" data-aos="fade-left" data-aos-delay="400">
                View source:{" "}
                <a href="https://github.com/awetmelake/myTaskManagerApp">
                  github.com/awetmelake/myTaskManagerApp
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="footer-copyright"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="container">
            © 2019 <br /> Made by Awet Melake
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  isLoading: state.ui.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(Footer);
