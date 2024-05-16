import React from 'react'
import {Divider} from '@mui/material'
import CartItem from './CartItem'
import style from "./Cart.module.css"
import AddressCart from './AddressCart'
import {Card,Button,Modal,Grid, TextField } from '@mui/material'
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt"
import Box from '@mui/material/Box';
import { ErrorMessage, Field, Formik,Form } from 'formik'
import * as Yup from "yup"
import {useSelector,useDispatch} from "react-redux";
import { createOrder } from '../state/Order/Action'


const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'rgb(242, 242, 242)',
    outline:"none",
    boxShadow: 24,
    border: "2px solid grey",
    p: 4,
    
  };

  const initialValues={
    streetAddress:"",
    city:"",
    stateProvince:"",
    postalCode:"",
    country:""
    
  }

  const validationSchema=Yup.object({
   streetAddress:Yup.string().required("This field Name is required"),
   stateProvince:Yup.string().required("This field Name is required"),
   postalCode:Yup.string().required("This field Name is required"),
   city:Yup.string().required("This field Name is required"),
   country:Yup.string().required("This field Name is required"),

  })

 
  



// const items = [1,1,1]



const Cart = () => {
    const {cart,auth,order} = useSelector(store=>store)
  
    const createOrderUsingSelectedAddress=()=>{ }
    const dispatch = useDispatch()
   
const handleOpenAddressModal=()=>{
    setOpen(true);

}
const [open, setOpen] = React.useState(false);


const handleClose = () => setOpen(false);

const handleSubmit = (values) =>{
  const data={
    jwt:localStorage.getItem("jwt"),
    order:{
      artStudioId:cart.cartItems[0].artwork?.artStudio?.id
      ,
      deliveryAddress:{
        firstName:auth.user?.firstName,
        streetAddress:values.streetAddress,
        city:values.city,
        stateProvince:values.stateProvince,
        postalCode:values.postalCode,
        country:values.country

      }
    }
  }
  dispatch(createOrder(data))

  console.log("value: ",values)
  console.log("the data order",data)
}
   console.log("my item: ",cart)
   console.log("my order: ",order)
  return (
    <div className={style.main}>
        <div>
        <main className='name lg:flex justify-between'>
            <section id={style.sec} className='sec lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
           {cart.cartItems.map((item)=>(
           <CartItem item={item}/>
           ))}
            <Divider  style={{marginTop:"30px",fontSize:"5.5rem",fontWeight:"1000",height:"50px"}}/>
            <div className='bill px-5 text-3xl'>
              <p className='bill font-bold py-5 text-4xl'>
                Bill Details
              </p>
              <div className='space-y-3'>
               <div className='flex justify-between text-gray-600'>
                  <p>Item Total</p>
                  <p>₦<span>{cart.cart?.total}</span></p>
               </div>
               <div className='flex justify-between text-gray-600'>
                  <p>Delivery Fee</p>
                  <p>₦<span>2000</span></p>
               </div>
               <div className='flex justify-between text-gray-600'>
                  <p>Artstudio Charges</p>
                  <p>₦<span>3000</span></p>
               </div>
               <Divider  style={{marginTop:"30px",fontSize:"5.5rem",fontWeight:"1000",height:"50px"}}/>
              </div>
              <div className='flex justify-between text-gray-600 mt-6'>
              <p>Total Pay</p>
                  <p>₦<span>{cart.cart?.total + 2000 + 3000}</span></p>
              </div>
            </div>
            </section>
            <Divider orientation='vertical' flexItem height />
            <Divider orientation='vertical' flexItem height />
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
             <div>
                <h1 className='add text-center text-3xl font-extrabold text-gray-700 py-10'>
                   Choose Delivery Address 
                </h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                 {[1,1,1,1,1].map((item)=><AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>)}

                 <Card className="flex gap-5 w-[24%] h-64 p-5 bg-white">
                <AddLocationAltIcon sx={{fontSize:"2.5rem",}}/>
                <div className='space-y-3 text-white'>
                <h1 className='font-semibold text-3xl text-white mt-1'>
                    Add New Address
                </h1>
               
                <Button variant='contained'  sx={{background:"black",color:"white", fontSize:'1.5rem'}} fullWidth onClick={handleOpenAddressModal}>
                Add
                </Button>
               
                </div>
                </Card>
                </div>
             </div>
            </section>
        </main>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={styles}>
   <Formik 
   initialValues={initialValues} 
   validationSchema={validationSchema}
   onSubmit={handleSubmit}>
    <Form>
      <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
              <Field
              as={TextField}
              name="streetAddress"
              label="streetAddress"
              fullWidth
              variant="outlined"
              />
              <div style={{color:"red"}}>
             <ErrorMessage name='streetAddress'/>
             </div>
              </div>

              <div>
              <Field
                        as={TextField}
                        name="postalCode"
                        label="postalCode"
                        fullWidth
                        variant="outlined"
                        
                       
                        // error ={!!error.streetAddress}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=><span className='text-red-600' >{msg}</span>}
                        //     </ErrorMessage>
                        // }
                      />
                      <div style={{color:"red"}}>
                      <ErrorMessage name='postalCode'/>
                      </div>
                      </div>

                      <div>
              <Field
                        as={TextField}
                        name="city"
                        label="city"
                        fullWidth
                        variant="outlined"
                    
                        />
                        <div style={{color:"red"}}>
                      <ErrorMessage name='city'/>
                      </div>
                      </div>
                      
                      <div>
                         <Field
                        as={TextField}
                        name="stateProvince"
                        label="stateProvince"
                        fullWidth
                        variant="outlined"
                    
                        />
                        <div style={{color:"red"}}>
                      <ErrorMessage name='stateProvince'/>
                      </div>
                      </div>

                      <div >

              <Field
                        as={TextField}
                        name="country"
                        label="country"
                        fullWidth
                        variant="outlined"
                        />
                        <div style={{color:"red"}}>
                      <ErrorMessage name='country'/>
                      </div>
                      </div>

            </Grid>
            <Grid item xs={12}>
               <Button fullWidth variant='contained' type='submit' sx={{backgroundColor:"grey",color:"white",marginTop:"10px"}} >Deliver Button</Button>
            </Grid>
       </Grid>
       </Form>
   </Formik>
  </Box>
</Modal>
        </div>
    </div>
  )
}

export default Cart