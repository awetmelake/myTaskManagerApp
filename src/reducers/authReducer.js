const initialState = { err: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_ERROR":
      return { ...state, err: action.payload };
    case "LOGIN_ERROR":
      return { ...state, err: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, err: null };
    case "SIGNUP_SUCCESS":
      return { ...state, err: null };
    default:
      return state;
  }
};
