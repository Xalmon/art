import React from 'react'
import {Button } from '@mui/material'
import style from "./index.module.css"
import { Form, Formik } from 'formik'


const SectionEight = () => {
  return (
    <div className={style.main}>
      <div className={style.contain}>
        <h1 className={style.stay}>
        STAY INFORMED AND ENGAGED WITH OUR <br />EXPERTLY CURATED NEWSLETTER,<br />
DIGITAL ART PULSE.
        </h1>
        <div>
         <Formik>
            <Form>
            <input className={style.paste} type="email" id="text" name="email" placeholder='Enter your email' required />
            <div className={style.but}>
        <Button  sx={{mt:5,fontSize:"1.8rem",backgroundColor:"rgb(68, 71, 70)", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginBottom:"60px",padding:"20px 170px"}} fullWidth type='submit' variant='contained'>SUBSCRIBE</Button>
        </div>
            </Form>
         </Formik>
        </div>
        <div style={{height:"120px"}}></div>
        </div>
    </div>
  )
}

export default SectionEight