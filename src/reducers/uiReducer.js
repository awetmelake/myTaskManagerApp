import {} from "../actions/types";

const initialState = {
  update: 0,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UI_LOADING_INIT":
      return { ...state, loading: true };
    case "UI_LOADING_COMPLETE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
