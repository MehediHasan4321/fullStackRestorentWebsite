import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import LandingPage from "../Layouts/LandingPage/LandingPage";
import OurMenus from "../Layouts/Pages/OurMenus/OurMenus";
import Orders from "../Layouts/OrderFood/Orders/Orders";
import Login from "../Layouts/Pages/Login/Login";
import Regeister from "../Layouts/Pages/Regeister/Regeister";
import UserDashboard from "../Layouts/UserDashboard/UserDashboard";
import UserHome from "../Layouts/Pages/UserHome/UserHome";
import MyOrders from "../Layouts/Pages/MyOrders/MyOrders";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllUsers from "../Layouts/Pages/AllUsers/AllUsers";
import AdminRoute from "../PrivetRoute/AdminRoute";
import Payments from "../Layouts/Pages/Payments/Payments";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/ourMenu',
                element: <OurMenus />
            },
            {
                path: '/order/:foodCategory',
                element: <Orders />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/regeister',
                element: <Regeister />
            },

        ]
    },
    {
        path: '/userDashboard',
        element: <PrivetRoute><UserDashboard /></PrivetRoute>,
        children: [
            {
                path: '/userDashboard',
                element: <UserHome />
            },
            {
                path: '/userDashboard/myOrders',
                element: <MyOrders />
            },
            {
                path: '/userDashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/userDashboard/payment',
                element: <Payments />
            }
        ]
    }
])