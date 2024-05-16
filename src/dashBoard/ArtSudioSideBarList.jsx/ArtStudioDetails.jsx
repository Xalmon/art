import React from 'react';
import style from "./Style.module.css";
import { Button } from "@mui/material";
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import {useSelector,useDispatch} from "react-redux"
import { updateArtsudioStatus } from '../../component/state/ArtStudio/Action';
import { useNavigate } from "react-router-dom";


const ArtStudioDetails = () => {
   
    const {auth,cart,artStudio} = useSelector(store=>store)
    const dispatch = useDispatch()
    console.log("Stores for user: ", artStudio)
    console.log("auth user: ", auth)

    const handleArtStudioStatus = () => {
       dispatch(updateArtsudioStatus({
        artStudioId:artStudio.usersArtStudio.id,
        jwt:localStorage.getItem("jwt")
        
       }))
    }
  
    return (
        <div id={style.com} className='flex justify-center lg:px-20 px-5 py-5'>
            <div>
                <div className='py-5 flex gap-5'>
                    <h1 className='text-2xl lg:text-7xl text-center font-extrabold p-5'>
                       {artStudio.usersArtStudio?.businessName}
                    </h1>
                    <Button color={artStudio.usersArtStudio?.open ? "primary" : "error"} className='py-[1rem] px-[2rem]' onClick={handleArtStudioStatus} size='large' variant='contained' sx={{ height: "60px", backgroundColor: "green", color: "white", fontSize: "2.5rem", marginTop: "24px" }}>
                        {artStudio.usersArtStudio?.open ? "ClOSE" : "OPEN"}
                    </Button>
                </div>
                <div className='c mb-4'>
                    <img src={artStudio.usersArtStudio?.images[0]}
                    alt="" 
                    className='img w-80 rounded-full'
                    />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Card sx={{width:"1800px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>ArtStudio</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Owner                                    
                                            <span className='ml-[148px]'>:</span>
                                            <div className='flex space-x-4'>
                                            <p className='pr-55'> {artStudio.usersArtStudio?.owner.firstName} 
                                                        
                                             </p>
                                             <p className='pr-55'> 
                                                         {artStudio.usersArtStudio?.owner.lastName} 
                                             </p>
                                            </div>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            BusinessName                                    
                                            <span className='h ml ml-[32px]'>:</span>
                                            <p className='pr-55 '>{artStudio.usersArtStudio?.businessName}</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex '>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            OpeningHours                                  
                                            <span className='h ml-[44px] '>:</span>
                                            {/* <p className='pr-55'>{artStudio.usersArtStudio?.openingHours}</p> */}
                                            </p>
                                            <p className='pr-55 ml-[90px] text-3xl '>{artStudio.usersArtStudio?.openingHours}</p>
                                    </div>
                                    <div className='flex mt-5'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Status                                   
                                            <span className='h ml-[150px]'>:</span>
                                            {artStudio.usersArtStudio?.open?<span
                                            className='pr-6 pl-6  py-2 rounded-full bg-green-400 text-gray-950'>Open
                                            </span>:<span
                                             className='pr-6  pl-6   py-2 rounded-full bg-red-100 text-gray-950'>Close
                                            </span>}
                                            </p>
                                    
                                </div>
                                    </div>
                                   
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div className='flex gap-6 '>
                <Grid container spacing={2} marginTop={0}>
                <Grid item xs={12} lg={6}>
                        <Card sx={{width:"880px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>Address</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex mb'>
                                        <p className='w-48 text-white flex gap-5 text-3xl '>
                                            Country                                    
                                            <span className='h  ml-[148px]'>:</span>
                                            <p className='pr-55'>{artStudio.usersArtStudio?.address?.country}</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            State                                   
                                            <span className='h  ml-[181px]'>:</span>
                                            <p className='pr-55'>{artStudio.usersArtStudio?.address?.stateProvince}</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex w-[800px]'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            City                                    
                                            <span className='h ml ml-[200px]'>:</span>
                                            <p className='pr-96 '>{artStudio.usersArtStudio?.address?.city}</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            PostalCode                                    
                                            <span className='h ml ml-[96px]'>:</span>
                                            <p className='pr-55 '>{artStudio.usersArtStudio?.address?.postalCode}</p>
                                            </p>
                                    
                                  
                                    </div>
                                    </div>
                                    <div className='flex  mt-3'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            StreetAddress                                   
                                            <span className='h  ml-[60px]'>:</span>
                                           
                                            </p>
                                            <p className='pr-55  ml-[110px] text-white flex gap-5 text-3xl '>{artStudio.usersArtStudio?.address?.streetAddress}</p>
                                    
                                  
                                    </div>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12} lg={6}>
                        <Card sx={{width:"880px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>Contact Information</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Email                                   
                                            <span className='h  ml-[104px]'>:</span>
                                            <p className='pr-55'>{artStudio.usersArtStudio?.contactInformation?.email}</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Mobile                                 
                                            <span className='h ml ml-[88px]'>:</span>
                                            <p className='pr-55 '>{artStudio.usersArtStudio?.contactInformation?.mobileNumber}</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl  mt-3'>
                                            Social                                    
                                            <span className='h ml ml-[96px] mt-2'>:</span>
                                           <div className='flex gap-4'>
                                           <a href={artStudio.usersArtStudio?.contactInformation?.facebook}> <FacebookIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href={artStudio.usersArtStudio?.contactInformation?.linkedin}> <LinkedInIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href={artStudio.usersArtStudio?.contactInformation?.instagram}><InstagramIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href={artStudio.usersArtStudio?.contactInformation?.twitter}> <TwitterIcon sx={{fontSize:"4.5rem"}}/></a>
                                           </div>
                                            </p>
                                    
                                  
                                    </div>
                                    
                                    </div>
                                   
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </div>
            </div>
        </div>
    )
}

export default ArtStudioDetails;
