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
import Modal from '@mui/material/Modal';
import CreateArtworkCategory from '../../pages/CreateArtStudioForm/CreateArtworkCategory';
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';
import { getArtStudioGenre} from '../../component/state/ArtStudio/Action.js';
import { getAllArtstudios } from '../../component/state/ArtStudio/Action.js';



const orders = [1,1,1,1];

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(242, 242, 242)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ArtworkCategoryTable = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {artStudio} = useSelector(store=>store)
  const jwt = localStorage.getItem("jwt")

  useEffect(()=>{
    
    
    dispatch(getArtStudioGenre({jwt,artStudioId:artStudio.usersArtStudio?.id}));
    dispatch(getAllArtstudios(jwt))
    dispatch(getArtStudiosOrder({
        jwt,artStudioId:artStudio.usersArtStudio?.id
    }))
},[])
console.log("artstudios:____", artStudio)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <div>
            <Box>
                <Card sx={{backgroundColor:"rgb(242, 242, 242)"}}>
                    <CardHeader
                     action={
                        <IconButton onClick={handleOpen} aria-label='settings' sx={{ marginRight: "0.5rem" }}>
                        <CreateIcon sx={{fontSize:"2.8rem"}}/>
                        </IconButton>
                     }
                     title={
                        <Typography variant="h5" style={{ fontSize: "3.2rem", fontWeight: "bold" }}>
                          Artwork Genre
                        </Typography>
                     }
                     sx={{ 
                        pt: 2, 
                        alignItems: "center", 
                        fontSize: "4.5rem", 
                        fontWeight: "bold",
                        "& > *:first-child": { marginRight: "0.5rem" } 
                      }}
                    />
                    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px"}}>
                <TableCell sx={{fontSize:"2.5rem"}}>ID</TableCell>
                <TableCell align='right'  sx={{fontSize:"2.5rem"}}>GENRE NAME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artStudio.genres?.map((item) => (
                <TableRow
                  key={item.genreName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem" }}
                >
                  <TableCell sx={{fontSize:"2.5rem"}}>{item.id}</TableCell>
                  <TableCell  align='right' sx={{fontSize:"2.5rem"}}>{item.genreName}</TableCell>       
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                </Card>
                <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <CreateArtworkCategory/>
  </Box>
</Modal>

            </Box>
        </div>
      )
}

export default  ArtworkCategoryTable

