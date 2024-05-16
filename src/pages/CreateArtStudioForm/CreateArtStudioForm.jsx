import React,{useState} from 'react'
import style from "./CreateForm.module.css"
import { useFormik } from 'formik'
import { Grid,CircularProgress,Button } from "@mui/material";
import { AddPhotoAlternate } from '@mui/icons-material';
// import Image from "../../assets/images/boy.png"
import { IconButton,TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import {useDispatch} from "react-redux";
import { createArstudio } from '../../component/state/ArtStudio/Action';

const initialValues = {
    businessName:"",
    city:"",
    stateProvince:"",
    postalCode:"",
    description:"",
    country:"",
    streetAddress:"",
    email:"",
    twitter:"",
    instagram:"",
    mobileNumber:"",
    linkedin:"",
    facebook:"",
    images:[],
    openingHours:"",

}

const CreateArtStudioForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const [uploadImage,setUploadImage] =useState(false)
    const formik = useFormik({
        initialValues,
        onSubmit: (values) =>{
          const data={
            businessName:values.businessName,
            description:values.description,
            address:{
              streetAddress:values.streetAddress,
              city:values.city,
              stateProvince:values.stateProvince,
              postalCode:values.postalCode,
              country:values.country,
            },
           contactInformation:{
            email:values.email,
            twitter:values.twitter,
            instagram:values.instagram,
            mobileNumber:values.mobileNumber,
            linkedin:values.linkedin,
            facebook:values.facebook,
            
           },
            images:values.images,
            openingHours:values.openingHours,

          };
          console.log("data---", data)

          dispatch(createArstudio({data,token:jwt}))


        }
    })
    const handleImageChange= async(e)=>{
      const file = e.target.files[0]
      setUploadImage(true)
      const image = await uploadImageToCloudinary(file)
      console.log("image___",image)
      formik.setFieldValue("images",[...formik.values.images,image])
      setUploadImage(false)
    }
    const handleRemoveImage=(index)=>{
      const updatedImages=[...formik.values.images]
      updatedImages.splice(index,1)
      formik.setFieldValue("images",updatedImages)
    }

  return (
    <div id={style.major} className='py-10 lg:flex  min-h-screen justify-center items-center flex-col'>
       <h1 className='name font-extrabold text-4xl text-center py-2 w-[1200px] '>
        Create ArtStudio
    </h1>
        <div style={{backgroundColor:"rgb(242, 242, 242)", width:"1500px",display:"flex",paddingTop:'50px'}} className='ig:max-w-4xl text-center pb-32 '>
   
    <form 
    onSubmit={formik.handleSubmit}
    >
        
   
    <Grid container spacing={2}>
        <Grid item xs={12} className='flex flex-wrap gap-5'>
        <input
        accept='image/*'
        id='fileInput'
        type="file"
        style={{display:"none"}}
        onChange={handleImageChange}
        />
        <label className='relative' htmlFor='fileInput'>
            <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                <AddPhotoAlternate className="text-white"/>
            </span>

            {
                uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                    <CircularProgress sx={{color:"black"}}/>
                </div>
            }

        </label>
        <div className='flex flex-wrap gap-2'>
        {
            formik.values.images.map((image,index)=>
            <div className='relative'>
                <img 
                className='w-24 h-24 object-cover'
                key={index}
                src={image} alt="" />
                <IconButton 
                size='small'
                sx={{position:"absolute",top:0,right:0,outline:"none"}}
                onClick={()=>handleRemoveImage(index)}>

                 <CloseIcon sx={{fontWeight:1000,backgroundColor:"white"}}/>
                </IconButton>
            </div>)
        }
        </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="businessName"
          name="businessName"
          label="businessName"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.businessName}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='BusinessName'

          >

            </TextField>  

        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.description}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='description'

          >

            </TextField> 
            </Grid> 
            <Grid item xs={12}>
          <TextField
          fullWidth
          id="email"
          name="email"
          label="email"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='email'

          >

            </TextField>  

       

        </Grid>
            <Grid item xs={12}>
          <TextField
          fullWidth
          id="openingHours"
          name="openingHours"
          label="openingHours"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.openingHours}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='openingHours'

          >

            </TextField>  

       

        </Grid>

        <Grid item xs={12}>
          <TextField
          fullWidth
          id="streetAddress"
          name="streetAddress"
          label="streetAddress"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.streetAddress}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='streetAddress'

          >

            </TextField>  

       

        </Grid>
        <div className='flex gap-5 ml-[164px] mt-4'>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="postalCode"
          name="postalCode"
          label="postalCode"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='postalCode'

          >

            </TextField>  

       

        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="city"
          name="city"
          label="city"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.city}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='city'

          >

            </TextField>  

       

        </Grid>
        </div>

        <div className='flex gap-5 ml-[164px] mt-4'>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="stateProvince"
          name="stateProvince"
          label="stateProvince"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.stateProvince}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='state'

          >

            </TextField>  

       

        </Grid>
    
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="country"
          name="country"
          label="country"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.country}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='country'

          >

            </TextField>  

       

        </Grid>
        </div>

        
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="mobileNumber"
          name="mobileNumber"
          label="mobileNumber"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.mobileNumber}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='mobileNumber'

          >

            </TextField>  

       

        </Grid>
        <div className='flex gap-5 ml-[164px] mt-4'>

        <Grid item xs={12}>
          <TextField
          fullWidth
          id="instagram"
          name="instagram"
          label="instagram"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.instagram}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='instagram'

          >

            </TextField>  

       

        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="facebook"
          name="facebook"
          label="facebook"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.facebook}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='facebook'

          >

            </TextField>  

       

        </Grid>
        </div>

        <div className='flex gap-5 ml-[164px] mt-4'>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="linkedin"
          name="linkedin"
          label="linkedin"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.linkedin}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='linkedin'

          >

            </TextField>  

       

        </Grid>
        <Grid item xs={12}>
          <TextField
          fullWidth
          id="twitter"
          name="twitter"
          label="twitter"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.twitter}
          sx={{height:"60px",width:"590px",fontSize:"3.5rem",border:"2px solid black",}}
          placeholder='twitter'

          >

            </TextField>  

       

        </Grid>
        </div>
    </Grid>
   
        <Button  type='submit' variant='contained' sx={{fontSize:"2.0rem",marginTop:"20px", backgroundColor:"rgb(68, 71, 70)",color:"white",borderRadius:"10px"}}>
      Create ArtStudio
    </Button>

    </form>
   </div>
   </div>
   
  )

}

export default CreateArtStudioForm