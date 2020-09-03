export default [
    {
        path: "/",
        name: "Onboarding",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/Onboarding.vue")
    },
    {
        path: "/login",
        name: "Login",
        meta: { layout: 'Register' },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/LoginPage")
    },
    {
        path: "/register",
        name: "Register",
        meta: { layout: 'Login' },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/RegisterPage")
    },
    {
        path: "/browseCourses",
        name: "ExploreCourses",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/ExploreCourses")
    },
    {
        path: "/plans",
        name: "Plans",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/Plans")
    },
    {
        path: "/success",
        name: "registration_successful",
        meta: { layout: 'Login' },

    component: () => import("../components/splashPages/ConfirmEmailPage")
  },
  {
    path: "/password-reset",
    name: "reset_password",

    component: () => import("../views/onboarding/ResetPassword")
  }
];
