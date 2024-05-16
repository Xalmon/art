import React,{useEffect} from 'react'
import style from "./index.module.css"
import InnerSectionTwo from '../InnerSectionTwo'
import ArtStudioList from '../ArtStudio/ArtStudioList'
import {useDispatch,useSelector} from "react-redux"
import { getAllArtstudios } from '../../component/state/ArtStudio/Action'

// import {useNavigate} from "react-router-dom";

// const artStudios = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const InnerSection = () => {
       const dispatch = useDispatch()
       const jwt = localStorage.getItem("jwt")
       const {artStudio} = useSelector(store=>store)
      //  const navigate = useNavigate()

       console.log("The artstudios: ", artStudio)

       useEffect(()=>{
        dispatch(getAllArtstudios(jwt))
       
       },[])

      
  return (
    <div className={style.main}>
        <section className={style.banner}>
            <div className={style.contain}>
              <h1 className={style.art}>ART EXPRESS</h1>
              <p className={style.unlock}>Unlock a world of creativity and inspiration at ArtXpress, your premier destination for purchasing breathtaking artistic drawings online.</p> 
            </div>
            <div className={style.cover}></div>
          <div className={style.fade}></div>
        </section>
        <section className={style.sec}>
          <p className={style.top}>
            TOP ARTWORKS
          </p>
          <InnerSectionTwo/>
        </section>
        <section className={style.order}>
          <h1 className={style.text}>
            Order From Our Handpicked Favorites ArtStudio
          </h1>
          <div className={style.artStudio}>
            {
              artStudio.artStudios.map((item)=><ArtStudioList item={item}/>)
            }
          </div>
        </section>
    </div>
  )
}

export default InnerSection