import React, { Component } from "react";

import Toggle from "../Toggle/Toggle";

const BoardHeader = ({ board, toggleEdit, boards }) => {
  return (
    <nav className="grey darken-1 board-header">
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <header className=" left ">
              <h4>{board.title}</h4>
            </header>
            <a className="material-icons menu-icon pointer" onClick={toggle}>
              menu
            </a>

            {on && (
              <ul className="board-header-boards-display white black-text">
                {boards.map(board => (
                  <li
                    className="board-header-boards-display-items pointer center"
                    key={board.id}
                  >
                    {board.title}
                  </li>
                ))}
              </ul>
            )}

            <ul className="right">
              <li>
                <a title="Edit board" className="material-icons" onClick={toggleEdit}>
                  edit
                </a>
                <a title="Timer" className="material-icons ">access_time</a>
              </li>
            </ul>
          </div>
        )}
      </Toggle>
    </nav>
  );
};

export default BoardHeader;
