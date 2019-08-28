import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createFirestoreInstance } from "redux-firestore";
import store from "../store";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDA2nCpKOjn_vDolenfqT9NmBz8U5W6sx4",
  authDomain: "taskflow-2d0d4.firebaseapp.com",
  databaseURL: "https://taskflow-2d0d4.firebaseio.com",
  projectId: "taskflow-2d0d4",
  storageBucket: "",
  messagingSenderId: "667413845287",
  appId: "1:667413845287:web:c5abc0e270acf920"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
