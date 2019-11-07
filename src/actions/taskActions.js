//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";
import {
  EDITED_TASK,
  CREATED_TASK,
  DELETED_TASK,
  TOGGLED_TASK_FOCUS,
  SET_TASK_TIME,
  MOVED_TASK,
  TOGGLED_TASK_SIZE
} from "./types";

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

export const moveTask = (taskId, panelId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  db.doc(`users/${userId}/tasks/${taskId}`)
    .update({
      panel: panelId
    })
    .then(() => {
      dispatch({
        type: MOVED_TASK
      });
    });
};

export const setTime = time => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const taskId = getState().timer.target;
  const tasks = getState().tasks.tasks;
  let taskTime = tasks.filter(task => task.id === taskId)[0].time;
  if (taskTime === null) {
    taskTime = 0;
  }
  taskTime += time;

  db.doc(`users/${userId}/tasks/${taskId}`)
    .update({
      time: taskTime
    })
    .then(() => {
      dispatch({
        type: SET_TASK_TIME,
        payload: taskTime
      });
    });
};

export const toggleFocus = taskId => (dispatch, getState) => {
  dispatch({ type: TOGGLED_TASK_FOCUS, payload: taskId });
};

export const toggleTaskSize = () => (dispatch, getState) => {
  let largeTasks = JSON.parse(localStorage.getItem("largeTasks")) || false;
  localStorage.setItem("largeTasks", !largeTasks);
  dispatch({ type: TOGGLED_TASK_SIZE });
};

export const setTaskFilter = filter => (dispatch, getState) => {
  dispatch({ type: "SET_TASK_FILTER", payload: filter });
};
