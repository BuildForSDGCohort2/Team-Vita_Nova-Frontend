import Vue from "vue";
import VueRouter from "vue-router";
import onboarding from "./onboarding";
import cooperateAdmin from './cooperateAdmin'

Vue.use(VueRouter);

const routes = [
  ...onboarding,
  ...cooperateAdmin
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
