import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext';

const ProductCard = ({ item }) => {
    let navigate = useNavigate()
    let {addItemInCart, cart}=useContext(Auth)
    let [isInCart,setIsIncart]= useState(false)


    

    return (
        <div>
            <div className=" w-70 px-8 gap-6">

                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-lime-400 transition">

                    {/* IMAGE */}
                    <div onClick={()=>{navigate(`/dashboard/product/${item.id}`)}} className="bg-gray-200 p-6">
                        <div className=" bg-gray-300 rounded" >
                            <img src={item.images[0]} alt="" />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">

                        <p className="text-gray-400 text-xs mb-1">Electronics</p>

                        <h3 className="text-sm font-semibold mb-2">
                           {item.title}
                        </h3>

                        {/* RATING */}
                        <div className="flex items-center text-yellow-400 text-xs mb-3">
                            ★★★★☆
                            <span className="text-gray-400 ml-2">({item.rating})</span>
                        </div>

                        <hr className='mb-1' />
                        {/* PRICE + BUTTON */}
                        <div className="flex justify-between items-center">
                            <p className="text-lime-400 font-bold">${item.price}</p>

                            {
                                isInCart ===true ?"" : <button onClick={()=>{
                                    addItemInCart(item.id)
                                     }} className="bg-lime-400 text-black px-3 py-1 rounded-lg text-sm hover:bg-lime-300">
                                Add
                            </button>
                            }

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
