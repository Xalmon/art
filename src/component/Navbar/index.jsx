import React,{useState} from 'react'
import style from "./index.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import sculpture from "../../assets/images/sculpture.jpg"


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
    <div className={style.main}>
    <div style={{display:"flex",backgroundColor:"white",width:"320px",padding:"20px",marginTop:"30px",marginLeft:"50px"}}>
                <h1 className={style.art}>
                    ART
                </h1>
                <h1  className={style.exp}>
                    XPRESS
                </h1>
            </div>
      <div className={style.contain}>
          <h1 style={{cursor:"pointer"}}>
            HOME
          </h1>
          <h1 style={{cursor:"pointer"}}>
            MARKETPLACE
          </h1>
          <h1 style={{cursor:"pointer"}}>
            ARTISTS
          </h1>
          <h1 style={{cursor:"pointer"}}>
            ABOUT
          </h1>
          <h1 style={{cursor:"pointer"}}>
            BLOG
          </h1>
          <h1 style={{cursor:"pointer"}}>
            EXHIBITION
          </h1>
        </div>
        <div style={{marginTop:"15px",marginRight:"100px",display:"flex",gap:"120px"}}>
          <div style={{marginTop:"40px"}}>
        <ShoppingCartIcon sx={{fontSize:"3.5rem",color:"rgb(68, 71, 70)",fontSize:"3.8rem",}} 
        onClick={()=>setShowModal(true)}/>
        </div>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
           <div className={style.modal}>
            <img src={sculpture} alt="" className={style.image}/>
            <div className={style.head}>
              User must be LoggedIn to Access Cart
            </div>
            <div className={style.click}>
              Click the Button Below to Login
        
            </div>
            <Button onClick={()=>navigate('/user/login')} sx={{mt:10,fontSize:"2.5rem",backgroundColor:"rgb(68, 71, 70)", width:"400px",borderRadius:"5px",color:"white"}} fullWidth type='submit' variant='contained'>
              LOGIN
            </Button>

           </div>

        </Modal>
         
        <div style={{marginBottom:"20px",display:"flex",}}>
        <Button onClick={()=>navigate('/user/register')} sx={{mt:5,fontSize:"1.5rem",backgroundColor:"white", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "rgb(68, 71, 70)",}} fullWidth type='submit' variant='contained'>Sign Up</Button>
        <Button onClick={()=>navigate('/user/login')} sx={{mt:5,fontSize:"1.5rem",backgroundColor:"rgb(68, 71, 70)", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginLeft:"20px"}} fullWidth type='submit' variant='contained'>LOGIN</Button>
        </div>
        </div>
        </div>
        
        <div style={{backgroundColor:"rgb(68, 71, 70)",height:"20px",marginTop:"20px"}}>

        </div>
        </div>

        
  )
}

export default Navbar