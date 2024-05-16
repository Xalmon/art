import React,{useEffect} from 'react'
import {Box,Card,CardHeader,Typography } from "@mui/material"
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {useSelector,useDispatch} from "react-redux";
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';
import { getArtStudioGenre} from '../../component/state/ArtStudio/Action.js';
import { deleteArtworkItem, getArtworkByArtStudioId } from '../../component/state/Artwork/Action.js';
import {  Avatar} from "@mui/material"
import {useNavigate} from "react-router-dom"


const orders = [1,1,1,1];


const OrdersTable = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {auth,artStudio,artWork,artStudiosOrder} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt")


        useEffect(()=>{
          dispatch(getArtStudiosOrder({
                jwt,
                artStudioId:artStudio.usersArtStudio?.id
              })) 
          
         },[])

         console.log("the ordersArtstudio__", artStudiosOrder)
  return (
    <div>
        <Box>
            <Card sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
                <CardHeader
                 title={
                    <Typography variant="h5" style={{ fontSize: "3.9rem", fontWeight: "bold" }}>
                      All Orders
                    </Typography>
                 }
                 sx={{ pt: 2, alignItems: "center", fontSize: "4.5rem", fontWeight: "bold" }}
                />
                <TableContainer component={Paper} sx={{width:"120rem"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
            <TableCell sx={{fontSize:"2.5rem"}}>ID</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem"}}>COLLECTOR</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem",marginRight:""}}>EMAIL</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem"}}>IMAGE</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem"}}>PRICE</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem"}}>NAME</TableCell>
            <TableCell align="right" sx={{fontSize:"2.5rem"}}>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artStudiosOrder.orders?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem" }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:"2.5rem"}}>
                {item.id}
              </TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}>{"John"}</TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}>{item.collector.email}</TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}></TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}></TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}></TableCell>
              <TableCell align="right" sx={{fontSize:"2.5rem"}}>{"PENDING"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Card>
        </Box>
    </div>
  )
}

export default OrdersTable