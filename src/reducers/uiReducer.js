import {
  CHANGED_PANEL_TITLE,
  CHANGED_BOARD_TITLE,
  UI_LOADING_INIT,
  UI_LOADING_COMPLETE,
  SET_NOTIFICATION,
  CLEARED_NOTIFICATION
} from "../actions/types";

const initialState = {
  update: 0,
  isLoading: false,
  notification: "",
  selectMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UI_LOADING_INIT:
      return { ...state, isLoading: true };
    case UI_LOADING_COMPLETE:
      return { ...state, isLoading: false };
    case CHANGED_PANEL_TITLE:
      return {
        ...state,
        notification: `Renamed panel ${action.payload.from} to ${action.payload.to}`
      };
    case CHANGED_BOARD_TITLE:
      return {
        ...state,
        notification: `Renamed board ${action.payload.from} to ${action.payload.to}`
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    case CLEARED_NOTIFICATION:
      return {
        ...state,
        notification: null
      };
    case "TOGGLED_SELECT_MODE":
      return {
        ...state,
        selectMode: !state.selectMode
      };
    default:
      return state;
  }
};
