export default {
    loginSuccess: (state, user) => {
        state.status.loggedIn = true;
        state.user = JSON.parse(user);
    },
    loginFailure: (state) => {
        state.status.loggedIn = false;
        state.user = null;
    },
    logout: (state) => {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess: (state) => {
        state.status.loggedIn = false;
    },
    registerFailure: (state) => {
        state.status.loggedIn = false;
    },

}