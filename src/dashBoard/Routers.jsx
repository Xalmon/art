import React from 'react'
import {Route,Routes} from 'react-router-dom'
import SideBar from './ArtstudioDashboard/SideBar'

const Routers = () => {
  return (
    <Routes>

    
    <Route path='"/artStudio/*' element={<SideBar/>}>Routers</Route>
    </Routes>
  )
}

export default Routers