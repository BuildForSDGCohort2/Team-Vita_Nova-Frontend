import Employee from "../views/cooperateAdmin/Employee";
import Courses from "../views/cooperateAdmin/Courses";


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
    name: "Courses",
    component: Courses,
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
