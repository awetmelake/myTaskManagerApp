//firebase
// import { fb } from "../config/fbConfig";
//firestore
import { START_TIMER, STOP_TIMER, SET_TIMER_TARGET } from "./types";

//params task object, the target panel and the target board id/title
export const startTimer = () => (dispatch, getState) => {
  const timer = getState().timer;

  if (!timer.timerTarget) {
    dispatch({ type: "TOGGLED_SELECT_MODE" });
  } else {
    dispatch({ type: START_TIMER });
  }
};

export const setTimerTarget = taskId => (dispatch, getState) => {
  dispatch({ type: SET_TIMER_TARGET, payload: taskId });
  dispatch({ type: START_TIMER });
};

export const stopTimer = () => (dispatch, getState) => {
  dispatch({ type: STOP_TIMER });
};

export const setType = type => (dispatch, getState) => {
  dispatch({ type: "SET_TIMER_TYPE", payload: type });
};

export const setSettings = type => (dispatch, getState) => {};
