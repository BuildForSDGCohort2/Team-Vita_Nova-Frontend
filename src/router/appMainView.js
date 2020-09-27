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
        path: "/send-orders",
        name: "SendOrders",
        component: () =>
            import("../views/appMainView/SendOrder"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/distributor-orders",
        name: "DistributorOrders",
        component: () =>
            import("../views/appMainView/DistributorOrder"),
        meta: {
            requiresAuth: true
        }
    },
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
]

