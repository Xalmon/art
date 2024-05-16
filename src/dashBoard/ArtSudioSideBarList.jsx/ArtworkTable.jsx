import React,{useEffect} from 'react'
import {Box,Card,CardHeader,Typography } from "@mui/material"
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CreateIcon from "@mui/icons-material/Create"
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import CreateArtwork from '../../pages/CreateArtwork/CreateArtwork';
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';
import { getArtStudioGenre} from '../../component/state/ArtStudio/Action.js';
import { deleteArtworkItem, getArtworkByArtStudioId } from '../../component/state/Artwork/Action.js';
import {  Avatar} from "@mui/material"




const ArtworkTable = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {auth,artStudio,artWork} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt")

  useEffect(()=>{
    
    
    dispatch(getArtStudioGenre({jwt,artStudioId:artStudio.usersArtStudio?.id}));
    dispatch(getArtworkByArtStudioId({artStudioId:artStudio.usersArtStudio?.id,jwt:localStorage.getItem("jwt"),
    artworkGenre:""
  }))
    dispatch(getArtStudiosOrder({
        jwt,artStudioId:artStudio.usersArtStudio?.id

    }))
},[])

  console.log("the artwork",artWork)
console.log(artWork)
   
  const handleDeleteArtwork=(artworkId)=>{
    dispatch(deleteArtworkItem({artworkId,jwt}))
  }
 
    return (
        <div>
            <Box>
                <Card sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
                    <CardHeader
                     action={
                        <IconButton aria-label='settings' onClick={()=>navigate("/user/createArtwork")}>
                        <CreateIcon sx={{fontSize:"2.8rem"}}/>
                        </IconButton>
                     }
                     title={
                        <Typography variant="h5" style={{ fontSize: "3.9rem", fontWeight: "bold" }}>
                          Artworks
                        </Typography>
                     }
                     sx={{ pt: 2, alignItems: "center", fontSize: "4.5rem", fontWeight: "bold" }}
                    />
                    <TableContainer component={Paper} sx={{width:"120rem"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
              <TableCell  sx={{fontSize:"2.5rem"}}>ID</TableCell>
                <TableCell sx={{fontSize:"2.5rem"}}>IMAGE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>TITLE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>PRICE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>AVAILABILITY</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>Artwork GENRE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>DELETE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artWork.artworkItems?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem" }}
                > 
                  <TableCell  sx={{fontSize:"2.5rem"}}>{item.id}</TableCell>
                  <TableCell component="th" scope="row" sx={{fontSize:"2.5rem"}}>
                    
                    <Avatar src= {item.images[0]} sx={{fontSize:"5.5rem"}} className='w w-[800px]'>
                    </Avatar>
                  </TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{item.name}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>₦{item.price}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{item.available?"in_stock": "out_of_stock"}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{item.genre?.genreName}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}><IconButton onClick={()=>handleDeleteArtwork(item.id)}><DeleteIcon  sx={{fontSize:"2.8rem"}}/></IconButton></TableCell>
        
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

export default ArtworkTable

