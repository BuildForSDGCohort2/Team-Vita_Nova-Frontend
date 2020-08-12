<<<<<<< HEAD
export default {
    loginSuccess: (state, user) => {
        state.status.loggedIn = true;
        state.user = user;
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

=======
export default {
    loginSuccess: (state, user) => {
        state.status.loggedIn = true;
        state.user = user;
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

>>>>>>> c1941650879b0b865d556073373c517baea335fc
}