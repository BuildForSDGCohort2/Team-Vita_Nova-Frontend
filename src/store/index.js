import Vue from "vue";
import Vuex from "vuex";

import onboarding from './onboarding'
import employees from './employees'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    onboarding,
    employees
  }
});
