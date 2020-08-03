import Home from "../views/Home.vue";

export default [
  {
    path: "/cooperate/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/cooperateAdmin/Dashboard.vue"
      )
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
    path: "/cooperate/employee/invite",
    name: "InviteEmployee",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/cooperateAdmin/InviteEmployee"
      )
  },
  {
    path: "/cooperate/employee/deleteEmployee",
    name: "DeleteEmployee",
    component: () =>
      import(
        "../components/cooperateAdmin/employee/deleteEmployee/DeleteEmployee"
      )
  }
];