import Distributor from "../views/appMainView/Distributor"

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
        path: "/distributor",
        name: "distributor",
        component: Distributor,
        children: [
            {
                path: '',
                name: 'distributorRedirect',
                redirect: { name: 'distributor.distributorOrders' }
            },
            {
                path: "interested-senders",
                name: "distributor.interestedSenders",
                component: () => import("../views/appMainView/InterestedSender")
            },
            {
                path: "distributor-orders",
                name: "distributor.distributorOrders",
                component: () => import("../views/appMainView/DistributorOrder")
            },
            {
                path: "/request-order-done",
                name: "post_request_successful",
                component: () => import("../components/splashPages/Requested"),
            },
        ],
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/send-order-done",
        name: "post_send_order_successful",
        component: () => import("../components/splashPages/Sent"),
        meta: {
            layout: 'Dashboard',
            requiresAuth: true
        },

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

