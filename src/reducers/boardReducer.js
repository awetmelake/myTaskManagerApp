import {
  CREATED_BOARD,
  DELETED_BOARD,
  FETCHED_USER_BOARDS
} from "../actions/types";

const initialState = {
  boards: [],
  showLegend: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_BOARD:
      return {};
    case DELETED_BOARD:
      return {};

    case "@@reduxFirestore/LISTENER_RESPONSE":
      if (action.meta.subcollections[0].collection === "boards") {
        return { ...state, boards: [...action.payload.ordered] };
      }

    default:
      return state;
  }
};
