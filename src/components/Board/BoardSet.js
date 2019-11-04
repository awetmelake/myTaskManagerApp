import React from "react";
import { connect } from "react-redux";

// mui
import Drawer from "@material-ui/core/Drawer";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";

// components
import Toggle from "../Toggle/Toggle";

// actions
import { toggleTaskSize, setTaskFilter } from "../../actions/taskActions";

const BoardSet = ({
  toggleLegend,
  showLegend,
  toggleTaskSize,
  largeNames,
  toggleBoardEditMode
}) => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <a className="material-icons menu-icon pointer" onClick={toggle}>
          menu
        </a>

        <Drawer open={on} onClose={toggle} anchor="right">
          <div className="menu-header grey lighten-1">
            <h6 className="center"><strong>Menu</strong></h6>
            <div className="divider black"></div>
          </div>

          <ul className="board-settings-drawer">
            <li
              className="pointer"
              onClick={e => {
                toggleBoardEditMode();
                toggle();
              }}
            >
              <i className="material-icons left">edit</i>
              <p>Board layout</p>
            </li>

            <li className="pointer " onClick={toggleLegend}>
              <i className="material-icons left">color_lens</i>
              <p>Show legend</p>
              <Switch
                className="right"
                checked={showLegend}
                color="primary"
              ></Switch>
            </li>

            <li className="pointer " onClick={toggleTaskSize}>
              <i className="material-icons left">text_format</i>
              <p>Large task names</p>
              <Switch
                className="right"
                checked={largeNames}
                color="primary"
              ></Switch>
            </li>

            <div className="divider"></div>
          </ul>
        </Drawer>
      </>
    )}
  </Toggle>
);

const mapStateToProps = state => ({
  showLegend: state.boards.showLegend,
  largeNames: state.tasks.largeNames
});

export default connect(
  mapStateToProps,
  { toggleTaskSize, setTaskFilter }
)(BoardSet);
