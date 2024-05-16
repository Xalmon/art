import React from 'react'
// import Boy from "../../assets/images/boy.png"
import { IconButton} from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem, updateCartItem } from '../state/Cart/Action';

const CartItem = ({item}) => {
  const navigate = useNavigate()
  const {auth,cart} = useSelector(store=>store)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")

  const handleUpdateCartItem = (value) =>{
    if(value === -1 && item.quantity === 1){
      handleRemoveCartItem()
    }else if (value === -1 && item.quantity === 0) {
      return;
    }
  
    const data={cartItemId:item.id,quantity:item.quantity+value}
    dispatch(updateCartItem({data,jwt}))
  }
    const handleRemoveCartItem=()=>{
      dispatch(removeCartItem({cartItemId:item.id,jwt:auth.jwt || jwt}))
    }
  
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
            <img className='w-[8rem] h-[8rem] object-cover' src={item.artwork.images[0]} alt="" />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
         <div className='space-y-1 lg:space-y-3 w-full'>
            <p className='pro text-4xl'>{item.artwork.name}</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-1'>
                <IconButton onClick={()=>handleUpdateCartItem(-1)}>
              <RemoveCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
                </IconButton>
                <div className='w-5 h-5 flex items-center justify-center text-3xl'>
                    {item.quantity}
                </div>
                <IconButton onClick={()=>handleUpdateCartItem(1)}>
              <AddCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
                </IconButton>
              </div>
              <p className='amount text-4xl'>
              ₦<span>{item.totalPrice}</span>
              </p>
              
            </div>
         </div>
         <div>

         </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem