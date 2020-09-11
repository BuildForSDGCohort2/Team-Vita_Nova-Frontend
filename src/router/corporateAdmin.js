

import Employee from "../views/corporateAdmin/Employee"
import Courses from "../views/corporateAdmin/coursesView/Courses"
import CourseModule from "../views/corporateAdmin/CourseModule";
import MyCourses from "@/components/corporateAdmin/courses/myCourses/MyCourses";
import Dashboard from "@/views/corporateAdmin/Dashboard";

export default [
    {
        path: "/corporate/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/corporateAdmin/Dashboard"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/corporate/employee/",
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
                component: () => import("../views/corporateAdmin/EmployeesContainer")
            }, {
                path: "departments",
                name: "departments",
                component: () => import("../views/corporateAdmin/Departments")
            }
            , {
                path: "departments/:department",
                name: "department",
                component: () => import("../views/corporateAdmin/Department")
            }
        ],
        meta: {
            requiresAuth: true
        }

    },
    {
        path: "/corporate/courses",
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
                component: () => import("../views/corporateAdmin/coursesView/ExploreCourses")
            },
            {
                path: "myCourses",
                name: 'courses.myCourses',
                component: () => import("../views/corporateAdmin/coursesView/MyCourses")
            },
            {
                path: "createCourse",
                name: 'courses.createCourse',
                component: () => import("../components/corporateAdmin/courses/myCourses/CreateCourse")
            },
        ],
        meta: {
            requiresAuth: true
        }
    }
    ,
    {
        path: "/corporate/preview-profile",
        name: "PreviewProfile",
        component: () =>
            import("../views/corporateAdmin/PreviewProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/corporate/update-profile",
        name: "UpdateProfile",
        component: () =>
            import("../views/corporateAdmin/UpdateProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: "/corporate/courseModule",
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
                    import("../views/corporateAdmin/Publish")
            }, {
                path: "curriculum",
                name: "courseModule.curriculum",
                component: () =>
                    import("../views/corporateAdmin/Curriculum")
            },

        ],
        meta: {
            requiresAuth: true
        }
    }
]
