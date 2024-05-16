import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../innerComponent/Navbar'


const NavbarLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default NavbarLayout