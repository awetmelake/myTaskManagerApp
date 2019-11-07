import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";

import landingImg from "../../images/agenda-concept-development-7376.jpg";
import taskflow from "../../images/taskflow.png";
import timer from "../../images/timer-2.png";
import task from "../../images/chrome_2019-09-06_11-24-35.png";

import "./Home.scss";

const Home = ({ auth }) => {
  if (!auth.uid) {
    return (
      <div className="home grey lighten-4">
        <div className="row blue darken-3">
          <div className="wrapper">
            <div className="landing ">
              <h2 className="white-text">
                PROJECT MANAGEMENT <u>SIMPLIFIED</u>.
              </h2>

              <p className="center white-text">
                  A task management app that helps you maximize productivity
              </p>
              <div
                className="landing-img"
              >
                <img src={landingImg} alt="" className="responsive-img" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="row section section-right"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="left">
            <h3>Organize Tasks</h3>
            <h6>
              Arrange your tasks into panels. Add or delete panels and give them
              custom titles.
            </h6>
          </div>

          <img src={taskflow} alt="" className=" right " />
        </div>

        <div
          className="row section section-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img src={timer} alt="" className="left " />
          <div className="right">
            <h3>Manage your time</h3>
            <h6>
              Built in pomodoro/stopwatch timer and 'time spent' indicator on
              tasks allows users to visualize their time management.
            </h6>
          </div>
        </div>

        <div
          className="row section section-right"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="left">
            <h3>Customize tasks</h3>
            <h6>
              Add as many new tasks as you want. Edit, save or delete them as
              you choose. Give task items custom colors and descriptions.
            </h6>
          </div>

          <img src={task} alt="" className=" right " />
        </div>

        <div
          className="row  section-last center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>Login or sign up to get started</h3>
          <br />
          <Link to="/log-in">
            <button className=" z-depth-0 btn">Get started</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Redirect to="user-boards" />;
  }
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  {}
)(Home);

//   return !auth.uid ? <Redirect to="log-in" /> : <Redirect to="user-boards" />;
