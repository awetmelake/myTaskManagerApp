import React from "react";

import Toggle from "../Toggle/Toggle";

const BoardHeader = ({ board, toggleEdit, boards, editBoardMode }) => {
  return (
    <nav className="grey darken-1 board-header ">
      <header className=" left brand-logo">
          {!editBoardMode ? "" : "layout:"} {board.title}
      </header>
      {!editBoardMode && (
        <a className="material-icons menu-icon pointer">menu</a>
      )}

      {editBoardMode && (
        <button onClick={toggleEdit} className="btn white-text green toggle-board-edit">
          Done
        </button>
      )}
      <ul className="right">
        {!editBoardMode ? (
          <li>
            <a
              title="Edit board"
              className="material-icons"
              onClick={toggleEdit}
            >
              edit
            </a>
            <a title="Timer" className="material-icons ">
              access_time
            </a>
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
      </ul>
    </nav>
  );
};

export default BoardHeader;
