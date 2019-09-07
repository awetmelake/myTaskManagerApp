import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import boardReducer from "./boardReducer";
import taskReducer from "./taskReducer";
import panelReducer from "./panelReducer";
import timerReducer from "./timerReducer";
import uiReducer from "./uiReducer";
import authReducer from "./authReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  boards: boardReducer,
  panels: panelReducer,
  tasks: taskReducer,
  ui: uiReducer,
  timer: timerReducer,
  auth: authReducer
});
