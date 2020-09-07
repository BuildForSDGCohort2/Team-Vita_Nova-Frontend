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
                console.log(data)
                commit('addEmployeeSuccess', data)
                return Promise.resolve(res)
            },
            error => {
                console.log('failure')
                commit('addEmployeeFailure')
                return Promise.reject(error)
            }
        )

    }

}

