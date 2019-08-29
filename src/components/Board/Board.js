import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// actions
import {
  createBoard,
  deleteBoard,
  fetchUserBoards
} from "../../actions/boardActions";
import { changePanelTitle } from "../../actions/panelActions";

// components
import Spinner from "../Spinner/Spinner";
import Panel from "../Panel/Panel";
import BoardHeader from "./BoardHeader";

// styles
import "./Board.scss";

class Board extends Component {
  state = {
    editBoardMode: false
  };

  toggleEdit = () => {
    this.setState({
      editBoardMode: !this.state.editBoardMode
    });
  };

  render() {
    const { auth, boards, match, panels } = this.props;
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
        <div className="board ">
          <BoardHeader
            boards={boards}
            board={board}
            toggleEdit={this.toggleEdit}
          />
          <div
            className={`board-panels board-panels-${editBoardMode ? "edit" : ""}`}
          >
            {panels.map(
              panel =>
                panel.board === board.id && (
                  <Panel panel={panel} key={panel.id} board={board} editBoardMode={editBoardMode}/>
                )
            )}
            {editBoardMode && (
              <div className="valign-wrapper">
                <a className="green-text material-icons add-panel-btn pointer">
                  add
                </a>
              </div>
            )}
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
  showLegend: state.boards.showLegend
});

export default compose(
  connect(
    mapStateToProps,
    {
      createBoard,
      deleteBoard,
      fetchUserBoards,
      changePanelTitle
    }
  ),
  firestoreConnect(props => [
    `users/${props.auth.uid}/boards`,
    `users/${props.auth.uid}/panels`,
    `users/${props.auth.uid}/tasks`
  ])
)(Board);
