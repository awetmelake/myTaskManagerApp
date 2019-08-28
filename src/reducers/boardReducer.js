import {
  CREATED_BOARD,
  DELETED_BOARD,
  FETCHED_USER_BOARDS
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_BOARD:
      return {};
    case DELETED_BOARD:
      return {};
    case FETCHED_USER_BOARDS:
      return [...action.payload];
    // store ordered data in state.board
    case "@@reduxFirestore/LISTENER_RESPONSE":
      return [...action.payload.ordered];
    // case "CREATED_PANEL":
    //   return [...state.boards.map(board =>{
    //     board.id === action.payload.boardId
    //   } )];

    case "DELETED_PANEL":
      return {};
    case "CREATED_TASK":
      return {};
    case "DELETED_TASK":
      return {};

    default:
      return state;
  }
};
