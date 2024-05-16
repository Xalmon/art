import React from 'react'
import {Button } from '@mui/material'
import style from "./index.module.css"
import image from "../../../assets/images/Beyond veils.png"

const SectionTwo = () => {
  return (
    <div className={style.main}>
      
        <div>
        <Button sx={{mt:5,fontSize:"4.5rem",backgroundColor:"white", width:"500px",borderRadius:"20px",border:"4px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "rgb(68, 71, 70)",padding:"5px 5px ",fontFamily:"Georgia, serif",marginLeft:"40%"}} fullWidth type='submit' variant='contained'>Gallery</Button>
        </div>
        <div className={style.contain}>
          <div>
            <img className={style.class} src={image} alt="" />
            <p className={style.tiz}>Tizta Berhanu, Shared Melancholy , Oil on Canvas, 47 x 45 Inches, 2022.</p>
          </div>
          <div style={{marginTop:"200px",marginLeft:"60px"}}>
            <p className={style.beyond}>
              BEYOND VEILS
            </p>
            <h1 className={style.group}>
              GROUP EXHIBITION
            </h1>
            <h1 className={style.march}>
              5 MARCH - 6 APRIL 2024
            </h1>
            <h1 className={style.rele}>
            Rele, Lagos is pleased to present Beyond Veils a group exhibition presenting works
from Progress Nyandoro (Zimbabwe), Sedireng Mothibatsela (Botswana), Tizta
Berhanu (Ethiopia) and Diana Ejaita (Nigeria/Italy).
            </h1  >
            <h1 className={style.rele}>
            Beyond Veils is an examination of existence through an engagement with inner
landscapes of the body, mind and the otherworldly. From the surreal to the spiritual,
works in this exhibition transcends the corporeality of the body in engaging with the
intimate, often changing and highly contested world of the interior narrating real-life
experiences like intimacy, mutual relation, agency and the experience of knowledge.
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

export default SectionTwo