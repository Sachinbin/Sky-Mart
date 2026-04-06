import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'

const Navbar = () => {
    let navigate= useNavigate()
    let {isLoggedIn ,setIsLoggedIn}=useContext(Auth)
    let firstLatter = isLoggedIn.name.substring(0,1).toUpperCase()
    
    return (
        <nav className='flex justify-between h-15 items-center  px-[50px] bg-[#1a1a1a] text-white'>
            <div className='flex items-center gap-2'>
                <div className='h-8 w-8 flex items-center justify-center rounded-xl bg-lime-400'>
                     <i  className=" text-black fa-solid fa-bolt"></i>
                </div>
                <h1 className='font-bold text-xl'>Sky<span className='text-lime-400'>Mart</span></h1>
            </div>
            <div className='flex gap-8 font-semibold text-sm'>
                <NavLink to={"/dashboard"} end className={({isActive})=>{ return isActive?"text-red-600":""}}>Home</NavLink>
                 <NavLink to={"shop"} className={({isActive})=>{ return isActive?"text-red-600":""}}>Shop</NavLink>
                <NavLink to={"about"} className={({isActive})=>{return isActive?"text-red-600":""}}>About</NavLink>
            </div>
            <div className='flex items-center gap-3 '>
                <div className='flex  items-center px-2 py-1 gap-2 rounded-xl bg-gray-800 shadow-2xl'>
                    <p className='font-semibold text-sm h-8 w-8 flex items-center justify-center rounded-xl bg-lime-400'>
                        {firstLatter}
                    </p>
                    <p className='font-semibold text-sm'>{isLoggedIn.name}</p>
                </div>
                <div className=' px-3 py-2 bg-gray-800 rounded-xl'>
                    <i className=" fa-solid fa-cart-shopping"></i>
                </div>
                <div onClick={()=>{
                    localStorage.removeItem("logged user")
                    setIsLoggedIn(null)
                    navigate("/")
                }} className=' px-3 py-2 bg-gray-800 rounded-xl hover:bg-red-400'>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
