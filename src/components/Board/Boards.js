import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

// mui
import Dialog from "@material-ui/core/Dialog";

// components
import Spinner from "../Spinner/Spinner";

// actions
import { createBoard, deleteBoard } from "../../actions/boardActions";

class Boards extends Component {
  state = { showDelBoard: false };

  toggleDelBoard = () => {
    this.setState({
      showDelBoard: !this.state.showDelBoard
    });
  };
  render() {
    const { boards, deleteBoard, panels } = this.props;

    const boardItems = boards.length ? (
      boards.map(board => (
        <div className="row" key={board.id}>
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">{board.title}</span>

                {panels.map(
                  panel =>
                    panel.board === board.id && (
                      <span
                        key={panel.id}
                        className="grey-text darken-4"
                        style={{ marginRight: "1em" }}
                      >
                        - {panel.title}
                      </span>
                    )
                )}
              </div>

              <div className="card-action">
                <Link to={`/${board.id}`}>Go to board</Link>

                <a className="pointer" onClick={this.toggleDelBoard}>
                  Delete this board
                </a>

                <Dialog open={this.state.showDelBoard}>
                  <div className="del-board modal">
                    <div className="modal-content">
                      <h4 className="red-text darken-3">DELETE BOARD</h4>
                      <p>
                        Are you sure you want to delete this board? This action
                        cannot be undone.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        onClick={this.toggleDelBoard}
                        className="modal-close btn-flat black-text"
                      >
                        Nevermind!
                      </button>
                      <button
                        className="modal-close btn-flat black-text"
                        onClick={e => deleteBoard(board.id)}
                      >
                        I'm Sure
                      </button>
                    </div>
                  </div>
                </Dialog>

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
  boards: state.boards.boards,
  panels: state.panels.panels,
  auth: state.firebase.auth
});

export default compose(
  connect(
    mapStateToProps,
    { createBoard, deleteBoard }
  ),
  firestoreConnect(props => [
    `users/${props.auth.uid}/boards`,
    `users/${props.auth.uid}/panels`
  ])
)(Boards);
