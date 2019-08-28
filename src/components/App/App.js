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

// style
import "./App.scss";

const App = ({ auth }) => {
  if (!isLoaded(auth)) {
    return <Spinner />;
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-boards" component={Boards} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/:id" component={Board} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
  // loading: state.ui.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(App);
