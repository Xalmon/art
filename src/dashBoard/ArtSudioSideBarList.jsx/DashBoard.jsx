import React,{useEffect} from 'react'
import style from "./Style.module.css"
import { BsUpload,BsClockHistory,BsBrush, BsBagFill } from 'react-icons/bs';
import { BarChart, Bar,Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , LineChart, Line} from 'recharts';
import { getArtStudioGenre} from '../../component/state/ArtStudio/Action.js';
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';

const DashBoard = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {auth,artStudio} = useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")


  useEffect(()=>{
    
   
    dispatch(getArtStudioGenre({jwt,artStudioId:artStudio.usersArtStudio?.id}));
    // dispatch(getArtworkByArtStudioId())
    // dispatch(getArtstudioById())
    dispatch(getArtStudiosOrder({
        jwt,artStudioId:artStudio.usersArtStudio?.id
    }))
},[])


  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main id={style.main} className='min-h-[85.5vh] flex flex-col  items-center text-center'>
        <div className='main_title flex justify-between my-4 mr-[1483px]'>
           <h1 className='title text-4xl font-extrabold text-gray-700 '>DASHBOARD</h1>
        </div>
         <div className='main-cards grid grid-cols-4 space-x-10 ml-96'>
             <div className='cards flex flex-col justify-around p-4 px-8 rounded-lg w-[500px] h-64 bg-blue-600 relative left-10'>
               <div className='card-inner flex items-center justify-between'>
                  <h1 className='text-3xl font-extrabold text-white'>
                    ARTWORKS
                  </h1>
                    
                    <BsUpload style={{fontSize:"2.0rem",color: "white"}}  className='card_icon'/>
                 
               </div>
               <h1 className='text-4xl text-left text-white'>100</h1>
             </div>
             <div className='cards flex flex-col justify-around p-4 px-8 rounded-lg w-[500px] h-64 bg-orange-600 '>
               <div className='card-inner flex items-center justify-between'>
                  <h1 className='text-3xl  font-extrabold text-white'>
                    ORDERS
                  </h1>
                  <div>
                    <BsBagFill style={{fontSize:"2.0rem",color: "white"}} className='card_icon'/>
                  </div>
                 
               </div>
               <h1 className='text-4xl text-left text-white'>300</h1>
             </div>
             <div className='cards flex flex-col justify-around p-4 px-8 rounded-lg w-[500px] h-64 bg-red-600 '>
               <div className='card-inner card-inner flex items-center justify-between'>
                  <h1 className='text-3xl  font-extrabold text-white'>
                    CATEGORY
                  </h1>
                  <div>
                    <BsBrush style={{fontSize:"2.0rem", color: "white"}} className='card_icon'/>
                  </div>
                 
               </div>
               <h1 className='text-4xl text-left text-white'>13</h1>
             </div>
             <div className='cards flex flex-col justify-around p-4 px-8 rounded-lg w-[500px] h-64 bg-green-600 '>
               <div className='card-inner card-inner flex items-center justify-between'>
                  <h1 className='text-3xl  font-extrabold text-white'>
                    SALES HISTORY
                  </h1>
                  <div>
                    <BsClockHistory style={{fontSize:"2.0rem", color: "white"}} className='card_icon'/>
                  </div>
                  
               </div>
               <h1 className='text-4xl text-left text-white'>300</h1>
             </div>
         </div>
         <div id={style.chart} className="grid grid-cols-2 gap-20 mt-12 h-500 z-50">
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

         
         </div>
         
      </main>
  )
}

export default DashBoard