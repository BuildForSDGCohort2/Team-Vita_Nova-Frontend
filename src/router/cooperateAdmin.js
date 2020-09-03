

import Employee from "../views/cooperateAdmin/Employee"
import Courses from "../views/cooperateAdmin/Courses"

export default [
    {
        path: "/corperate/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/cooperateAdmin/Dashboard"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/corperate/employee/",
        name: "Employee",
        component: Employee,
        children: [{
            path: "employees",
            component: () => import("../views/cooperateAdmin/EmployeesContainer")
        }, {
            path: "departments",
            component: () => import("../views/cooperateAdmin/Departments")
        }],
        meta: {
            requiresAuth: true
        }

    },
    {
        path: "/corperate/courses",
        name: "ManageCourses",
        component: Courses,
        children: [
            {
                path: "viewCourses",
                component: () => import("../views/cooperateAdmin/ViewCourses")
            },
            {
                path: "createCourse",
                component: () => import("../views/cooperateAdmin/CreateCourse")
            }
        ],
        meta: {
            requiresAuth: true
        }
    }
    ,
    {
        path: "/corperate/preview-profile",
        name: "PreviewProfile",
        component: () =>
            import("../views/cooperateAdmin/PreviewProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/corperate/update-profile",
        name: "UpdateProfile",
        component: () =>
            import("../views/cooperateAdmin/UpdateProfile")
        ,
        meta: {
            requiresAuth: true
        }
    }
]