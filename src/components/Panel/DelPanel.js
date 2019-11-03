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
    <div className="del-panel  modal">
      <div className="modal-content">
        <h4 className="red-text darken-3">DELETE PANEL?</h4>
        <p>
          Are you sure you want to delete this board? This action
          cannot be undone.
        </p>
      </div>
      <div className="modal-footer">
        <button className=" z-depth-0 modal-close btn-flat " onClick={toggleVisibility}>
          Nevermind!
        </button>
        <button
          className="modal-close btn-flat "
          type="submit"
          onClick={e => {
            toggleVisibility();
            deletePanel(panel.id, board.id);
          }}
        >
          I'm Sure
        </button>
      </div>
    </div>
  </Dialog>
);

export default DelPanel;
