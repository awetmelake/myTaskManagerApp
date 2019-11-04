import React from "react";

import Timer from "../Timer/Timer";
import TimerSet from "../Timer/TimerSet";
import BoardSet from "./BoardSet";

const BoardHeader = ({ board, toggleBoardEditMode, boards, editMode, timer, toggleLegend }) => {
  return (
    <nav className="grey darken-1 board-header z-depth-0 ">
      <header className=" left brand-logo">
        {!editMode ? "" : "layout:"} {board.title}
      </header>

      {editMode && (
        <button
          onClick={toggleBoardEditMode}
          className="btn white-text green toggle-board-edit z-depth-0"
        >
          Done
        </button>
      )}
      <ul className="right">
        {!editMode ? (
          <li>

            <TimerSet />
            <a
              title="Edit board"
              className="material-icons"
              onClick={toggleBoardEditMode}
              >
                edit
              </a>

            <BoardSet toggleBoardEditMode={toggleBoardEditMode} toggleLegend={toggleLegend}/>
          </li>
        ) : (
          <li>
            <a
              title="Exit edit mode"
              className="material-icons "
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
};

export default BoardHeader;
