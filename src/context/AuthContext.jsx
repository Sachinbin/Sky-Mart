import { createContext, useContext, useEffect, useState } from "react";
import ProductApi from "../api/ProductApi";
import axios from "axios";

export let Auth = createContext()

export let SecurityProvider = ({ children }) => {
    let [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("regUser")) || [])
    let [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("logged user")) || null)
    let [productData, setProductData] = useState([])
    let [isSidbar, setIsSidebar] = useState(false)
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    // console.log(cart)
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

    

    let addItemInCart = (id)=>{
        let item=productData.find((elem)=>{
            return elem.id === id
        })
        // console.log(item)
        let arr = [...cart,item]
        setCart(arr)
        localStorage.setItem("cart",JSON.stringify(arr))
    }

    let deleCartItem = (id) =>{
        console.log(id)
        let res = cart.filter((elem)=>{
            return elem.id !== id
        })
        setCart(res)
        localStorage.setItem("cart",JSON.stringify(res))
    }

    let IncreaseItemQty = (id) => {
        console.log(id)
    }

     let DecreaseItemQty = (id) => {
        console.log(id)
    }

   
   

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
                setIsSidebar,
                cart,
                setCart,
                addItemInCart,
                deleCartItem,
                IncreaseItemQty,
                DecreaseItemQty,
                
            }}
        >{children}</Auth.Provider>
    )
}

// export let AuthContextProvider = ()=>{useContext(Auth)}