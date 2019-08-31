//firebase
import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";

import {
  CREATED_PANEL,
  DELETED_PANEL,
  CHANGED_PANEL_TITLE,
  PANEL_ERR
} from "./types";

//params newPanel object, target board id
export const createPanel = (newPanelTitle, boardId) => (
  dispatch,
  getState
) => {
  const userId = getState().firebase.auth.uid;
  const targetBoard = getState().boards.boards.filter(
    board => board.id === boardId
  )[0];

  const newPanel = {
    board: boardId,
    title: newPanelTitle,
    index: getState().boards.boards.length
  };

  if (newPanel.title.length > 0) {
    db.collection(`users/${userId}/panels`)
      .add(newPanel)
      .then(docRef =>
        db.doc(`users/${userId}/panels/${docRef.id}`).update({ id: docRef.id })
      )
      .then(() => {
        dispatch({
          type: CREATED_PANEL
        });
      });
    //increment panels property of target board
    db.doc(`users/${userId}/boards/${boardId}`).update({
      panels: targetBoard.panels + 1
    });
  } else {
    dispatch({ type: PANEL_ERR, payload: "Invalid title" });
  }
};

//params newPanelTitle, target panelTitle, target board id
export const deletePanel = (panelId, boardId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const targetBoard = getState().boards.boards.filter(
    board => board.id === boardId
  )[0];

  db.doc(`users/${userId}/panels/${panelId}`)
    .delete()
    .then(() => {
      dispatch({
        type: DELETED_PANEL,
        payload: panelId
      });
    });

  //decrement panels property of target board
  db.doc(`users/${userId}/boards/${boardId}`).update({
    panels: targetBoard.panels - 1
  });
};

//params newPanelTitle, target panelTitle, target board id
export const changePanelTitle = (newTitle, panelId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const oldTitle = getState().panels.panels.filter(
    panel => panel.id === panelId
  )[0].title;
  if (newTitle.length) {
    db.doc(`users/${userId}/panels/${panelId}`)
      .update({
        title: newTitle
      })
      .then(() => {
        dispatch({
          type: CHANGED_PANEL_TITLE,
          payload: { from: oldTitle, to: newTitle }
        });
      });
  } else {
    dispatch({ type: PANEL_ERR, payload: "Invalid title" });
  }
};

//params newPanelTitle, target panelTitle, target board id
export const moveRight = (panelId, curIndex) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  // panel which we are swaping position with
  const adjustPanel = getState().panels.panels.filter(
    panel => panel.index === curIndex + 1
  )[0];
  db.doc(`users/${userId}/panels/${panelId}`).update({
    index: curIndex + 1
  });

  db.doc(`users/${userId}/panels/${adjustPanel.id}`).update({
    index: curIndex
  });
};

//params newPanelTitle, target panelTitle, target board id
export const moveLeft = (panelId, curIndex) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  // panel which we are swaping position with
  const adjustPanel = getState().panels.panels.filter(
    panel => panel.index === curIndex - 1
  )[0];
  db.doc(`users/${userId}/panels/${panelId}`).update({
    index: curIndex - 1
  });

  db.doc(`users/${userId}/panels/${adjustPanel.id}`).update({
    index: curIndex
  });
};
