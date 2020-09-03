import Vue from "vue";
import VueRouter from "vue-router";
import onboarding from "./onboarding";
import native from './native'
import store from '../store'
import cooperateAdmin from "./cooperateAdmin";

Vue.use(VueRouter);

const routes = [
  ...onboarding,
  ...cooperateAdmin,
  ...native
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('userToken'));

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.onboarding.status.loggedIn || user) {
      next()
    } else {
      next('/login')
    }

  } else if (user) {
    next('corperate/dashboard')
  }
  else {
    next()
  }
})

export default router;
