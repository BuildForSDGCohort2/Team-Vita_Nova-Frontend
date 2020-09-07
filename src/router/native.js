

import NativeDashboard from "../views/native/Dashboard"


export default [

    {
        path: "/native/nativedashboard",
        component: NativeDashboard,
        children: [
            {
                path: '',
                name: 'homeRedirect',
                redirect: { name: 'home' }
            },
            {
                path: "home",
                name: "home",
                component: () => import("../views/native/Home")
            },
            {
                path: "learningPath",
                component: () => import("../views/native/LearningPath")
            },
            {
                path: "completedPath",
                component: () => import("../views/native/CompletedPath")
            }],
        meta: {
            requiresAuth: true
        }

    }

]