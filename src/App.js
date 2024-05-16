import logo from './logo.svg';
import './App.css';
import { Routes } from './Route';
import {useRoutes} from "react-router-dom"
import { DefaultTheme } from './Theme/DefaultTheme';
import {CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getUser } from './component/state/Authentication/Action';
import { findCart } from './component/state/Cart/Action';
import { getArstudioByUserId } from './component/state/ArtStudio/Action';

function App() {
  const dispatch=useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)
  useEffect(()=>{
   dispatch(getUser(auth.jwt || jwt))

   dispatch(findCart(jwt))
  },[auth.jwt])

  useEffect(()=>{
    dispatch(getArstudioByUserId(jwt))

  },[auth.user])

  
  
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
     {useRoutes(Routes) }
    </ThemeProvider>
    )
}

export default App;
