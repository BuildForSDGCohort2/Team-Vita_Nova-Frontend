import * as actionTypes from "../actions/actionTypes";

export function distributorReducer(state, action) {
  switch (action.type) {
    case actionTypes.GET_DISTRIBUTORS_SUCCESS:
      return { ...state, distributors: action.distributors };
    case actionTypes.GET_DISTRIBUTORS_FAILURE:
      return { ...state, distributors: [] };
    default:
      return state;
  }
}
