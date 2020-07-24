import { login, register, logout, } from '../../services/auth-services'

export default {
    async userLogin({ commit }, user) {
        return await login(user).then(
            user => {
                commit('loginSuccess', user);
                return Promise.resolve(user);
            },
            error => {
                commit('loginFailure');
                return Promise.reject(error)
            }
        );

    },
    userLogout({ commit }) {
        logout();
        commit('logout');
    },
    userRegister({ commit }, user) {
        return register(user).then(
            response => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
            },
            error => {
                commit('registerFailure');
                return Promise.reject(error);
            }
        );
    }
}