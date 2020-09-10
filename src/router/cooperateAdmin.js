import Employee from "../views/cooperateAdmin/Employee";
import Courses from "../views/cooperateAdmin/Courses";
import CourseModule from "@/views/cooperateAdmin/CourseModuleViews/CourseModule";

export default [
  {
    path: "/corperate/dashboard",
    name: "Dashboard",
    component: () => import("../views/cooperateAdmin/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/corperate/employee/",
    name: "Employee",
    component: Employee,
    children: [
      {
        path: "",
        name: "employee",
        redirect: { name: "employee.allEmployees" }
      },
      {
        path: "allEmployees",
        name: "employee.allEmployees",
        component: () => import("../views/cooperateAdmin/AllEmployees")
      },
      {
        path: "departments",
        name: "employee.departments",
        component: () => import("../views/cooperateAdmin/Departments")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/corperate/courses",
    name: "Courses",
    component: Courses,
    children: [
      {
        path: "",
        name: "courses",
        redirect: { name: "courses.myCourses" }
      },
      {
        path: "myCourses",
        name: "courses.myCourses",
        component: () => import("../views/cooperateAdmin/MyCourses")
      },
      {
        path: "exploreCourses",
        name: "courses.exploreCourses",
        component: () => import("../views/cooperateAdmin/ExploreCourses")
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/corperate/preview-profile",
    name: "PreviewProfile",
    component: () => import("../views/cooperateAdmin/PreviewProfile"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/corperate/update-profile",
    name: "UpdateProfile",
    component: () => import("../views/cooperateAdmin/UpdateProfile"),
    meta: {
      requiresAuth: true
    }
  },



  {
    path: "/corperate/courseModule",
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
          import("../views/cooperateAdmin/CourseModuleViews/Curriculum")
      },

      {
        path: "publish",
        name: "courseModule.publish",
        component: () =>
          import("../views/cooperateAdmin/CourseModuleViews/Publish")
      },

      {
        path: "untitled",
        name: "courseModule.untitled",
        component: () =>
            import("@/components/cooperateAdmin/courses/createModule/CreateCourseModule")
      },

      {
        path: "video",
        name: "courseModule.video",
        component: () =>
            import("@/components/cooperateAdmin/courses/createModule/AddContentVideo")
      },

      {
        path: "audio",
        name: "courseModule.audio",
        component: () =>
            import("@/components/cooperateAdmin/courses/createModule/AddContentAudio")
      },

      {
        path: "text",
        name: "courseModule.text",
        component: () =>
            import("@/components/cooperateAdmin/courses/createModule/AddContentText")
      },

        
    ],
    meta: {
      requiresAuth: true
    }
  },
];
