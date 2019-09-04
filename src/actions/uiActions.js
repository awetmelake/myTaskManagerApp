import { CLEARED_NOTIFICATION, SET_NOTIFICATION } from "./types";

export const clearNotification = () => dispatch => {
  dispatch({ type: CLEARED_NOTIFICATION });
};

export const setNotification = notification => dispatch => {
  dispatch({ type: "SET_NOTIFICATION", payload: notification });
};

export const toggleSelectMode = notification => dispatch => {
  dispatch({ type: "TOGGLED_SELECT_MODE" });
};
