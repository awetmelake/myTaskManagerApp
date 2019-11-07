import {
  START_TIMER,
  STOP_TIMER,
  SET_TIMER_TARGET,
  UNSET_TIMER_TARGET,
  SET_TIMER_TYPE,
  TOGGLED_TIMER_SET
} from "../actions/types";

const initialState = {
  isRunning: false,
  type: "pomodoro",
  target: null,
  err: null,
  isVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER_TARGET:
      return !state.isRunning ? { ...state, target: action.payload } : state;
    case SET_TIMER_TYPE:
      return {
        ...state,
        type: action.payload
      };
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
        err: null
      };
    case TOGGLED_TIMER_SET:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case STOP_TIMER:
      return { ...state, isRunning: false, target: null };
      break;
    default:
      return state;
  }
};
