//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { db } from "../config/fbConfig";

import { CREATED_PANEL, DELETED_PANEL, CHANGED_PANEL_TITLE } from "./types";

//params newPanel object, target board id
export const createPanel = (newPanel, boardId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const boards = getState().boards.boards;
  // const curBoard = boards.filter(board => board.id === boardId);

  db.collection("users")
    .doc(userId)
    .collection("boards")
    .doc(boardId)
    .update({
      panels: [...boards.panels, newPanel]
    })
    .then(() => {
      dispatch({
        type: CREATED_PANEL
      });
    });
};

//params newPanelTitle, target panelTitle, target board id
export const changePanelTitle = (newTitle, panelTitle, boardId) => (
  dispatch,
  getState
) => {
  const userId = getState().firebase.auth.uid;
  const boards = getState().boards.boards;
  const curBoard = boards.filter(board => board.id === boardId)[0];
  const curPanel = curBoard.panels.filter(panel => panel.title === panelTitle);
  curPanel.title = newTitle;
  const newPanels = [...curBoard.panels, curPanel];

  db.collection("users")
    .doc(userId)
    .collection("boards")
    .doc(boardId)
    .set({
      panels: newPanels
    })
    .then(() => {
      dispatch({
        type: CHANGED_PANEL_TITLE
      });
    });
};

//params newPanelTitle, target panelTitle, target board id
export const deletePanel = (panelTitle, boardId) => (dispatch, getState) => {
  const userId = getState().firebase.auth.uid;
  const boards = getState().boards.boards;
  const targetBoard = boards.filter(board => board.id === boardId)[0];
  const newPanels = targetBoard.panels.filter(
    panel => panel.title !== panelTitle
  );

  db.collection("users")
    .doc(userId)
    .collection("boards")
    .doc(boardId)
    .update({
      panels: newPanels
    })
    .then(() => {
      dispatch({
        type: DELETED_PANEL
      });
    });
};
