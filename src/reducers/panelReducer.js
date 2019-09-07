import { CREATED_PANEL, DELETED_PANEL, PANEL_ERR } from "../actions/types";

const initialState = {
  panels: [],
  err: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_PANEL:
      return { ...state, err: null };
    case DELETED_PANEL:
      return state;
    case PANEL_ERR:
      return { ...state, err: action.payload };
    case "CLEAR_PANEL_ERR":
      return { ...state, err: null };

    case "@@reduxFirestore/LISTENER_RESPONSE":
      if (action.meta.subcollections[0].collection === "panels") {
        return { ...state, panels: [...action.payload.ordered] };
      } else {
        return state;
      }

    case "@@reduxFirestore/DOCUMENT_MODIFIED":
      if (action.meta.subcollections[0].collection === "panels") {
        return {
          ...state,
          panels: state.panels.map(panel => {
            if (panel.id) {
              return panel.id === action.payload.data.id
                ? { ...action.payload.data }
                : panel;
            } else {
              return panel.title === action.payload.data.title
                ? { ...action.payload.data }
                : panel;
            }
          })
        };
      } else {
        return state;
      }

    case "@@reduxFirestore/DOCUMENT_ADDED":
      if (action.meta.subcollections[0].collection === "panels") {
        return {
          ...state,
          panels: [...state.panels, action.payload.data]
        };
      } else {
        return state;
      }
    case "@@reduxFirestore/DOCUMENT_REMOVED":
      if (action.meta.subcollections[0].collection === "panels") {
        return {
          ...state,
          panels: state.panels.map(panel =>
            panel.id === action.payload.data.id ? {} : panel
          )
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
