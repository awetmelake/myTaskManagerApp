import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { auth } = this.props;
    return (
      <footer
        class="page-footer black"
        style={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <p class="grey-text text-lighten-4" data-aos="fade-right">
                Portfolio:
                <a
                  class="grey-text text-lighten-3"
                  href="http://www.awettech.com"
                >
                  {" "}
                  www.awettech.com
                </a>
              </p>
              <p class="grey-text text-lighten-4" data-aos="fade-right">
                Email: awetmelake@gmail.com
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text" data-aos="fade-in"
              data-aos-delay="0">TaskFlow</h5>
              <ul>
                <li data-aos="fade-left"
                data-aos-delay="0">
                  <Link to="/">Home</Link>
                </li>

                {auth.uid ? (
                  <li data-aos="fade-left"
                  data-aos-delay="100">
                    <Link class="grey-text text-lighten-3" to="/user-boards">
                      Boards
                    </Link>
                  </li>
                ) : (
                  <>
                    <li data-aos="fade-left"
                    data-aos-delay="200">
                      <Link to="/log-in">Log in</Link>
                    </li>
                    <li data-aos="fade-left"
                    data-aos-delay="300">
                      <Link to="/sign-up">Sign up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div
          class="footer-copyright"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div class="container">
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
