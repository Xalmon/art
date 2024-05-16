import React from 'react'
import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import style from "./index.module.css";
import image from "../../../assets/images/boy.png"
import {useDispatch,useSelector} from "react-redux"
import { addItemToCart } from '../../../component/state/Cart/Action';



const ArtWorkListCard = ({item}) => {

  const dispatch = useDispatch()

  const handleAddItemToCart = (e) =>{
    e.preventDefault()
    const reqData = {
      token:localStorage.getItem("jwt"),
     cartItem:{
      artworkId:item.id,
      quantity:1
     }
    };
    dispatch(addItemToCart(reqData))
    console.log("the cart data: ",reqData)
  }
  return (
    <Accordion style={{backgroundColor:"white"}} >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
     <div className={style.accordion}>
       <div style={{display:"flex",alignItems:"center"}}>
         <img style={{with:"200px",height:"800px"}} src={item.images[0]} alt="" />
         <div className={style.details}>
             <p style={{fontSize:"3.0rem",fontWeight:"1000"}}>
              
               Name: <span>{item.name}</span> 
             </p>
             <p>
               Price: <span>₦</span><span>{item.price}</span> 
             </p>
             <p>
              Genre: <span>{item.genre.genreName}</span>
             </p>
             
         </div>
       </div>
     </div>
    </AccordionSummary>
    <AccordionDetails>
      <form onSubmit={handleAddItemToCart}> 
      <p style={{color:"rgb(68, 71, 70)",fontWeight:"1000"}}>ARTWORK DESCRIPTION</p>
     <h3 style={{color:"rgb(68, 71, 70)"}}>{item.description} </h3> 
     <div style={{marginTop:"80px"}}>
      <Button sx={{backgroundColor:"rgb(68, 71, 70)",color:"white",fontSize:"2.0rem",padding:"20px"}} variant='contained' disabled={false} type="submit">
            {true?"Add to Cart":"Out of Stock"}
      </Button>
     </div>
     </form>
    </AccordionDetails>
  </Accordion>
  )
}

export default ArtWorkListCard