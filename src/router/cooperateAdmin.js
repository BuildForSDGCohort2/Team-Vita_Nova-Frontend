

import Employee from "../views/cooperateAdmin/Employee"
import Courses from "../views/cooperateAdmin/Courses"
import CourseModule from "../views/cooperateAdmin/CourseModule";

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
        component: Employee,
        children: [
            {
                path: '',
                name: 'employeeRedirect',
                redirect: { name: 'employeeContainer' }
            },
            {
                path: "employees",
                name: "employeeContainer",
                component: () => import("../views/cooperateAdmin/EmployeesContainer")
            }, {
                path: "departments",
                name: "departments",
                component: () => import("../views/cooperateAdmin/Departments")
            }
            , {
                path: "departments/:department",
                name: "department",
                component: () => import("../views/cooperateAdmin/Department")
            }
        ],
        meta: {
            requiresAuth: true
        }

    },
    {
        path: "/corperate/courses",
        component: Courses,
        children: [
            {
                path: '',
                name: 'courseRedirect',
                redirect: { name: 'myCourses' }
            },
            {
                path: "exploreCourses",
                name: "exploreCourses",
                component: () => import("../views/cooperateAdmin/ExploreCourses")
            }, {
                path: "myCourses",
                name: 'myCourses',
                component: () => import("../views/cooperateAdmin/MyCourses")
            },
            {
                path: "createCourse",
                name: 'createCourse',
                component: () => import("../components/cooperateAdmin/courses/myCourses/CreateCourse")
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
    },

    {
        path: "/cooperate/courseModule",
        component: CourseModule,
        children: [
            {
                path: "",
                name: "courseModule",
                redirect: { name: "courseModule.publish" }
            }, {
                path: "publish",
                name: "courseModule.publish",
                component: () =>
                    import("../views/cooperateAdmin/Publish")
            }, {
                path: "curriculum",
                name: "courseModule.curriculum",
                component: () =>
                    import("../views/cooperateAdmin/Curriculum")
            },

        ],
        meta: {
            requiresAuth: true
        }
    }
]
