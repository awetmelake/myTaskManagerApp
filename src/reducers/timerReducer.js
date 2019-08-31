import {
  START_TIMER,
  STOP_TIMER,
  SET_TIMER_TARGET,
  UNSET_TIMER_TARGET
} from "../actions/types";

const initialState = {
  isRunning: false,
  timerTarget: null,
  err: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER_TARGET:
      return !state.isRunning
        ? { ...state, timerTarget: action.payload }
        : state;
    case UNSET_TIMER_TARGET:
      return {
        ...state,
        timerTarget: false
      };

    case START_TIMER:
      return state.timerTarget
        ? {
            ...state,
            isRunning: true,
            err: null
          }
        : { ...state, err: "Please select a task to initiate timer" };

    case STOP_TIMER:
      return { ...state };
      break;
    default:
      return state;
  }
};
