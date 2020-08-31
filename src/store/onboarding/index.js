import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const user = JSON.parse(localStorage.getItem('userData'));
const userToken = JSON.parse(localStorage.getItem('userToken'));

const initialState = userToken
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: {} };

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
};
