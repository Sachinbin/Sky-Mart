import { createContext, useContext, useState } from "react";

export let Auth = createContext()

export let SecurityProvider = ({ children }) => {
    let [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("regUser")) || [])
    let [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("logged user")) || null)

    return (
        <Auth.Provider
            value={{
                registerUser,
                setRegisterUser,
                isLoggedIn,
                setIsLoggedIn
            }}
        >{children}</Auth.Provider>
    )
}

// export let AuthContextProvider = ()=>{useContext(Auth)}