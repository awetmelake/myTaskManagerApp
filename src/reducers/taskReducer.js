import { STOP_TIMER, TOGGLED_TASK_FOCUS, EDITED_TASK } from "../actions/types";

const initialState = {
  tasks: [],
  filter: null,
  largeNames: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLED_TASK_SIZE":
      return { ...state, largeNames: !state.largeNames };
    case "@@reduxFirestore/LISTENER_RESPONSE":
      if (action.meta.subcollections[0].collection === "tasks") {
        return { ...state, tasks: [...action.payload.ordered] };
      } else {
        return state;
      }
    case "@@reduxFirestore/DOCUMENT_MODIFIED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id) {
              return task.id === action.payload.data.id
                ? { ...action.payload.data }
                : task;
            } else {
              return task.title === action.payload.data.title &&
                task.panel === action.payload.data.panel &&
                task.color === action.payload.data.color
                ? { ...action.payload.data }
                : task;
            }
          })
        };
      } else {
        return state;
      }
    case "@@reduxFirestore/DOCUMENT_ADDED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: [...state.tasks, action.payload.data]
        };
      } else {
        return state;
      }
    case "@@reduxFirestore/DOCUMENT_REMOVED":
      if (action.meta.subcollections[0].collection === "tasks") {
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.data.id ? {} : task
          )
        };
      } else {
        return state;
      }
    case EDITED_TASK:
      return { ...state };
    case TOGGLED_TASK_FOCUS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, focused: !task.focused }
            : { ...task, focused: false }

        )
      };
    case "SET_TASK_FILTER":
      return {
        ...state,
        filter: action.payload
      };
    case STOP_TIMER:
      return { ...state };
    default:
      return state;
  }
};
