import { createContext, useContext, useEffect, useState } from "react";
import ProductApi from "../api/ProductApi";
import axios from "axios";

export let Auth = createContext()

export let SecurityProvider = ({ children }) => {
    let [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("regUser")) || [])
    let [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("logged user")) || null)
    let [productData, setProductData] = useState([])
    let [isSidbar, setIsSidebar] = useState(false)
    let [cart, setCart] = useState([])

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('https://dummyjson.com/products')
                console.log("Api hitted")
                setProductData(res.data.products)
                // return res.data.products

            } catch (error) {
                console.log("Error i product Api")
            }
        })()
    }, [])
    // setProductData(ProductApi)
    // console.log(sidbar)

    return (
        <Auth.Provider
            value={{
                productData,
                setProductData,
                registerUser,
                setRegisterUser,
                isLoggedIn,
                setIsLoggedIn,
                isSidbar,
                setIsSidebar
            }}
        >{children}</Auth.Provider>
    )
}

// export let AuthContextProvider = ()=>{useContext(Auth)}