import React from "react";
import Toggle from "../Toggle/Toggle";

const DelTask = ({ task, delTask }) => (
  <Toggle>
    {({ on, toggle }) => (
      <div className="container">
        <i
          className="material-icons pointer small task-info-del-btn grey-text text-darken-4"
          onClick={toggle}
          title="Delete Task"
        >
          delete
        </i>
        {on && (
          <div className="task-info-del-confirm card white ">
            <p style={{ textAlign: "center" ,fontSize: '1.1em'}}>Delete task?</p>
            <div className="card-footer">
              <button className=" z-depth-0 btn-small z-depth-0 red" onClick={e => delTask(task.id)}>
                Yes
              </button>
              <button className=" z-depth-0 btn-small z-depth-0" onClick={toggle}>
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
