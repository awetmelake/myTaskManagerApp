import React from "react";
import Timer from "../Timer/Timer";
import TimerSet from "../Timer/TimerSet";
import BoardSet from "./BoardSet";

class BoardHeader extends React.Component {
  state = {
    boardTitle: this.props.board.title
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleTitleChange = (e) => {
    e.preventDefault();
    if(this.state.boardTitle !== this.props.board.title){
      this.props.changeBoardTitle(this.state.boardTitle ,this.props.board.id)
    }
  }

  render() {
    const {
      board,
      toggleBoardEditMode,
      boards,
      editMode,
      timer,
      toggleLegend,
      changeBoardTitle
    } = this.props;

    return (
      <nav className="grey lighten-4 board-header z-depth-0 ">
        <header className="grey-text text-darken-4 left board-title">
          {editMode ? (
            <form onSubmit={e =>this.handleTitleChange(e)}>
              <input
                type="text"
                className="edit-board-title right"
                value={this.state.boardTitle}
                onChange={this.handleChange}
                name="boardTitle"
              />
            </form>
          ) : (
            board.title
          )}
        </header>

        {editMode && (
          <>
            <button
              onClick={toggleBoardEditMode}
              className="btn-small white-text green toggle-board-edit z-depth-0"
            >
              done
            </button>
          </>
        )}
        <ul className="right grey-text text-darken-4">
          {!editMode ? (
            <li>
              <TimerSet />
              <a
                title="Edit board"
                className="material-icons grey-text text-darken-4"
                onClick={toggleBoardEditMode}
              >
                edit
              </a>

              <BoardSet
                toggleBoardEditMode={toggleBoardEditMode}
                toggleLegend={toggleLegend}
              />
            </li>
          ) : (
            <li>
              <a
                title="Exit edit mode"
                className="material-icons grey-text text-darken-4"
                onClick={toggleBoardEditMode}
              >
                close
              </a>
            </li>
          )}
          {timer.isRunning && <Timer />}
        </ul>
      </nav>
    );
  }
}

export default BoardHeader;
