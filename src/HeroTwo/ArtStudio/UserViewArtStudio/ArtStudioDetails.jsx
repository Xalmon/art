import React, { useState,useEffect } from 'react'
import style from "./index.module.css"
import {Grid} from '@mui/material'
// import image from '../../../assets/images/first.jpg'
// import image2 from '../../../assets/images/second.jpg'
// import image3 from '../../../assets/images/third.jpg'
import Modal from './index.jsx'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InfoIcon from '@mui/icons-material/Info';
import {Divider,Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArtWorkListCard from './ArtWorkListCard.jsx'
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { getArtstudioById } from '../../../component/state/ArtStudio/Action.js'
import { getArtStudioGenre } from '../../../component/state/ArtStudio/Action.js'
import { getArtworkByArtStudioId } from '../../../component/state/Artwork/Action.js'





// const Categories=[
//   "Sculpture",
//   "Pencil Drawing",
//   "Pen Drawing",
//   "Paint Drawing",
//   "Glass Drawing"

// ]
const ArtStudioDetails = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth,artStudio,artWork} = useSelector(store=>store)
  const [selectedCategory, setSelectedCategory] = useState("")


  const { city, businessName, id } = useParams();

  

  // const [categories, setCategories] = useState("all");
  
  const handleFilter = (e,value)=>{
    setSelectedCategory(value)
    console.log("THE FILTER: ",e.target.value,e.target.name,value)
  }

  useEffect(()=>{
    dispatch(getArtstudioById({jwt,artStudioId:id}))
    dispatch(getArtStudioGenre({jwt,artStudioId:id}))
   
  },[])

  useEffect(()=>{
    dispatch(getArtworkByArtStudioId({jwt,artStudioId:id,artworkGenre:selectedCategory,}))
  },[selectedCategory])

  console.log("My ArtStudio", artStudio)
  console.log("All the genres", artStudio.genres)
  console.log("My list Of Artworks", artWork)
  console.log("selected items:", artWork.artworkItems)

  // const artworks = [1,1,1,1,1,1]

  const allImage = [
    artStudio.artStudio?.images[0],
    artStudio.artStudio?.images[1],
    artStudio.artStudio?.images[2],
  ]
  return (
    <div id={style.main}>
       <section>
        <h3 style={{position:"relative",left:"632px",top:"70px",color:"rgb(68, 71, 70)",width:"500px"}}>
          Home/Nigeria/Artworks/4
        </h3>
        <div className={style.modal}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Modal images={allImage}/>

            </Grid>

          </Grid>
        </div>
        <div className={style.name}>
            <h1 className={style.font}>
           {businessName}
            </h1>
            <div className={style.det}>
            <div style={{display:"flex",padding:"10px"}}>
            
            <InfoIcon style={{fontSize:"3.0rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> DESCRIPTION:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
            {artStudio.artStudio?.description}
            </p>
            </div>
            <div style={{display:"flex",padding:"10px"}}>
            
            <LocationOnIcon style={{fontSize:"3.0rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> LOCATION:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
            {artStudio.artStudio?.address.streetAddress} <span className='city ml-3'>{city}</span> <span className='city ml-3'>{artStudio.artStudio?.address.stateProvince}</span><span className='city ml-3'>{artStudio.artStudio?.address.country}</span>
            </p>
            </div>
            <div style={{display:"flex",padding:"10px"}}>
            
            <CalendarTodayIcon style={{fontSize:"2.7rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> OPENING HOURS:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
            {artStudio.artStudio?.openingHours}

            </p>
            </div>
            </div>
        </div>
       </section>
      
        <Divider style={{marginTop:"30px",fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <section className={style.third}>
          <div className={style.div}>
           <div className={style.filter}>
              <div style={{marginLeft:"100px"}}>
                <Typography variant='h5' sx={{paddingBottom:"1rem",fontSize:"2.5rem",fontWeight:"1000",color:"rgb(68, 71, 70)"}}>

                GENRES
                </Typography>
                <FormControl className={style.form} component={"fieldset"}>
                  <RadioGroup 
                  onChange={handleFilter} 
                  name='artwork_genre' 
                  value={selectedCategory}
                  >
                      {artStudio.genres.map((item) => (
                       
                        <FormControlLabel 
                        key={item.genreName}
                        value={item.genreName}
                        control={<Radio/>}
                        label={<span style={{ fontSize: '2rem',fontWeight:"1000",color:"rgb(68, 71, 70)" }}>{item.genreName }</span>}
                       
                        />
                        
                      ))}
                  </RadioGroup>

                </FormControl>
              </div>
           </div>
          </div>
          <div className={style.divs}>
            <p style={{fontWeight:"1000",color:"rgb(68, 71, 70)"}}>ARTWORKS</p>
         {artWork.artworkItems.map((item)=><ArtWorkListCard item={item}/>)}
         </div>
       </section>
        </div>
  )
}

export default ArtStudioDetails