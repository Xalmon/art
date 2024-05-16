
import React,{useState} from 'react'
import style from "./Style.module.css"
import {Card, Typography,FormControl,FormControlLabel,RadioGroup} from "@mui/material"
import Radio from '@mui/material/Radio';
import OrdersTable from './OrdersTable';

const orderStatus=[
    {label:"pending",value:"Pending"},
    {label:"completed",value:"Completed"},
    {label:"all",value:"All"}
]

export const ArtStudioOrders = () => {
    const [filterValue,setFilterValue] = useState();
    const handleFilter=()=>{

    }
  return (
    <div id={style.com} >
       <div className='flex justify-center'>
       <Card id={style.card}  className='p-5 text-white h-52 relative right-96  '>
        <Typography sx={{paddingBottom: "1rem"}} variant='h5'>
          <span className='text-3xl font-extrabold '> Order Status</span> 
        </Typography>
        <FormControl>
            <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
              {
                orderStatus.map((item)=><FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio/>}
                label={<span style={{ fontSize: '2rem',fontWeight:"1000",color:"rgb(68, 71, 70)" }}>{item.label}</span>}
                sx={{color:'grey',fontSize:"2.5rem"}}
                />)
              }
            </RadioGroup>
        </FormControl>
  
       </Card>
       </div>
         <div className='flex px-[50rem]'>
         <OrdersTable/>
         </div>
       </div>
   
  )
}
