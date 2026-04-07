import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Register from '../pages/Register'
import Login from '../pages/Login'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MianLayout from '../layout/MianLayout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import ProductDetails from '../pages/ProductDetails'
import Carts from '../pages/Carts'


const AppRoute = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <AuthRoute />,
            children: [
                {
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: 'register',
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/dashboard",
            element: <ProtectedRoute />,
            children: [
                {
                    element: <MianLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        },
                        {
                            path: "shop",
                            element: <Shop />
                        },
                        {
                            path: "about",
                            element: <About />
                        },
                        {
                            path:"product/:id",
                            element:<ProductDetails/>
                        }
                        
                    ]
                }
            ]
        }
    ])
    return (<>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
    </>
    )
}

export default AppRoute
