//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";
import { createPanel, deletePanel } from "./panelActions";
import { delTask } from "./taskActions";
import {
  CREATED_BOARD,
  DELETED_BOARD,
  BOARD_ERR,
  CHANGED_BOARD_TITLE,
  UI_LOADING_INIT,
  UI_LOADING_COMPLETE,
  // SET_NOTIFICATION
} from "./types";

export const createBoard = boardTitle => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const defaultPanels = [
    { title: "To do", index: 0 },
    { title: "In progress", index: 1 },
    { title: "Done", index: 2 }
  ];

  const newBoard = {
    title: boardTitle,
    panels: 3
  };

  let newBoardId;
  if (boardTitle.length > 0) {
    dispatch({ type: UI_LOADING_INIT });

    db.collection(`users/${userId}/boards`)
      .add(newBoard)

      .then(docRef => {
        newBoardId = docRef.id;
        db.doc(`users/${userId}/boards/${newBoardId}`)
          .update({
            id: newBoardId
          })
          .then(() => {
            // populate new board with default panels
            defaultPanels.forEach(panel => {
              db.collection(`users/${userId}/panels`)
                .add(panel)
                .then(docRef =>
                  db
                    .doc(`users/${userId}/panels/${docRef.id}`)
                    .update({ id: docRef.id, board: newBoardId })
                );
            });
          });
      })
      .then(() => {
        dispatch({
          type: CREATED_BOARD
        });
        dispatch({
          type: UI_LOADING_COMPLETE
        });
      });
  } else {
    dispatch({ type: "BOARD_ERR", payload: "Invalid Title" });
  }
};

export const deleteBoard = boardId => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const panelIdsToDelete = [];
  const panelsToDelete = getState().panels.panels.filter(panel =>
    panel.board !== boardId ? true : panelIdsToDelete.push(panel.id)
  );
  const tasks = getState().tasks.tasks;
  const taskIdsToDelete = tasks.filter(task =>
    panelIdsToDelete.some(id => task.panel === id)
  );
  dispatch({
    type: UI_LOADING_INIT
  });
  db.doc(`users/${userId}/boards/${boardId}`)
    .delete()
    .then(() => {
      dispatch({
        type: DELETED_BOARD
      });
      // delete panels and tasks associated with board
      panelIdsToDelete.forEach(id => {
        db.doc(`users/${userId}/panels/${id}`)
          .delete()
          .then(async () => {
            await taskIdsToDelete.forEach(async task => {
              await db.doc(`users/${userId}/tasks/${task.id}`).delete();
            });
            dispatch({
              type: UI_LOADING_COMPLETE
            });
          });
      });
    });
};

export const changeBoardTitle = (newTitle, boardId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const oldTitle = getState().boards.boards.filter(
    board => board.id === boardId
  )[0].title;
  if (newTitle.length) {
    db.doc(`users/${userId}/boards/${boardId}`)
      .update({
        title: newTitle
      })
      .then(() => {
        dispatch({
          type: CHANGED_BOARD_TITLE,
          payload: { from: oldTitle, to: newTitle }
        });
      });
  } else {
    dispatch({ type: BOARD_ERR, payload: "Invalid title" });
  }
};

export const toggleLegend = () => dispatch => {
  dispatch({ type: "TOGGLED_LEGEND" });
};

export const toggleBoardEditMode = () => dispatch => {
  dispatch({ type: "TOGGLE_BOARD_EDIT_MODE" });
};
