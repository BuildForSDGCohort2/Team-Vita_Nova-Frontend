import * as actionTypes from "../actions/actionTypes";

export default function signUpReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return { ...state, registring: true };

    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, registered: true };

    default:
      return {};
  }
}
