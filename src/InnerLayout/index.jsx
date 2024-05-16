import React from 'react'
import Navbar from '../innerComponent/Navbar'
import {Outlet} from "react-router-dom"
import Footer from "../component/Footer"

const InnerLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default InnerLayout