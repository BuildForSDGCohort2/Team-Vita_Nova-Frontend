import Employee from "../views/cooperateAdmin/Employee"
import Courses from "../views/cooperateAdmin/Courses"

export default [
    {
        path: "/cooperate/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/cooperateAdmin/Dashboard.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/cooperate/employee/",
        name: "Employee",
        component: Employee,
        children: [{
            path: "allEmployees",
            component: () => import("../views/cooperateAdmin/AllEmployees")
        }, {
            path: "departments",
            component: () => import("../views/cooperateAdmin/Departments")
        }],
        meta: {
            requiresAuth: true
        }

    },
    {
        path: "/cooperate/courses",
        name: "Courses",
        component: Courses,
        children: [
            {
                path: "myCourses",
                component: () => import("../views/cooperateAdmin/MyCourses")
            },
            {
                path: "exploreCourses",
                component: () => import("../views/cooperateAdmin/ExploreCourses")
            }
        ],
        meta: {
            requiresAuth: true
        }
    }
    ,
    {
        path: "/cooperate/preview-profile",
        name: "PreviewProfile",
        component: () =>
            import("../views/cooperateAdmin/PreviewProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/cooperate/update-profile",
        name: "UpdateProfile",
        component: () =>
            import("../views/cooperateAdmin/UpdateProfile")
        ,
        meta: {
            requiresAuth: true
        }
    }
]
