//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";
import { EDITED_TASK, CREATED_TASK, DELETED_TASK } from "./types";

//params task object, the target panel and the target board id/title
export const createTask = newTask => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  db.collection(`users/${userId}/tasks`)
    .add(newTask)
    .then(docRef =>
      db.doc(`users/${userId}/tasks/${docRef.id}`).update({ id: docRef.id })
    )
    .then(() => {
      dispatch({
        type: CREATED_TASK
      });
    });
};

//params task object, the target panel and the target board id/title
export const delTask = taskId => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  db.doc(`users/${userId}/tasks/${taskId}`)
    .delete()
    .then(() => {
      dispatch({
        type: DELETED_TASK,
        payload: taskId
      });
    });
};

export const editTask = newTask => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  db.doc(`users/${userId}/tasks/${newTask.id}`)
    .set({
      ...newTask
    })
    .then(() => {
      dispatch({
        type: EDITED_TASK
      });
    });
};
