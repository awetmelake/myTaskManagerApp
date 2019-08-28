import React from "react";

// mui
import Dialog from "@material-ui/core/Dialog";

// styles
import "./Panel.scss";

const DelPanel = ({
  visibility,
  toggleVisibility,
  deletePanel,
  panel,
  board
}) => (
  <Dialog open={visibility} onBackdropClick={toggleVisibility}>
    <div className="add-panel grey lighten-2">
      <h5 className="center">
        Are you sure you want to delete this panel. <br />
      </h5>
      <p className="center red-text"> This action cannot be undone.</p>
      <div className="container center">
        <button className="btn grey " onClick={toggleVisibility}>
          no
        </button>
        <button
          className="btn grey"
          type="submit"
          onClick={e => deletePanel(panel.title, board.id)}
        >
          yes
        </button>
      </div>
    </div>
  </Dialog>
);

export default DelPanel;
