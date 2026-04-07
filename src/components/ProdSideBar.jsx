import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import Carts from '../pages/Carts'
import { toast, ToastContainer } from 'react-toastify'

const ProdSideBar = () => {
    let {setIsSidebar,cart,setCart} = useContext(Auth)
    // console.log(cart)
    let totalSum = ()=>{
        let sum = 0
        cart.map((elem)=>{
            sum = elem.price+sum
        })
        // console.log(sum)
        return sum.toFixed(2)
    }

    let checkedCart = () => {
        setCart([])
        toast.success("Order is placed")
        localStorage.removeItem("cart")
    }

    let clearCart = () => {
        setCart([])
        toast.warn("Cart is cleared")
        localStorage.removeItem("cart")
    } 

    // totalSum()
  return (
    <div>
      
      <div className="fixed top-0 right-0 h-full w-[350px] bg-black text-white border-l border-gray-800 flex flex-col justify-between z-50">

                    {/* HEADER */}
                    <div>
                        <div className="flex justify-between items-center p-4 border-b border-gray-800">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                🛒 Cart
                                <span className="bg-lime-400 text-black text-xs px-2 py-0.5 rounded-full">
                                    {cart.length} item
                                </span>
                            </h2>

                            <button onClick={()=>setIsSidebar(false)} className="text-gray-400 hover:text-white">✕</button>
                        </div>

                        {/* CART ITEM */}
                        {
                            cart.map((elem)=>{
                                return <Carts elem={elem} key={elem.id}/>
                            })
                        }
                       
                    </div>

                    {/* FOOTER */}
                    <div className="p-4 border-t border-gray-800">

                        <div className="flex justify-between mb-4">
                            <p className="text-gray-400">Total</p>
                            <p className="text-xl font-semibold">${totalSum()}</p>
                        </div>

                        <button onClick={()=>checkedCart()} className="w-full bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition">
                            Checkout →
                        </button>

                        <p onClick={()=> clearCart()} className="text-center text-gray-500 text-sm mt-3 cursor-pointer hover:text-red-400">
                            Clear cart
                        </p>

                    </div>
                </div> 
    </div>
  )
}

export default ProdSideBar;
