import Vue from "vue";
import VueRouter from "vue-router";
import onboarding from "./onboarding";
import cooperateAdmin from "./cooperateAdmin";
import store from "../store";

Vue.use(VueRouter);

const routes = [...onboarding, ...cooperateAdmin];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.onboarding.status.loggedIn || user) {
      next();
    } else {
      next("/login");
    }
  } else if (user) {
    next("cooperate/dashboard");
  } else {
    next();
  }
});

export default router;
