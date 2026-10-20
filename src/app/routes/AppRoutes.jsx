import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./CommonRoutes";
import RoleBaseRoute from "../protectedRoutes/RoleBaseRoute";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";
const AppRoutes = () => {

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentLoggedInEmployee());
    }, [dispatch]);

    let router = createBrowserRouter([
        // Auth Routes
        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />,
                        },
                        {
                            path: "register",
                            element: <Register />,
                        },
                    ],
                },
            ],
        },


        // Home Routes
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            element: <Home />,
                            children: [
                                ...commonRoutes,
                                {
                                    element: (
                                        <RoleBaseRoute allowedRoles={["admin"]} />
                                    ),
                                    children: adminRoutes,
                                },
                                {
                                    element: (
                                        <RoleBaseRoute allowedRoles={["employee"]} />
                                    ),
                                    children: employeeRoutes,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;
