import React from 'react'
import style from "./Main.module.css"
import EventCard from './EventCard'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Event = () => {
  const navigate = useNavigate()
  const {auth,cart} = useSelector(store=>store)
    
  return (
    <div id={style.main} className='flex  px-5 flex-wrap gap-5 min-h-[85.5vh] justify-center '>
        <div>
      <h1 className='text-4xl text-center py-7 font-extrabold text-gray-700'>
        Events

        <p className='text-3xl'>
        Register and partake in any upcoming event
      </p>

      </h1>
        <div className='flex flex-wrap gap-6 justify-center h-40'>
         {[1,1,1].map((item)=><EventCard/> )}
        </div>
        </div>
        </div>
  )
}

export default Event