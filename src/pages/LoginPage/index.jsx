import React, { useState } from 'react'
import style from './index.module.css'
import image from "../../assets/images/naked.png"
import { Form, Formik } from 'formik'
import { Button, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { loginUser } from '../../component/state/Authentication/Action'

const initialValues = {
   email:"",
   password:""
}


const LoginPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleSubmit = (values) =>{
      dispatch(loginUser({userData:values,navigate}))
      console.log(values)

   }

    const [showPassword, setShowPassword] = useState(false);
   
  
    const handleClickShowPassword = () => {
       setShowPassword(!showPassword);
     };
     const handleMouseDownPassword = (event) => {
       event.preventDefault();
     };
 
 
  return (
    <div className={style.main}>
        <div >
           <img className={style.image} src={image} alt="" />
        </div>
        <div className={style.second}>
            <h1 className={style.login}>LOGIN</h1>
         <div className={style.form}>
         <Formik onSubmit={handleSubmit} initialValues={initialValues}>
         {({ values, handleChange, handleBlur }) => (
            <Form  >
           <input className={style.paste}
            type="email" 
            id="email" 
            name="email"  
            placeholder='Enter your email' 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required 

            />

           <input className={style.paste} 
           type={showPassword ? "text" : "password"}  
           id="text" 
           name="password" 
           placeholder='Enter a password' 
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}
           required  
           />
            <IconButton
                sx={{color:"black",position:"relative",right:"50px",fontSize:"2.5rem"}}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >  {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton>
           {/* <div>
           <select className={style.paste} type="text" id="text" name="text" placeholder='Enter your firstName' required >
           <option value={""}>Select a role to register as</option>
           <option value={"ROLE_COLLECTOR"}>ROLE_COLLECTOR</option>
           <option value={"ROLE_ARTSTUDIO_OWNER"}>ROLE_ARTSTUDIO_OWNER</option>
           </select>
            </div> */}
              
            <Button sx={{mt:5,fontSize:"2.5rem",backgroundColor:"rgb(68, 71, 70)", width:"400px",marginLeft:"32%",borderRadius:"5px",color:"white"}} fullWidth type='submit' variant='contained'>Login</Button>

            </Form>
             )}
</Formik>
         </div>

         <div  className={style.suggestion}>
            <h1>
               Don,t have an Account? <span onClick={()=>navigate('/user/register')} style={{color: "Brown", marginLeft: "40px",cursor:"pointer"}}>Sign up </span> 
            </h1>
           </div>
           

        </div>
    </div>
  )
  
}

export default LoginPage