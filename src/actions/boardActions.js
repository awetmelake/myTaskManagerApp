//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";

import { CREATED_BOARD, DELETED_BOARD, FETCHED_USER_BOARDS } from "./types";

export const createBoard = board => (dispatch, getState) => {
  dispatch({
    type: CREATED_BOARD,
    payload: board
  });
  pushUserBoards();
};

export const deleteBoard = id => (dispatch, getState) => {
  pushUserBoards();
  dispatch({
    type: DELETED_BOARD
  });
};

export const changeBoardTitle = newTitle => (dispatch, getState) => {
  pushUserBoards();
  dispatch({
  });
};

export const fetchUserBoards = id => (dispatch, getState) => {
  // fetched user boards panels and tasks because react firebase listeners are disfunctional
  const userId = getState().firebase.auth.uid;
  const boards = [];

  db.collection("users")
    .doc(userId)
    .collection("boards")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        boards.push(doc.data());
        console.log(doc.data());
      });
      dispatch({
        type: FETCHED_USER_BOARDS,
        payload: boards
      });
    });
  console.log(userId + " " + boards);
};

export const pushUserBoards = () => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const boards = getState().boards.boards;
  boards.forEach(board => {
    db.doc(`users/${userId}/boards/${board.id}`).set(board);

    dispatch({
      type: "PUSHED_USER_BOARD"
    });
  });
};
