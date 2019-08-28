//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";
import { pushUserBoards } from "./boardActions";
import { CHANGED_TASK_TITLE, CREATED_TASK, DELETED_TASK } from "./types";

//params task object, the target panel and the target board id/title
export const createTask = (task, panelTitle, boardId) => (
  dispatch,
  getState
) => {
  dispatch({
    type: CREATED_TASK,
    payload: task,
    panelTitle,
    boardId
  });
  pushUserBoards();
};
