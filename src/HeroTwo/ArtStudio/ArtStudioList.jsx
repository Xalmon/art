import React from 'react'
import {Card} from "@mui/material"
import style from "./ArtStudioList.module.css"
// import image from "../../assets/images/index.jpeg"
import { Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { addToFavorite } from '../../component/state/Authentication/Action';
import { isPresentInFavorites } from '../../component/config/logic';

const ArtStudioList = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)

  const handleAddToFavorite =()=>{
    dispatch(addToFavorite({artStudioId:item.id,jwt}))
  }

   const handleNavigateToArtStudio = () =>{
             if(item.open){
                  navigate(`/artStudioDetails/${item.address.city}/${item.businessName}/${item.id}`)
             }
       }
  


  return (
    <Card className={style.main}>
        <div className={`${item.open ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
           <img 
           className={style.image}
           src={item.images[0]} alt="" /> 

           <Chip
           size='big'
           className='absolute top-2 left-2'
           color={item.open?"success":"error"}
           label={item.open?"open": 'closed'}
           />
          
        </div>
        <div  className={style.name}>
          <div className={style.title}>
            <p onClick={handleNavigateToArtStudio} className={style.african}>
              {item.businessName}
              </p>
              <p className={style.dive}>
              {item.description}
              </p>


          </div>
          <div>
                <IconButton onClick={handleAddToFavorite}>
                    {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
              </div>

        </div>

    </Card>
  )
}

export default ArtStudioList