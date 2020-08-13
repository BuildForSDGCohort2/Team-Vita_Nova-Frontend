import Home from "../views/Home.vue";

import Employee from "../views/cooperateAdmin/Employee";
import ManageCourses from "../views/cooperateAdmin/ManageCourses";


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
  }
];
