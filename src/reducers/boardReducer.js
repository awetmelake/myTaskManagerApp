import {
  CREATED_BOARD,
  DELETED_BOARD,
  CHANGED_BOARD_TITLE,
  BOARD_ERR,
  TOGGLED_LEGEND
} from "../actions/types";

const initialState = {
  boards: [],
  showLegend: JSON.parse(localStorage.getItem('showLegend')) || true,
  err: null,
  editMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_BOARD:
      return { ...state, err: null };
    case DELETED_BOARD:
      return state;
    case BOARD_ERR:
      return { ...state, err: action.payload };
    case "TOGGLE_BOARD_EDIT_MODE":
      return { ...state, editMode: !state.editMode };

    case "@@reduxFirestore/LISTENER_RESPONSE":
      if (action.meta.subcollections[0].collection === "boards") {
        return { ...state, boards: [...action.payload.ordered] };
      }
      else {
        return state;
      }

    case "@@reduxFirestore/DOCUMENT_MODIFIED":
      if (action.meta.subcollections[0].collection === "boards") {
        return {
          ...state,
          boards: state.boards.map(board => {
            if (board.id) {
              return board.id === action.payload.data.id
                ? { ...action.payload.data }
                : board;
            } else {
              return board.title === action.payload.data.title
                ? { ...action.payload.data }
                : board;
            }
          })
        };
      } else {
        return state;
      }

    case "@@reduxFirestore/DOCUMENT_ADDED":
      if (action.meta.subcollections[0].collection === "boards") {
        return {
          ...state,
          boards: [...state.boards, action.payload.data]
        };
      }
      else {
        return state;
      }
    case "@@reduxFirestore/DOCUMENT_REMOVED":
      if (action.meta.subcollections[0].collection === "boards") {
        return {
          ...state,
          boards: state.boards.filter(
            board => board.id !== action.payload.data.id
          )
        };
      }
      else {
        return state;
      }
    case TOGGLED_LEGEND:
      return {
        ...state,
        showLegend: !state.showLegend
      };

    default:
      return state;
  }
};
