import * as actions from './ActionType'
import {  api } from '../../config/api'

export const createArtworkItem = ({artworkData,jwt}) => {
    return async(dispatch) => {
        dispatch({type:actions.CREATE_ARTWORK_ITEM_REQUEST});
        try{
            const {data} = await api.post("/api/admin/artwork",artworkData,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            } );
            dispatch({type:actions.CREATE_ARTWORK_ITEM_SUCCESS,payload:data});  
            console.log("created artwork: ", data) ;

    } catch(error) {
        dispatch({type:actions.CREATE_ARTWORK_ITEM_FAILURE,payload:error});
        console.log("error artwork: ", error)  
    }
    }
}

export const getArtworkByArtStudioId = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_REQUEST});
    try{
        const { data } = await api.get(`/api/artwork/artStudio/${reqData.artStudioId}?artwork_genre=${reqData.artworkGenre}`,
    {
        headers:{
            Authorization: `Bearer ${reqData.jwt}`

        }
    });
    dispatch({type:actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_SUCCESS,payload:data});  
    console.log("Get artwork by Id request: ", data) ;
    }catch(error) {
        dispatch({type:actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_FAILURE,payload:error});
        console.log("error artwork: ", error)  
    }
}
}


export const searchArtworkItem = ({keyword,jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.SEARCH_ARTWORK_REQUEST});
        try {
            const { data } = await api.get(`/api/artwork/search?keyword=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("keyword: ", data)
            dispatch({type:actions.SEARCH_ARTWORK_SUCCESS,payload:data});
        }catch(error) {
            dispatch({type:actions.SEARCH_ARTWORK_FAILURE,payload:error});
            console.log("keyword error: ", error)  
        }

    }
}

export const updateArtworkItemAvailability = ({artworkId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.UPDATE_ARTWORK_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put( `/api/admin/artwork/${artworkId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }

            )
            console.log("Updated: ", data);
            dispatch({type:actions.UPDATE_ARTWORK_AVAILABILITY_SUCCESS,payload:data});

        }catch(error) {
            dispatch({type:actions.UPDATE_ARTWORK_AVAILABILITY_FAILURE,payload:error});
            console.log("keyword error: ", error)  
        }
    }
}


export const deleteArtworkItem = ({artworkId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:actions.DELETE_ARTWORK_REQUEST});
        try {
            const {data} = await api.delete( `/api/admin/artwork/${artworkId}`,
           
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }

            )
            console.log("DELETED: ", data);
            dispatch({type:actions.DELETE_ARTWORK_SUCCESS,payload:data});

        }catch(error) {
            dispatch({type:actions.DELETE_ARTWORK_FAILURE,payload:error});
            console.log("delete error: ", error)  
        }
    }
}

