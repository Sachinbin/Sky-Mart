import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Auth } from '../context/AuthContext'

const MianLayout = () => {
  useContext(Auth)
  return (
    <div >
      <Navbar/>
      <hr style={{ borderTop: "2px solid white", width: "50%" }} />

      <Outlet/>
       
     <hr style={{ borderTop: "2px solid white", width: "50%" }} />

      <Footer/>
    </div>
  )
}

export default MianLayout
