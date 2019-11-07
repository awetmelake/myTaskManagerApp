import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

// mui
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Dialog from "@material-ui/core/Dialog";

// components
import Spinner from "../Spinner/Spinner";
import Toggle from "../Toggle/Toggle";
import Footer from "../Footer/Footer";

// actions
import { createBoard, deleteBoard } from "../../actions/boardActions";

class Boards extends Component {
  state = { showDelBoard: null, newBoardTitle: "" };

  toggleDelPrompt = boardId => {
    if (this.state.showDelBoard !== boardId) {
      this.setState({
        showDelBoard: boardId
      });
    } else {
      this.setState({
        showDelBoard: null
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      boards,
      deleteBoard,
      panels,
      createBoard,
      boardErr,
      isLoading,
      auth
    } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    const boardItems =
      boards.length && !isLoading ? (
        boards.map(board => (
          <div className="row" key={board.id}>
            <div className="col s8 offset-s2 ">
              <div className="card grey darken-2 z-depth-0">
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
                  <Link to={`/board_${board.id}`}>Go to board</Link>

                  <a
                    className="pointer"
                    onClick={e => this.toggleDelPrompt(board.id)}
                  >
                    Delete this board
                  </a>

                  <Dialog
                    open={this.state.showDelBoard === board.id}
                    onBackdropClick={e =>  this.toggleDelPrompt(board.id)}
                  >
                    <div className="del-board modal">
                      <div className="modal-content">
                        <h4 className="red-text darken-3">DELETE BOARD?</h4>
                        <p>
                          Are you sure you want to delete this board? This
                          action cannot be undone.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          onClick={ e =>  this.toggleDelPrompt(board.id)}
                          className="modal-close btn-flat grey-text text-darken-4"
                        >
                          Nevermind!
                        </button>
                        <button
                          className="modal-close btn-flat grey-text text-darken-4"
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
      <div>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="section">
            <div className="col  s8 offset-s2 ">
              <Toggle>
                {({ on, toggle }) => (
                  <div
                    style={{
                      position: "relative"
                    }}
                  >
                    <h2
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      Your Boards
                      <button
                        title="Add new board"
                        className="z-depth-0 btn-small right green"
                        onClick={toggle}
                      >
                        <i className="material-icons ">add</i>
                      </button>
                    </h2>
                    {on && (
                      <ClickAwayListener onClickAway={toggle}>
                        <div className="card new-board">
                          <h5 className="center"> Create new board</h5>
                          <div className="card-content">
                            <div className="input-field">
                              <label htmlFor="newBoardTitle">
                                {boardErr ? boardErr : "Title"}
                              </label>
                              <input
                                id="newBoardTitle"
                                type="text"
                                name="newBoardTitle"
                                onChange={this.handleChange}
                                value={this.state.newBoardTitle}
                              />
                            </div>
                          </div>
                          <div className="card-action">
                            <button
                              className="btn-small z-depth-0 green"
                              onClick={e => {
                                createBoard(this.state.newBoardTitle);
                                this.setState({
                                  newBoardTitle: ""
                                });
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="btn-small red z-depth-0 btn"
                              onClick={toggle}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </ClickAwayListener>
                    )}
                  </div>
                )}
              </Toggle>
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards.boards,
  panels: state.panels.panels,
  auth: state.firebase.auth,
  boardErr: state.boards.err,
  isLoading: state.ui.isLoading
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
