import ManageCourses from "@/views/cooperateAdmin/ManageCourses";
import Employee from "@/views/cooperateAdmin/Employee";
import CourseModule from "@/views/cooperateAdmin/CourseModule";


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
    path: "/courses",
    name: "ViewCourses",
    component: () =>
        import(
            /* webpackChunkName: "about" */ "../views/cooperateAdmin/ViewCourses"
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
        component: () => import("../views/cooperateAdmin/ManageCourses")
      }
    ],
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
      },


      {
        path: "publish",
        name: "courseModule.publish",
        component: () =>
            import("../views/cooperateAdmin/Publish")
      },

      {
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
];
