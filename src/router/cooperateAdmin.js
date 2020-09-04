import Employee from "../views/cooperateAdmin/Employee"
import Courses from "../views/cooperateAdmin/Courses"
import CourseModule from "../views/cooperateAdmin/CourseModule";

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
            path: '',
            name: 'employee',
            redirect: { name: 'employee.allEmployees' }
        },{
            path: "allEmployees",
            name: 'employee.allEmployees',
            component: () => import("../views/cooperateAdmin/AllEmployees")
        }, {
            path: "departments",
            name: 'employee.departments',
            component: () => import("../views/cooperateAdmin/BrowseDepartments")
        },
            {
                path: "view-departments",
                name: 'employee.departments',
                component: () => import("../views/cooperateAdmin/DepartmentsView")
            }
        ],
        meta: {
            requiresAuth: true
        }

    },
    {
        path: "/cooperate/courses",
        name: "Courses",
        component: Courses,
        children: [{
            path: '',
            name: 'courses',
            redirect: { name: 'courses.myCourses' }
        },{
            path: "myCourses",
            name: 'courses.myCourses',
            component: () => import("../views/cooperateAdmin/MyCourses")
        },{
            path: "exploreCourses",
            name: 'courses.exploreCourses',
            component: () => import("../views/cooperateAdmin/ExploreCourses")
        }],
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
    name: "CourseModule",
    component: CourseModule,
    children: [
      {
        path: "",
        name: "courseModule",
        redirect: {name: "courseModule.publish"}
      },{
        path: "publish",
        name: "courseModule.publish",
        component: () =>
            import("../views/cooperateAdmin/Publish")
      },{
        path: "curriculum",
        name: "courseModule.curriculum",
        component: () =>
            import("../views/cooperateAdmin/Curriculum")
      },
      // {
      //   path: "generalSettings",
      //   name: "courseModule.generalSettings",
      //   component: () =>
      //       import("../views/cooperateAdmin/AddContentVideo")
      // },
    ],
    meta: {
      requiresAuth: true
    }
  }
]
