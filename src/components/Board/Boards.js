import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

// components
import Spinner from "../Spinner/Spinner";

// actions
import {
  createBoard,
  deleteBoard,
  fetchUserBoards
} from "../../actions/boardActions";

class Boards extends Component {
  render() {
    const { boards, deleteBoard } = this.props;

    const boardItems = boards.length ? (
      boards.map(board => (
        <div className="row" key={board.id}>
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">{board.title}</span>

                {board.panels.map(panel => (
                  <span
                    key={panel.title}
                    className="grey-text darken-4"
                    style={{ marginRight: "1em" }}
                  >
                    - {panel.title}
                  </span>
                ))}
              </div>

              <div className="card-action">
                <Link to={`/${board.id}`}>Go to board</Link>

                <a className="modal-trigger" href="#modal1">
                  Delete this board
                </a>

                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <h4 className="red-text darken-3">DELETE BOARD</h4>
                    <p>
                      Are you sure you want to delete this board? This action
                      cannot be undone.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-close btn-flat black-text">
                      Nevermind!
                    </a>
                    <a
                      href="#!"
                      className="modal-close btn-flat black-text"
                      onClick={e => deleteBoard(board.id)}
                    >
                      I'm Sure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <Spinner />
    );
    return (
      <div className="row">
        <div className="section">
          <div className="col s12 m8 offset-m2 ">
            <h2>Your Boards</h2>
            <div className="divider"></div>
            <br />
          </div>
        </div>

        {boards.length ? (
          boardItems
        ) : (
          <div className="col s12 m8 offset-m2">
            <h5 className="left">You haven't created any boards yet</h5>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards,
  auth: state.firebase.auth
});

export default compose(
  connect(
    mapStateToProps,
    { createBoard, deleteBoard, fetchUserBoards }
  ),
  firestoreConnect(props => [`users/${props.auth.uid}/boards`])
)(Boards);
