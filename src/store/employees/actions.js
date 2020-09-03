import UserService from '../../services/user-services'

export default {
    getEmployees({ commit }) {

        return UserService.getEmployees().then(
            res => {

                commit('retrievedEmployeesSuccess', res.data)
                return Promise.resolve(res.data)
            },
            error => {
                commit('retrievedEmployeesFail');
                return Promise.reject(error)
            }
        )
    },
    async addEmployee({ commit }, data) {
        return UserService.addEmployee(data).then(
            res => {

                commit('addEmployeeSuccess', data)
                return Promise.resolve(res)
            },
            error => {
                commit('addEmployeeFailure')
                return Promise.reject(error)
            }
        )

    }

}

