//firebase
// import { fb } from "../config/fbConfig";
//firestore
import {
  START_TIMER,
  STOP_TIMER,
  SET_TIMER_TARGET,
  TOGGLED_SELECT_MODE,
  SET_TIMER_TYPE
} from "./types";

import { setTime, toggleFocus } from "./taskActions";

//params task object, the target panel and the target board id/title
export const startTimer = () => (dispatch, getState) => {
  const timer = getState().timer;

  if (!timer.target) {
    dispatch({ type: TOGGLED_SELECT_MODE });
  } else {
    dispatch({ type: START_TIMER });
  }
};

export const setTimerTarget = taskId => (dispatch, getState) => {
  dispatch({ type: SET_TIMER_TARGET, payload: taskId });
  dispatch({ type: START_TIMER });
};

export const setTimerType = type => (dispatch, getState) => {
  dispatch({ type: SET_TIMER_TYPE, payload: type });
};

export const toggleSelectMode = () => (dispatch, getState) => {
  dispatch({ type: TOGGLED_SELECT_MODE });
};

export const stopTimer = time => (dispatch, getState) => {
  console.log(time)
  const taskId = getState().timer.target
  dispatch(setTime(time));
  dispatch({ type: STOP_TIMER });
  dispatch(toggleFocus(taskId));
};
