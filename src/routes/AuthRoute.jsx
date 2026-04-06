import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const AuthRoute = () => {
    let { isLoggedIn } = useContext(Auth)

    if(isLoggedIn){
        return <Navigate to={"/dashboard"}/>
    }
  return (<Outlet/>)
}

export default AuthRoute
