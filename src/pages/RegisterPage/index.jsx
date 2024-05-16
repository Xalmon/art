import React, { useState } from 'react'
import style from './index.module.css'
import image from "../../assets/images/structures.png"
import { Field, Form, Formik } from 'formik'
import { Button, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Validation from "../../validation/validation"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { registerUser } from '../../component/state/Authentication/Action'


const initialValues = {
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    phoneNumber:"",
    role:""
 }



const RegisterPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

   const handleSubmit = (values) =>{
    dispatch(registerUser({userData:values,navigate}))
      console.log("form values: ",values)

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
           <img src={image} alt="" />
        </div>
        <div className={style.second}>
            <h1 className={style.login}>REGISTER</h1>
         <div className={style.form}>
         <Formik onSubmit={handleSubmit} initialValues={initialValues}>
  {({ values, handleChange, handleBlur }) => (
    <Form>
      <Field
  className={style.paste}
  type="text"
  id="firstName"
  name="firstName"
  placeholder='Enter your firstName'
  required
/>
<Field
  className={style.paste}
  type="text"
  id="lastName"
  name="lastName"
  placeholder='Enter your lastName'
  required
/>
<Field
  className={style.paste}
  type={showPassword ? "text" : "password"}
  id="password"
  name="password"
  placeholder='Enter a password'
  required
/>
<IconButton
  sx={{ color: "black", position: "relative", right: "50px", fontSize: "2.5rem" }}
  aria-label="toggle password visibility"
  onClick={handleClickShowPassword}
  onMouseDown={handleMouseDownPassword}
>
  {showPassword ? <Visibility /> : <VisibilityOff />}
</IconButton>
<Field
  className={style.paste}
  type="email"
  id="email"
  name="email"
  placeholder='Enter your email'
  required
/>
<Field
  className={style.paste}
  type="tel"
  id="phoneNumber"
  name="phoneNumber"
  placeholder='Enter your phoneNumber'
  required
/>

<div>
  <Field
    as="select"
    className={style.paste}
    id="role"
    name="role"
    required
  >
    <option value={""}>Select a role to register as</option>
    <option value={"ROLE_COLLECTOR"}>COLLECTOR</option>
    <option value={"ROLE_ARTIST_OWNER"}>ARTIST_OWNER</option>
  </Field>
</div>
      <Button
        sx={{ mt: 5, fontSize: "2.5rem", backgroundColor: "rgb(68, 71, 70)", width: "400px", marginLeft: "32%", borderRadius: "5px", color: "white" }}
        fullWidth
        type='submit'
        variant='contained'
      >
        Register
      </Button>
    </Form>
  )}
</Formik>
         </div>

         <div  className={style.suggestion}>
            <h1>
               Already Have An Account <span onClick={()=>navigate('/user/login')} style={{color: "Brown", marginLeft: "40px",cursor:"pointer"}}>Sign in </span> 
            </h1>
           </div>
           

        </div>
    </div>
  )
}

export default RegisterPage