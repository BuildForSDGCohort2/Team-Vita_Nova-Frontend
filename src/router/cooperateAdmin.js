

import Employee from "../views/cooperateAdmin/Employee"
import Courses from "../views/cooperateAdmin/coursesView/Courses"
import CourseModule from "../views/cooperateAdmin/CourseModule";
import MyCourses from "@/components/cooperateAdmin/courses/myCourses/MyCourses";
import Dashboard from "@/views/cooperateAdmin/Dashboard";

export default [
    {
        path: "/cooperate/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/cooperateAdmin/Dashboard"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/cooperate/employee/",
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
        path: "/cooperate/courses",
        name: 'courses',
        component: Courses,
        children: [
            {
                path: '',
                name: 'courseRedirect',
                redirect: { name: 'courses.myCourses' }
            },
            {
                path: "exploreCourses",
                name: "courses.exploreCourses",
                component: () => import("../views/cooperateAdmin/coursesView/ExploreCourses")
            },
            {
                path: "myCourses",
                name: 'courses.myCourses',
                component: () => import("../views/cooperateAdmin/coursesView/MyCourses")
            },
            {
                path: "createCourse",
                name: 'courses.createCourse',
                component: () => import("../components/cooperateAdmin/courses/myCourses/CreateCourse")
            },
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
