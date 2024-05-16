import React,{useEffect} from 'react'
import style from "./Main.module.css"
import OrderCard from './OrderCard'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getUsersOrder } from '../../component/state/Order/Action';

const OrderContent = () => {
  const navigate = useNavigate()
  const {auth,cart,order} = useSelector(store=>store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch()
    
  useEffect(()=>{
    dispatch(getUsersOrder(jwt))
  },[auth.jwt])
  console.log("My own order:", order)
  return (
    <div id={style.main} className='flex items-center flex-col min-h-[85.5vh]'>
      <h1 className='text-4xl text-center py-7 font-extrabold text-gray-700'>
        My Orders
      </h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          order.orders?.map((order)=>order.items?.map((item)=><OrderCard order={order} item={item}/>))
        }

      </div>
      </div>
  )
}

export default OrderContent