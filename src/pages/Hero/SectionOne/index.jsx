import React from 'react'
import images from "../../../assets/images/images.jpeg"
import style from "./index.module.css"
import {Button } from '@mui/material'

const index = () => {

  return (
    <div className={style.main}>
        <div style={{display:"flex",gap:"40px",marginLeft:"90px",marginTop:"160px"}}>
        <div style={{marginTop:"35px"}}>
            <img className={style.image} src={images} alt="" />
        </div>
        <div>
            <h1 className={style.art}>
                ARTXPRESS <br/> EMPOWERING <br/> THE CREATIVE SPIRIT.
            </h1>
            <div style={{background:"rgb(68, 71, 70)",height:"15px",width:"1150px"}}></div>
            <h1 className={style.h}>
            Forget the limitations of physical galleries. ArtXpress ushers you into a boundless
realm where digital artistry thrives. Here, passionate collectors can embark on a
captivating odyssey through a treasure trove of digital masterpieces. From
whimsical illustrations that evoke childlike wonder to thought-provoking pieces
that challenge your perspective, ArtXpress offers a kaleidoscope of artistic
expression. But ArtXpress transcends a mere gallery; it's a vibrant ecosystem teeming
with the creative energy of visionary digital artists. It's not just about admiring these
works – it's about becoming a patron of the future. With a simple click and collect,
you can become a champion of the digital art revolution, supporting
groundbreaking talent and securing a coveted piece of this artistic movement's
burgeoning history. So, whether you seek a statement piece to ignite your physical
space or a captivating addition to your virtual world, ArtXpress beckons you to
delve into the depths of artistic expression and discover art that resonates deeply
            </h1>
            <div style={{marginBottom:"20px",display:"flex",}}>
        <Button  sx={{mt:5,fontSize:"2.0rem",backgroundColor:"white", width:"300px",borderRadius:"5px",border:"4px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "rgb(68, 71, 70)",padding:"23px "}} fullWidth type='submit' variant='contained'>Market Place</Button>
        <Button  sx={{mt:5,fontSize:"2.0rem",backgroundColor:"rgb(68, 71, 70)", width:"250px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginLeft:"20px"}} fullWidth type='submit' variant='contained'>Artists</Button>
        </div>    

        </div>
        </div>
    </div>
  )
}

export default index