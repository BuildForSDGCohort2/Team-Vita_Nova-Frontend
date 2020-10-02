import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, loggedIn: true, user: action.user };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, loggedIn: false, user: {} };
    case actionTypes.LOGOUT:
      return { ...state, loggedIn: false, user: {} };
    default:
      return state;
  }
}
