import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MianLayout = () => {
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
