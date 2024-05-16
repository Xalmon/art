import React from 'react'
import style from "./Profile.module.css"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { logOut } from '../../component/state/Authentication/Action.js';
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";


const ProfilePage = () => {

 const {auth} = useSelector(store=>store)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
    const handleLogout = () =>{
      dispatch(logOut())
      navigate("/")

      }
  return (
    <div id={style.main} className='min-h-[85.5vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='py-5 text-7xl font-extrabold text-gray-700'>
            WELCOME TO YOUR DASHBOARD
        </h1>
        <div className='names flex space-x-2'>
        <h1 className='py-5 text-5xl font-extrabold text-gray-700'>
        {auth.user?.firstName.toUpperCase()}
        </h1>
        <h1 className='py-5 text-5xl font-extrabold text-gray-700'>
        {auth.user?.lastName.toUpperCase()}
        </h1>
        </div>
        <p className='text-3xl http://localhost:3000/text-gray-700'>
            Email: <span className='email px-5'>{auth.user?.email}</span>
        </p>
         <p className='text-3xl text-gray-700'>
            Tel: <span className='email px-5'>{auth.user?.phoneNumber}</span>
         </p>
         <Button onClick={handleLogout} variant='contained' sx={{margin:"2rem 0rem",backgroundColor:"rgb(105, 105, 105)",fontSize:"1.7rem",color:"white"}}>Logout</Button>
      </div>
    </div>
  )
}

export default ProfilePage