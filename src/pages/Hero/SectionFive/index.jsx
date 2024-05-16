import React from 'react'
import image from "../../../assets/images/wrap.png"
import {Button } from '@mui/material'
import style from "./index.module.css"

const SectionFive = () => {
  return (
    <div className={style.main}>
      
    <div className={style.contain}>
        
    <div style={{marginTop:"200px",marginLeft:"60px"}}>
        <p className={style.beyond}>
        IT’S A WRAP
        </p>
        <h1 className={style.group}>
        G R O U P  E X H I B I T I O N
        </h1>
        <h1 className={style.march}>
        5 - 31 DECEMBER 2023 <br/>
LAGOS (DECEMBER 5 - DECEMBER 31, 2023)
        </h1>
        <h1 className={style.rele}>
        The exhibition delves into the intricate interiority that characterizes sober reflections
on endings and the cyclical nature of beginnings. This exhibition mirrors the nuanced
and contemplative journey towards closure, inviting viewers to contemplate personal
and collective conclusions and the aftermath–the conclusion of one phase emerging
as a threshold and marking the inception of another.
        </h1  >
        <h1 className={style.rele}>
        It features works that compellingly position figures–some in a stance of defiant
retreat–creating a thought-provoking visual narrative that serve as focal points within
the artworks, offering a nuanced exploration of human emotions and responses to
endings. Endings, portrayed as reflective moments, unveil the transformative power
that resides within farewells and the cycle that continues afterwards.
        </h1>

        <p className={style.read}>
        READ MORE
        </p>
        <div className={style.but}>
        <Button  sx={{mt:5,fontSize:"1.8rem",backgroundColor:"rgb(68, 71, 70)", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginBottom:"60px",padding:"20px 80px"}} fullWidth type='submit' variant='contained'>ENQUIRE</Button>
        </div>
      </div>
      <div>
        <img className={style.class} src={image} alt="" />
        <p className={style.tiz}>Marcellina Akpojotor, Dear Elizabeth, 2023, Fabric, Paper and Acrylic on Canvas, 60 x 48
inCHES</p>
      </div>
     
      
    </div>
</div>
  )
}

export default SectionFive