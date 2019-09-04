import React from "react";

import Timer from "../Timer/Timer";
import TimerSet from "../Timer/TimerSet";
import BoardSet from "./BoardSet";

const BoardHeader = ({ board, toggleEdit, boards, editBoardMode, timer }) => {
  return (
    <nav className="grey darken-1 board-header ">
      <header className=" left brand-logo">
        {!editBoardMode ? "" : "layout:"} {board.title}
      </header>

      {editBoardMode && (
        <button
          onClick={toggleEdit}
          className="btn white-text green toggle-board-edit"
        >
          Done
        </button>
      )}
      <ul className="right">
        {!editBoardMode ? (
          <li>

            <TimerSet />
            <a
              title="Edit board"
              className="material-icons"
              onClick={toggleEdit}
              >
                edit
              </a>

            <BoardSet />
          </li>
        ) : (
          <li>
            <a
              title="Exit edit mode"
              className="material-icons "
              onClick={toggleEdit}
            >
              close
            </a>
          </li>
        )}
        {timer.isRunning && <Timer />}
      </ul>
    </nav>
  );
};

export default BoardHeader;
