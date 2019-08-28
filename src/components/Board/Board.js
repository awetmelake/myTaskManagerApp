import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// actions
import {
  createBoard,
  deleteBoard,
  fetchUserBoards,
  pushUserBoards
} from "../../actions/boardActions";
import { changePanelTitle } from "../../actions/panelActions";

// components
import Spinner from "../Spinner/Spinner";
import Panel from "../Panel/Panel";

// styles
import "./Board.scss";

class Board extends Component {
  render() {
    const { auth, boards, match } = this.props;
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
          <div className="board-panels">
            {board.panels.map(panel => (
              <Panel panel={panel} key={panel.title} board={board} />
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  boards: state.boards
});

export default compose(
  connect(
    mapStateToProps,
    {
      createBoard,
      deleteBoard,
      fetchUserBoards,
      changePanelTitle,
      pushUserBoards
    }
  ),
  firestoreConnect(props => [`users/${props.auth.uid}/boards`])
)(Board);
