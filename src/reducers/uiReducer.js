import { CHANGED_PANEL_TITLE } from "../actions/types";

const initialState = {
  update: 0,
  loading: false,
  notification: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UI_LOADING_INIT":
      return { ...state, loading: true };
    case "UI_LOADING_COMPLETE":
      return { ...state, loading: false };
    case CHANGED_PANEL_TITLE:
      return {
        ...state,
        notification: `Changed panel ${action.payload.from} title to ${action.payload.to}`
      };
    default:
      return state;
  }
};
