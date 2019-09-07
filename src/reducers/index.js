import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import boardReducer from "./boardReducer";
import taskReducer from "./taskReducer";
import panelReducer from "./panelReducer";
import userReducer from "./userReducer";
import timerReducer from "./timerReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  boards: boardReducer,
  panels: panelReducer,
  tasks: taskReducer,
  user: userReducer,
  ui: uiReducer,
  timer: timerReducer,
});
