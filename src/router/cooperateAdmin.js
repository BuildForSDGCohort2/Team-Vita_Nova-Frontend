export default [
  {
    path: "/cooperate/dashboard",
    name: "Dashboard",
    component: () => import("../views/cooperateAdmin/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/cooperate/department/create",
    name: "CreateDepartment",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/cooperateAdmin/CreateDepartment"
      )
  },
  {
    path: "/cooperate/employee",
    name: "Employee",
    component: Employee,
    children: [
      {
        path: "allEmployees",
        component: () => import("../views/cooperateAdmin/AllEmployees")
      },
      {
        path: "departments",
        component: () => import("../views/cooperateAdmin/Departments")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/cooperate/courses",
    name: "ManageCourses",
    component: ManageCourses,
    children: [
      {
        path: "viewAllCourses",
        component: () => import("../views/cooperateAdmin/ViewAllCourses")
      },
      {
        path: "createCourse",
        component: () => import("../views/cooperateAdmin/CreateCourse")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/cooperate/courseModule",
    name: "CourseModule",
    component: () =>
        import(
            /* webpackChunkName: "about" */ "../views/cooperateAdmin/CourseModule"
            )
  }
];
