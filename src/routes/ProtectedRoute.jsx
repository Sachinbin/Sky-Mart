import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProtectedRoute = () => {
    let { isLoggedIn } = useContext(Auth)

    if (!isLoggedIn) {
         toast.error("Unauthorize user !!")
        return <Navigate to={"/"} />
    }
    return (<Outlet />)
}

export default ProtectedRoute
