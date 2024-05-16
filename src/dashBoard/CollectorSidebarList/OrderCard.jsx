import React from 'react'
import {Card,Button} from "@mui/material"
import image from "../../assets/images/boy.png"

const OrderCard = ({item,order}) => {
  return (
    <Card className='flex justify-between items-center p-7'>
        <div className='flex items-center space-x-5'>
          <img className='h-18 w-16' src={item.artwork.images[0]} alt="" />
          <div>
            <p className='name text-white text-2xl'>{item.artwork.name}</p>
            <p className='price text-white text-2xl'>
            ₦ <span >{item.totalPrice}</span>
            </p>
        </div>
       </div>
       <div>
          <Button className='cursor-not-allowed text-2xl' sx={{fontSize:"1.4rem"}}>{order.orderStatus}</Button>
       </div>
        
    </Card>
  )
}

export default OrderCard