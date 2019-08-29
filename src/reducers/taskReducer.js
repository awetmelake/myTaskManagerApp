import {} from "../actions/types";

const initialState = {
  tasks: [],
  filter: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "@@reduxFirestore/LISTENER_RESPONSE":
      if (action.meta.subcollections[0].collection === "tasks") {
        return { ...state, tasks: [...action.payload.ordered] };
      }
    case "@@reduxFirestore/DOCUMENT_MODIFIED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.title === action.payload.data.title && !task.id
              ? { ...action.payload.data }
              : task
          )
        };
      }
    case "@@reduxFirestore/DOCUMENT_ADDED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: [...state.tasks, action.payload.data]
        };
      }
    case "@@reduxFirestore/DOCUMENT_REMOVED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.data.id ? {} : task
          )
        };
      }
    case "EDITED_TASK":
      return { ...state };

    default:
      return state;
  }
};
