

import NativeDashboard from "../views/native/Dashboard"


export default [

    {
        path: "/native/nativedashboard",
        name: "NativeDashboard",
        component: NativeDashboard,
        children: [{
            path: "home",
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