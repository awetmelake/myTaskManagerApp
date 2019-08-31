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
  UI_LOADING_COMPLETE
} from "./types";

export const createBoard = boardTitle => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  let newBoardId;

  const newBoard = {
    title: boardTitle,
    panels: 3
  };

  const defaultPanels = [
    {
      title: "To do",
      index: 0
    },
    {
      title: "In progress",
      index: 1
    },
    {
      title: "Done",
      index: 2
    }
  ];

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
              dispatch(createPanel(panel.title, newBoardId, panel.index));
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
  const deletePanelIds = [];
  const deletePanels = getState().panels.panels.filter(panel => {
    deletePanelIds.push(panel.id);
    return panel.board !== boardId;
  });
  const tasks = getState().tasks.tasks;
  const deleteTasks = tasks.filter(task =>
    deletePanelIds.some(id => task.panel === id)
  );
  db.doc(`users/${userId}/boards/${boardId}`)
    .delete()
    .then(() => {
      dispatch({
        type: DELETED_BOARD
      });
      // delete panels and tasks associated with board
      deletePanels.forEach(panel => {
        db.doc(`users/${userId}/panels/${panel.id}`).delete();
      });
      deleteTasks.forEach(task => {
        db.doc(`users/${userId}/tasks/${task.id}`).delete();
      });
    });
};

export const changeBoardTitle = (newTitle, boardId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const oldTitle = getState().boards.boards.filter(
    board => board.id === boardId
  )[0].title;
  if (newTitle.length) {
    db.doc(`users/${userId}/panels/${boardId}`)
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

  dispatch({});
};
