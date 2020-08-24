import { login, register, logout, } from '../../services/auth-services'

export default {
    async userLogin({ commit }, user) {
        return login(user).then(
            user => {
                console.log(user)
                commit('loginSuccess', user);

                return Promise.resolve(user);
            },
            error => {
                commit('loginFailure');
                return Promise.reject(error)
            }
        );

    },
    async userLogout({ commit }) {
        logout();
        await commit('logout');
    },
    async userRegister({ commit }, user) {
        return await register(user).then(
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