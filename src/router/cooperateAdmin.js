
import Home from "../views/Home.vue";


import Employee from "../views/cooperateAdmin/Employee"

export default [
    {
        path: "/cooperate/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/cooperateAdmin/Dashboard.vue")
    },
    {
        path: "/cooperate/employee",
        name: "Employee",
        component: Employee,
        children: [{
            path: "allEmployees",
            component: () => import("../views/cooperateAdmin/AllEmployees")
        },

            {
            path: "departments",
            component: () => import("../views/cooperateAdmin/Departments")
        }]

    },
    {
        path: "/cooperate/preview-profile",
        name: "PreviewProfile",
        component: () =>
            import("../views/cooperateAdmin/PreviewProfile")
    },
]