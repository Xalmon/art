import React from 'react'
import {Card,CardMedia,CardContent,Typography,Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

const EventCard = () => {

    const navigate = useNavigate()

  return (
    <div>
        <Card sx={{width:580}}>
            <CardMedia
            sx={{height:600,}}
             image='https://b2128690.smushcdn.com/2128690/wp-content/uploads/2022/10/nike-art-gallery-lagos-nigeria.webp?lossy=2&strip=1&webp=1'/>

             <CardContent>
              <Typography variant='h5' sx={{fontSize:"2.5rem",color:"white"}}>
                Beauty Of Nigeria Art
              </Typography>
              <div className='py-2 space-y-2'>
                <p className='text-3xl text-white'>
                    {"LAGOS"}
                </p>
                <p className='text-3xl text-white'>June 16, 2024 11:45 AM</p>
                <p className='text-3xl text-white'>Event Details</p>
                 <Button onClick={()=>navigate()} fullWidth variant='contained' sx={{fontSize:"1.6rem",color:"dark",fontWeight:"1000"}}>Register Here</Button>
              </div>

             </CardContent>

        </Card>
    </div>
  )
}

export default EventCard