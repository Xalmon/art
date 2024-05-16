import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import {Card,Button} from '@mui/material'

const AddressCart = ({item,showButton,handleSelectAddress}) => {
    
  return (
    <Card className="flex gap-5 w-[24%] h-64 p-5 bg-white">
    <HomeIcon sx={{fontSize:"2.5rem",}}/>
    <div className='space-y-3 text-white'>
     <h1 className='font-semibold text-3xl text-white mt-1'>
        Home
     </h1>
     <p className='text-2xl'>
       No 26 ike-oluwa street off redeem bus/stop, obawole town, iju-ishaga, Lagos State 
     </p>
     { showButton && (
     <Button variant='outlined'  sx={{color:"white", fontSize:'1.5rem'}} fullWidth onClick={()=> handleSelectAddress(item)}>
      Select
     </Button>
     )}
    </div>
    </Card>
  )
}

export default AddressCart
