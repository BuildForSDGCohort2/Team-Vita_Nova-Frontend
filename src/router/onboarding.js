
import Home from "../views/Home.vue";

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
        path: "/explore-courses",
        name: "ExploreCourses",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/onboarding/ExploreCourses")
    },
    {
        path: "/success",
        name: "registration_successful",

        component: () => import("../components/splashPages/ConfirmEmailPage")
    }
    ,
    {
        path: "/password-reset",
        name: "reset_password",

        component: () => import("../views/onboarding/ResetPassword")
    }
]