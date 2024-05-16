import React from 'react'
import image from "../../../assets/images/boy.png"
import {Button } from '@mui/material'
import style from "./index.module.css"

const SectionSix = () => {
  return (
    <div className={style.main}>
      
        <div className={style.contain}>
          <div>
            <img className={style.class} src={image} alt="" />
            <p className={style.tiz}>David Ngaji, Parable of the last man, Oil on Canvas, 48 x 48 Inches, 2023</p>
          </div>
          <div style={{marginTop:"50px",marginLeft:"60px"}}>
            <p className={style.beyond}>
            PEJU ALATISE: WE CAME WITH
THE LAST RAIN
            </p>
            <h1 className={style.group}>
            LONDON
            </h1>
            <h1 className={style.march}>
            21 FEBRUARY - 23 MARCH 2024
            </h1>
            <h1 className={style.rele}>
            Dear Sim,
It rains in my dreams. Every time I close my eyes, I see rain. Big fat glistening silver
droplets. Do you remember when we asked our good witch how the clouds become
rain? She said the clouds were wings of children that have never visited earth. She
said when the children wash their dirty wings, it rains on us. But we didn't believe
her; there is no dirt in the sky!
            </h1  >
            <h1 className={style.rele}>
            SIM! She is not entirely wrong. Last night I dreamed of rain yet again. Wind swept
me up sky high. And I saw it for myself. There are many types of clouds. There are
special clouds that are floating babies sleeping in nests like smoke.
            </h1>
            <h1 className={style.rele}>
            Orunmenitomala took me from Wind and walked me through Orun. Sim, the nests
look like smoke but they are really music, strings of music tightly woven together.
The music keeps the babies asleep. Orunmenitomala did not speak but I understood
all. Orun's words are in the music.
            </h1>

            <p className={style.read}>
            READ MORE
            </p>
            <div className={style.but}>
            <Button  sx={{mt:5,fontSize:"1.8rem",backgroundColor:"rgb(68, 71, 70)", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginBottom:"60px",padding:"20px 80px"}} fullWidth type='submit' variant='contained'>ENQUIRE</Button>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default SectionSix