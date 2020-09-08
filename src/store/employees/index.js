import actions from './actions'
import getters from './getters'
import mutations from './mutations'




const initialState = {

    isPresent: false,
    data: { msg: "No Employees Found" }

}

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters
};