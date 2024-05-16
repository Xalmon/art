import React from 'react'
import image from "../../../assets/images/What.png"
import {Button } from '@mui/material'
import style from "./index.module.css"

const SectionThree = () => {
  return (
    <div className={style.main}>
      
    <div className={style.contain}>
        
    <div style={{marginTop:"200px",marginLeft:"60px"}}>
        <p className={style.beyond}>
        WHAT'S IN A NAME?
        </p>
        <h1 className={style.group}>
        TA N Z A N I A
        </h1>
        <h1 className={style.march}>
        20 JANUARY - 24 FEBRUARY 2024
        </h1>
        <h1 className={style.rele}>
        The Rele Arts Foundation is pleased to present the 9th edition of the Young
Contemporaries programme. Initiated in 2016, the programme identifies, mentors
and promotes early-career artists from Africa, by equipping them with tools and
resources for artistic development.
        </h1  >
        <h1 className={style.rele}>
        Each year, the Foundation guides artists via its boot camp and residency
programme in Ado-Ekiti towards the creation of critical projects, encouraging
innovative explorations of existing inquiries as well as the birth of fresh ideas. This
year, the artists received guidance under the mentorship of Dr. Ugochukwu-Smooth
Nzewi (Curator, Department of Painting and Sculpture at MOMA, NewYork).
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
        <p className={style.tiz}>IyunOla Sanyaolu, A daisy by any other name won't smell as sweet, Oil on Canvas, 42 x 66
Inches, 2023.</p>
      </div>
     
      
    </div>
</div>
  )
}

export default SectionThree