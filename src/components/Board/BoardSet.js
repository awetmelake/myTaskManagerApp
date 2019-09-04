import React from "react";

// mui
import Drawer from "@material-ui/core/Drawer";

// components
import Toggle from "../Toggle/Toggle";

const BoardSet = () => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <a className="material-icons menu-icon pointer" onClick={toggle}>
          menu
        </a>

        <Drawer open={on} onClose={toggle}>
          <h4 className="center">Board settings</h4>
          <ul className="board-settings-drawer">
            <li>
              <a>Item 1</a>
            </li>
            <div className="divider"></div>
            <li>
              <a>Filter</a>
            </li>
            <div className="divider"></div>
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </Drawer>
      </>
    )}
  </Toggle>
);

export default BoardSet;
