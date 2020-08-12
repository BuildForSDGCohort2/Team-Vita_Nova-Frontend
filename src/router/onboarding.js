import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Onboarding",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/onboarding/Onboarding.vue"
      )
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/onboarding/LoginPage")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/onboarding/RegisterPage")
  },
  {
    path: "/success",
    name: "registration_successful",

    component: () => import("../components/splashPages/ConfirmEmailPage")
  },
  {
    path: "/password-reset",
    name: "reset_password",

    component: () => import("../views/onboarding/ResetPassword")
  }
];
