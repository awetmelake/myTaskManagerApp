// firebase
import { fb } from "../config/fbConfig";

//firestore
import { db } from "../config/fbConfig";

import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./types";

export const guestLogin = () => (dispatch, getState) => {
  fb.auth()
    .signInAnonymously()
    .then(() => {
      dispatch({
        type: LOGIN_SUCCESS
      });
    });
};

export const logIn = credentials => (dispatch, getState) => {
  fb.auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.message
      });
    });
};

export const signOut = () => (dispatch, getState) => {
  fb.auth()
    .signOut()
    .then(() => {
      dispatch({
        type: SIGNOUT_SUCCESS
      });
    });
};

export const createUser = credentials => (dispatch, getState) => {
  if (
    credentials.password === credentials.confirmPassword &&
    credentials.password.length > 5
  ) {
    fb.auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        dispatch({
          type: SIGNUP_SUCCESS
        });
      })
      .catch(err => dispatch({ type: SIGNUP_ERROR, payload: err.message }));
  } else if (credentials.password.length < 5) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: "password must be atleast 6 characters"
    });
  } else if (credentials.password !== credentials.confirmPassword) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: "passwords must match"
    });
  }
};
