import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import boardReducer from "./boardReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  boards: boardReducer
});
