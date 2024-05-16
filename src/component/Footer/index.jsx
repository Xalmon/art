import React from 'react'
import image from "../../assets/images/bronze.jpg"
import style from "./index.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'


const Footer = () => {
  return (
    <div className={style.main} >
        <div className={style.contain}>
            <div>
            <div style={{display:"flex",backgroundColor:"white",width:"320px",padding:"20px"}}>
                <h1 className={style.art}>
                    ART
                </h1>
                <h1  className={style.exp}>
                    XPRESS
                </h1>
            </div>
            <div style={{marginTop:"50px"}}>
                <TwitterIcon style={{color:"white",fontSize:"5.8rem",borderRadius:"50%"}}/>
                <InstagramIcon style={{color:"rgb(68, 71, 70)",fontSize:"5.5rem",borderRadius:"15px",backgroundColor:"white"}}/>
                <LinkedInIcon  style={{color:"white",fontSize:"7.0rem",borderRadius:"15px"}}/>
                <FacebookIcon  style={{color:"rgb(68, 71, 70)",fontSize:"5.8rem",borderRadius:"50%",backgroundColor:"white",}}/>
            </div>
            </div>
            <div style={{marginTop:"60px"}}>
                <h1 className={style.lc}>
                    LOCATION:
                </h1>
                <p className={style.way}>
                312 HERBERT MACAULAY WAY,
                </p>
                <p className={style.way}>
                SABO YABA LAGOS
                </p>
            </div>
            <div style={{lineHeight:"120px",marginTop:"50px"}}>
                <h1 className={style.lc}>
                TERMS OF SERVICE
                </h1>
                <h1 className={style.lc}>
                PRIVACY POLICY
                </h1>
            </div>
        </div>
      
    </div>
  )
}

export default Footer