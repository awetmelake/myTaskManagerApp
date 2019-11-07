import React, { Component } from "react";
import { connect } from "react-redux";

// mui
import Toggle from "../Toggle/Toggle";
import Popover from "@material-ui/core/Popover";

// actions
import { setTaskFilter } from "../../actions/taskActions";

import {COLORS} from '../../colors.js';

class Legend extends Component {
  render() {
    const { filter, setTaskFilter } = this.props;
    const colors = [];
    for (var color in COLORS) {
      colors.push(color)
    }
    return (
      <ul className="board-color-legend">
        {colors.map(c => (
          <Toggle key={c}>
            {({ on, toggle }) => (
              <>
                <li
                  onClick={toggle}
                  className={`${COLORS[c]} pointer`}
                  id={`legend-${c}`}
                >
                  {c.toUpperCase()}
                </li>
                <Popover
                  open={on}
                  onClose={toggle}
                  anchorEl={document.getElementById(`legend-${c}`)}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <div style={{ padding: ".5em" }}>
                    {filter !== c ? (
                      <div
                        className="pointer"
                        onClick={e => {
                          setTaskFilter(c);
                          toggle();
                        }}
                      >
                        Set as filter
                      </div>
                    ) : (
                      <div
                        className="pointer"
                        onClick={e => {
                          toggle();
                          setTaskFilter(null);
                        }}
                      >
                        Remove Filter
                      </div>
                    )}
                  </div>
                </Popover>
              </>
            )}
          </Toggle>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  legend: state.boards.legend,
  filter: state.tasks.filter
});

export default connect(
  mapStateToProps,
  { setTaskFilter }
)(Legend);
