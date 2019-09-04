import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// actions
import { createBoard, deleteBoard } from "../../actions/boardActions";
import { changePanelTitle, createPanel } from "../../actions/panelActions";
import { toggleSelectMode } from "../../actions/uiActions";


// components
import Spinner from "../Spinner/Spinner";
import Panel from "../Panel/Panel";
import BoardHeader from "./BoardHeader";
import Toggle from "../Toggle/Toggle";

// styles
import "./Board.scss";

class Board extends Component {
  state = {
    editBoardMode: false,
    panelTitle: ""
  };

  toggleEdit = () => {
    this.setState({
      editBoardMode: !this.state.editBoardMode
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreatePanel = (e, boardId) => {
    e.preventDefault();
    this.props.createPanel(this.state.panelTitle, boardId);
    // reset state
    this.setState({
      panelTitle: ""
    });
  };

  render() {
    const {
      auth,
      boards,
      match,
      panels,
      panelErr,
      selectMode,
      toggleSelectMode,
      timer
    } = this.props;
    const { editBoardMode } = this.state;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    if (!boards.length) {
      return <Spinner />;
    } else {
      const board = boards.filter(board => board.id === match.params.id)[0];
      if (!board) {
        return <Redirect to="/" />;
      }
      return (
        <div>
          <BoardHeader
            boards={boards}
            board={board}
            toggleEdit={this.toggleEdit}
            editBoardMode={editBoardMode}
            timer={timer}
          />

          <div className="board ">
            <div
              className={`board-panels board-panels-${
                editBoardMode ? "edit" : ""
              }`}
            >
              {selectMode && (
                <div className="board-select-mode-popup ">
                  <div className="card grey lighten-2 center">
                    <div className="card-content">
                      <p className="card-title">
                        Select task to start timer
                      </p>
                    </div>
                    <div className="card-action">
                      <button className="btn-small red" onClick={toggleSelectMode}>
                        cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {panels
                .sort((a, b) => a.index - b.index)
                .map(
                  panel =>
                    panel.board === board.id && (
                      <Panel
                        panel={panel}
                        key={panel.id}
                        board={board}
                        editBoardMode={editBoardMode}
                      />
                    )
                )}

              {editBoardMode && (
                <div className="valign-wrapper">
                  <Toggle>
                    {({ on, toggle }) => (
                      <div>
                        {on && (
                          <div className="card add-panel-form panel grey lighten-4">
                            <div className="form">
                              <div className="input-field">
                                {!panelErr ? (
                                  <label htmlFor="panelTitle">
                                    Panel title
                                  </label>
                                ) : (
                                  <label htmlFor="panelTitle">{panelErr}</label>
                                )}

                                <input
                                  autoFocus
                                  type="text"
                                  id="panelTitle"
                                  name="panelTitle"
                                  value={this.state.panelTitle}
                                  onChange={this.handleChange}
                                />
                              </div>

                              <div className="add-panel-form-btns">
                                <button
                                  className="btn-small"
                                  onClick={e =>
                                    this.handleCreatePanel(e, board.id)
                                  }
                                >
                                  Add
                                </button>

                                <button className="btn-small" onClick={toggle}>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {!on && (
                          <button
                            onClick={toggle}
                            className="white-text add-panel-btn pointer green btn darken-1"
                          >
                            Add Panel
                          </button>
                        )}
                      </div>
                    )}
                  </Toggle>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  boards: state.boards.boards,
  panels: state.panels.panels,
  showLegend: state.boards.showLegend,
  panelErr: state.panels.err,
  selectMode: state.ui.selectMode,
  timer: state.timer
});

export default compose(
  connect(
    mapStateToProps,
    {
      createBoard,
      deleteBoard,
      changePanelTitle,
      createPanel,
      toggleSelectMode
    }
  ),
  firestoreConnect(props => [
    `users/${props.auth.uid}/boards`,
    `users/${props.auth.uid}/panels`,
    `users/${props.auth.uid}/tasks`
  ])
)(Board);
