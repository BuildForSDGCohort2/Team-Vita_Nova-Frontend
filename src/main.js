import Vue from "vue";
import axios from 'axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import Login from './components/onboarding/layout/Login'
import Register from './components/onboarding/layout/Register'
import MainLayout from "./components/mainViews/layout/Header";

//axios
axios.defaults.baseURL = 'https://vitanova.herokuapp.com';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('Login', Login)
Vue.component('Register', Register)
Vue.component('MainLayout', MainLayout)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
