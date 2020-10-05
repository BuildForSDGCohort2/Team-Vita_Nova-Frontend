import Distributor from "../views/appMainView/Distributor"
import Sender from "../views/appMainView/Sender"

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
        path: "/sender",
        name: "Sender",
        component: Sender,
        children: [
            {
                path: '',
                name: 'senderRedirect',
                redirect: { name: 'sender.senderOrders' }
            },
            {
                path: "active-distributors",
                name: "sender.activeDistributors",
                component: () => import("../views/appMainView/ActiveDistributors")
            },
            {
                path: "sender-orders",
                name: "sender.senderOrders",
                component: () => import("../views/appMainView/SenderOrders")
            },
            {
                path: "create-send-order",
                name: "sender.createSendOrder",
                component: () => import("@/components/mainViews/sendOrders/SendOrder.vue")
            },
            {
                path: "active-send-order",
                name: "sender.activeSendOrder",
                component: () => import("@/components/mainViews/sendOrders/ActiveSendOrders.vue")
            },
            {
                path: "/send-order-done",
                name: "post_send_order_successful",
                component: () => import("../components/splashPages/Sent"),
            },
        ],
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

