import axios  from 'axios'
import * as actions from './ActionType'
import { API_URL, api } from '../../config/api'


export const registerUser = (reqData)=> async(dispatch)=>{
    dispatch({type:actions.REGISTER_REQUEST})
    try{
        const {data} = await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role === "ROLE_ARTIST_OWNER"){
            reqData.navigate("/user/form")
        }
        else{
            reqData.navigate("/inner")
        }
        dispatch({type:actions.REGISTER_SUCCESS,payload:data.jwt});
        console.log("Register Successful",data)

    }catch (error){
        dispatch({type:actions.REGISTER_FAILURE,payload:error})
        console.log("error: ",error)
    }
}


export const loginUser = (reqData)=> async(dispatch)=>{
    dispatch({type:actions.LOGIN_REQUEST})
    try{
        const {data} = await axios.post(`${API_URL}/auth/signIn`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.user === "ROLE_ARTIST_OWNER"){
            reqData.navigate("/inner")
        }
        else{
            reqData.navigate("/inner")
        }
        dispatch({type:actions.LOGIN_SUCCESS,payload:data.jwt});
        console.log("Login successful",data)

    }catch (error){
        dispatch({type:actions.LOGIN_FAILURE,payload:error})
        console.log("error: ",error)
    }
}

export const getUser = (jwt)=> async(dispatch)=>{
    dispatch({type:actions.GET_USER_REQUEST})
    try{
        const {data} = await api.get(`/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
       
        dispatch({type:actions.GET_USER_SUCCESS,payload:data})
        console.log("user profile",data)

    }catch (error){
        dispatch({type:actions.GET_USER_FAILURE,payload:error})
        console.log("error: ",error)
    }
}

export const addToFavorite = ({jwt,artStudioId})=> async(dispatch)=>{
    dispatch({type:actions.ADD_TO_FAVORITE_REQUEST})
    try{
        const {data} = await api.put(`/api/artStudio/${artStudioId}/add-favorites`,{},{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
       
        dispatch({type:actions.ADD_TO_FAVORITE_SUCCESS,payload:data})
        console.log("ADDED TO FAVORITE",data)

    }catch (error){
        dispatch({type:actions.ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("error: ",error)
    }
}

export const logOut = ()=> async(dispatch)=>{
   
    try{
        localStorage.clear();
        dispatch({type:actions.LOGOUT})
        console.log("Logout successful")

    }catch (error){
        console.log("error: ",error)
    }
}






