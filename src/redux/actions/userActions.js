import * as actionTypes from "./actionTypes";
import * as userApi from "../../api/userApi";

export function logInSuccess(user) {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}

export function logInRequest(user) {
  return { type: actionTypes.LOGIN_REQUEST, user };
}

export function logInFailure(user) {
  return { type: actionTypes.LOGIN_FAILURE, error };
}

export function signUpSuccess(user) {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}

export function signUpRequest(user) {
  return { type: actionTypes.SIGNUP_REQUEST, user };
}

export function signUpSuccess(user) {
  return { type: actionTypes.SIGNUP_SUCCESS, user };
}

export function signUpFailure(user) {
  return { type: actionTypes.SIGNUP_FAILURE, user };
}

export function logIn(user) {
  return function (dispatch) {
    dispatch(logInRequest(user));
    return userApi
      .signIn()
      .then((loggedUser) => {
        dispatch(signInSuccess(loggedUser));
      })
      .catch((error) => {
        dispatch(logInFailure(error));
        console.log(error);
      });
  };
}

export function signUp(user) {
  return function (dispatch) {
    dispatch(signUpRequest);
    return userApi
      .signUp(user)
      .then((user) => {
        dispatch(signUpSuccess(user));
      })
      .catch((error) => {
        dispatch(signUpFailure(user));
        console.log(error);
      });
  };
}
