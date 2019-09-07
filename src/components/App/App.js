import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";

// components
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Spinner from "../Spinner/Spinner";
import Boards from "../Board/Boards";
import Board from "../Board/Board";
import LogIn from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";
import NoMatch from "../NoMatch";
import Notification from "../Notification";
import ScrollTop from "../ScrollTop";

// style
import "./App.scss";

const App = ({ auth, isLoading, timer }) => {
  if (!isLoaded(auth) || isLoading) {
    return <Spinner />;
  }
  return (
    <Router>
      <ScrollTop>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/user-boards" component={Boards} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/board_:id" component={Board} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Notification />
      </ScrollTop>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  isLoading: state.ui.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(App);
