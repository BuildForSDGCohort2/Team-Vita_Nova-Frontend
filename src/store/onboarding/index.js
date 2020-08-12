import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: {} };

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters
};