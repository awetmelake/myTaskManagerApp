import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import landingImg from "../../images/planning-productivity.jpg";
import taskflow from "../../images/taskflow.png";

import "./Home.scss";

const Home = ({ auth }) => {
  if (!auth.uid) {
    return (
      <div className="home grey lighten-4">
        <div className="wrapper">
          <div className="landing blue lighten-3">
            <h2 className="white-text">
              PROJECT MANAGEMENT <u>SIMPLIFIED</u>.
            </h2>

            <p className="center">
              <i>A task management app that helps you maximize productivity</i>
            </p>
            <div
              className="landing-img row"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <img src={landingImg} alt="" className="responsive-img" />
            </div>
          </div>
        </div>

        <div className="row section section-right" data-aos="fade-left">
          <div className="left">
            <h3>Completely customizable</h3>
            <h6>Personalize with customizable panel titles and task colors</h6>
          </div>

          <img src={taskflow} alt="" className="responsive-img right " />
        </div>
        <div className="row section section-left" data-aos="fade-right">
          <img src={taskflow} alt="" className="responsive-img right " />
          <div className="left">
            <h3>Time management</h3>
            <h6>
              Built in pomodoro/stopwatch timer and 'time spent' indicator on
              tasks allows users to visualize their time management
            </h6>
          </div>
        </div>
        <div className="row  section-last center" data-aos="fade-up">
          <h3>Login or sign up to get started</h3>
          <br />
          <Link to="/log-in">
            <button className="btn">Get started</button>
          </Link>
        </div>
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
