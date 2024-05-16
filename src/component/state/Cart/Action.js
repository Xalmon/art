import * as actions from './ActionType'
import {  api } from '../../config/api'

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type:actions.FIND_CART_REQUEST});
        try {
            const resp = await api.get("/api/cart",{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
        dispatch({type:actions.FIND_CART_SUCCESS,payload:resp.data})
        console.log("found cart: ", resp.data);
        }
        catch(error){
            dispatch({type:actions.FIND_CART_FAILURE,payload:error})
            console.log("error: ", error)

        }
    }
}

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_ALL_CART_ITEMS_REQUEST});
        try {
            const resp = await api.get(`/api/carts/${reqData.cartId}/items`,{
                headers:{
                    Authorization: `Bearer ${reqData.token}`,
                }
            });
        dispatch({type:actions.GET_ALL_CART_ITEMS_SUCCESS,payload:resp.data})
        console.log("getAll cart: ", resp.data);
        }
        catch(error){
            dispatch({type:actions.GET_ALL_CART_ITEMS_FAILURE,payload:error})
            console.log("getAll error: ", error)

        }
    }
}

export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.ADD_ITEM_TO_CART_REQUEST});
        try {
            const {data} = await api.put(`/api/cart/add`,reqData.cartItem,{
                headers:{
                    Authorization: `Bearer ${reqData.token}`,
                }
            });
        dispatch({type:actions.ADD_ITEM_TO_CART_SUCCESS,payload:data})
        console.log("added cartitem: ", data);
        }
        catch(error){
            dispatch({type:actions.ADD_ITEM_TO_CART_FAILURE,payload:error})
            console.log("item error: ", error)

        }
    }
}

export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.UPDATE_CARTITEM_REQUEST});
        try {
            const {data} = await api.put(`/api/cart-item/update`,reqData.data,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            console.log("updated cartitem: ", data);
            dispatch({type:actions.UPDATE_CARTITEM_SUCCESS,payload:data})
       
        }
        catch(error){
            dispatch({type:actions.UPDATE_CARTITEM_FAILURE,payload:error})
            console.log("update error: ", error.message)

        }
    }
}

export const removeCartItem = (cartItemId,jwt) => {
    return async (dispatch) => {
        dispatch({type:actions.REMOVE_CARTITEM_REQUEST});
        try {
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                }
            });
        dispatch({type:actions.REMOVE_CARTITEM_SUCCESS,payload:cartItemId})
        console.log("Removed cartitem: ", data);
        }
        catch(error){
            dispatch({type:actions.REMOVE_CARTITEM_FAILURE,payload:error.message})
            console.log("remove error: ", error)

        }
    }
}

export const clearCart = () => {
    return async (dispatch) => {
        dispatch({type:actions.CLEAR_CART_REQUEST});
        try {
            const {data} = await api.put(`/api/cart/clear`,{},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                }
            });
        dispatch({type:actions.CLEAR_CART_SUCCESS,payload:data})
        console.log("clear cart: ", data);
        }
        catch(error){
            dispatch({type:actions.CLEAR_CART_FAILURE,payload:error.message})
            console.log("catch error: ", error)

        }
    }
}





