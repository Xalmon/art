import React,{useState,useEffect} from 'react'
import style from "./CreateArtwork.module.css"
import { useFormik } from 'formik'
import { Grid,CircularProgress,Button } from "@mui/material";
import { AddPhotoAlternate } from '@mui/icons-material';
// import Image from "../../assets/images/boy.png"
import { IconButton,TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';
import { createArtworkItem } from '../../component/state/Artwork/Action.js';

const initialValues = {
    name:"",
    description:"",
    price:null,
    genre:"",
    images:[],
    artStudioId:""
   

}

const CreateArtwork = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {auth,artStudio} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt")

    const [uploadImage,setUploadImage] =useState(false)
    const formik = useFormik({
        initialValues,
        onSubmit: (values) =>{
          // values.artStudioId = artStudio.usersArtStudio.id;
          dispatch(createArtworkItem({artworkData:values,jwt}))
          console.log("data---", values)

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
        Add New Artwork
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
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"3px solid black",}}
          placeholder='ArtworkName'

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
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"3px solid black",}}
          placeholder='description'

          >

            </TextField> 
            </Grid> 
            <Grid item xs={12}>
          <TextField
          fullWidth
          id="price"
          name="price"
          label="Price"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.price}
          sx={{height:"60px",width:"1200px",fontSize:"3.5rem",border:"3px solid black",}}
          placeholder='artwork Price'

          >

            </TextField>  

       

        </Grid>
         <Grid item xs={12}>
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{marginLeft:"150px"}}>Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="genre"
          value={formik.values.genre}
          label="Genre"
          onChange={formik.handleChange}
          name="genre"
          placeholder='genre'
          sx={{height:"60px",width:"1200px",border:"3px solid black",marginLeft:"149px"}}
        >
          {artStudio.genres?.map((item)=><MenuItem sx={{color:"white"}} key={item.id}  value={item}>{item?.genreName}</MenuItem>)}
          
        </Select>
      </FormControl>
         </Grid>
        

        
      
    </Grid>
   
        <Button type='submit' variant='contained' sx={{fontSize:"2.0rem",marginTop:"20px", backgroundColor:"rgb(68, 71, 70)",color:"white",borderRadius:"10px"}}>
      Create ArtWork
    </Button>

    </form>
   </div>
   </div>
   
  )

}

export default CreateArtwork;