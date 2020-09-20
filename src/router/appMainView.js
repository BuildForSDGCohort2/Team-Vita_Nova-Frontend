import Employee from "../views/appMainView/Employee"
import Courses from "../views/appMainView/coursesView/Courses"
import CourseModule from "../views/appMainView/CourseModuleViews/CourseModule";

export default [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import("../views/appMainView/Dashboard"),
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
                component: () => import("../views/appMainView/EmployeesContainer")
            }, {
                path: "departments",
                name: "departments",
                component: () => import("../views/appMainView/Departments")
            }
            , {
                path: "departments/:department",
                name: "department",
                component: () => import("../views/appMainView/Department")
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
                component: () => import("../views/appMainView/coursesView/ExploreCourses")
            },
            {
                path: "myCourses",
                name: 'courses.myCourses',
                component: () => import("../views/appMainView/coursesView/MyCourses")
            },
            {
                path: "createCourse",
                name: 'courses.createCourse',
                component: () => import("../components/corporateAdmin/courses/myCourses/CreateCourse")
            },
            {
                path: "courseDetails",
                name: 'courses.courseDetails',
                props: true,
                component: () => import("../components/corporateAdmin/courses/CourseDetails")
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
            import("../views/appMainView/PreviewProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/corporate/update-profile",
        name: "UpdateProfile",
        component: () =>
            import("../views/appMainView/UpdateProfile")
        ,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: "/corporate/courseModule",
        name: "CourseModule",
        component: CourseModule,
        children: [
            {
                path: "",
                name: "courseModule",
                redirect: { name: "courseModule.curriculum" }
            },

            {
                path: "curriculum",
                name: "courseModule.curriculum",
                component: () =>
                    import("../views/appMainView/CourseModuleViews/Curriculum")
            },

            {
                path: "publish",
                name: "courseModule.publish",
                component: () =>
                    import("../views/appMainView/CourseModuleViews/Publish")
            },

            {
                path: "untitled",
                name: "courseModule.untitled",
                component: () =>
                    import("@/components/corporateAdmin/courses/createModule/CreateCourseModule")
            },

            {
                path: "video",
                name: "courseModule.video",
                component: () =>
                    import("@/components/corporateAdmin/courses/createModule/AddContentVideo")
            },

            {
                path: "audio",
                name: "courseModule.audio",
                component: () =>
                    import("@/components/corporateAdmin/courses/createModule/AddContentAudio")
            },

            {
                path: "text",
                name: "courseModule.text",
                component: () =>
                    import("@/components/corporateAdmin/courses/createModule/AddContentText")
            },


        ],
        meta: {
            requiresAuth: true
        }
    },
]

