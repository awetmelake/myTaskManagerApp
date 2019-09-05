import React from "react";
import Toggle from "../Toggle/Toggle";

const DelTask = ({ task, delTask }) => (
  <Toggle>
    {({ on, toggle }) => (
      <div className="container">
        <i
          className="material-icons pointer small task-info-del-btn"
          onClick={toggle}
          title="Delete Task"
        >
          delete
        </i>
        {on && (
          <div className="task-info-del-confirm card white red-text">
            <p style={{ textAlign: "center" ,fontSize: '1.1em'}}>Delete task?</p>
            <div className="card-footer">
              <button className="btn-small" onClick={e => delTask(task.id)}>
                Yes
              </button>
              <button className="btn-small" onClick={toggle}>
                No
              </button>
            </div>
          </div>
        )}
      </div>
    )}
  </Toggle>
);

export default DelTask;
