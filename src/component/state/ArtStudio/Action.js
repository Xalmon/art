
import * as actions from './ActionType'
import {  api } from '../../config/api'


export const getAllArtstudios = (token) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ALL_ARTSTUDIOS_REQUEST});
        try{
            const {data} = await api.get("/api/artStudio",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type:actions.GET_ALL_ARTSTUDIOS_SUCCESS,payload:data});
            console.log("all artstudio", data)
        }catch(error){
            console.log("catch error", error)
            dispatch({type:actions.GET_ALL_ARTSTUDIOS_FAILURE,payload:error})
        }
        

    }
}


export const getArtstudioById = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ARTSTUDIO_BY_ID_REQUEST});
        try{
            const response = await api.get(`/api/artStudio/${reqData.artStudioId}`, 
            {
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            }
        );
        console.log("Get arstudio by id: ", response)
        dispatch({type:actions.GET_ARTSTUDIO_BY_ID_SUCCESS,payload:response.data})

        }catch(error){
            console.log("error",error)
            dispatch({type:actions.GET_ARTSTUDIO_BY_ID_FAILURE,payload:error})
        }
    }
}

export const getArstudioByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ARTSTUDIO_BY_USER_ID_REQUEST});
        try{
            const {data} = await api.get('/api/admin/artStudio/user', 
            {
                headers:{
                    Authorization: `Bearer ${jwt}`,
                }
            }
        );
        console.log("Get arstudio by userId: ", data)
        dispatch({type:actions.GET_ARTSTUDIO_BY_USER_ID_SUCCESS,payload:data})

        }catch(error){
            console.log("Catch error",error)
            dispatch({type:actions.GET_ARTSTUDIO_BY_USER_ID_FAILURE,payload:error})
        }
    }
}

export const createArstudio = (reqData) => {
    console.log ("user token: ", reqData.token);
    return async (dispatch) => {
        dispatch({type:actions.CREATE_ARTSTUDIO_REQUEST})
        try {
            const { data } = await api.post(`/api/admin/artStudio`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,

                }
            });
            dispatch({type:actions.CREATE_ARTSTUDIO_SUCCESS,payload:data});
            console.log("Created artStudio: ", data)
        } catch(error){
            console.log("The error: ", error)
            dispatch({type:actions.CREATE_ARTSTUDIO_FAILURE,payload:error})
        }

    }
}

export const updateArtsudio = ({artStudioId, artStudioData, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.UPDATE_ARTSTUDIO_REQUEST});
        try {
            const resp = await api.put( `/api/admin/artStudio/${artStudioId}`,
            artStudioData,
        {
         headers:{
            Authorization: `Bearer ${jwt}`,
         }
        });
        dispatch({type:actions.UPDATE_ARTSTUDIO_SUCCESS,payload:resp.data});
        console.log("updateArtsudio: ", resp)
        }catch(error){
            console.log("The artsudio error: ", error)
            dispatch({type:actions.UPDATE_ARTSTUDIO_FAILURE,payload:error})
        }

    }
}


export const deleteArtsudio = ({artStudioId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.DELETE_ARTSUDIO_REQUEST});
        try {
            const resp = await api.delete( `/api/admin/artStudio/${artStudioId}`,
        {
         headers:{
            Authorization: `Bearer ${jwt}`,
         }
        });
        dispatch({type:actions.DELETE_ARTSUDIO_SUCCESS,payload:artStudioId});
        console.log("Delte Artsudio: ", resp)
        }catch(error){
            console.log("Deleted artstudio error: ", error)
            dispatch({type:actions.DELETE_ARTSUDIO_FAILURE,payload:error})
        }

    }
}

export const updateArtsudioStatus = ({artStudioId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.UPDATE_ARTSTUDIO_STATUS_REQUEST});
        try {
            const resp = await api.put( `/api/admin/artStudio/${artStudioId}/status`,
            {},
        {
         headers:{
            Authorization: `Bearer ${jwt}`,
         }
        });
        dispatch({type:actions.UPDATE_ARTSTUDIO_STATUS_SUCCESS,payload:resp.data});
        console.log("updateArtsudioStatus: ", resp.data)
        }catch(error){
            console.log("The artsudio error: ", error)
            dispatch({type:actions.UPDATE_ARTSTUDIO_STATUS_FAILURE,payload:error})
        }

    }
}

export const getArtStudioGenre = ({jwt, artStudioId}) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ARTSUDIO_GENRE_REQUEST});
        try{
            const resp = await api.get(`/api/genre/artStudio/${artStudioId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                 }, 
            });
            dispatch({type:actions.GET_ARTSUDIO_GENRE_SUCCESS,payload:resp.data});
            console.log("Artsudio Genre: ", resp.data)
            }catch(error){
                console.log("The artsudio genre error: ", error)
                dispatch({type:actions.GET_ARTSUDIO_GENRE_FAILURE,payload:error})
            }
        }
    }


export const createCategoryAction = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.CREATE_GENRE_REQUEST});
        try{
            const resp = await api.post(`/api/admin/genre`, reqData,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                 },  
            });
            console.log("Created Artsudio Genre: ", resp.data)
            dispatch({type:actions.CREATE_GENRE_SUCCESS,payload:resp.data});
        }catch(error){
            console.log("The created genre error: ", error)
            dispatch({type:actions.CREATE_GENRE_FAILURE,payload:error})
        }
    }
}



