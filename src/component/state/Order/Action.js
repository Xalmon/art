import * as actions from './ActionType'
import {  api } from '../../config/api'

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type:actions.CREATE_ORDER_REQUEST})
        try{
            const {data} = await api.post('/api/order',reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            // if(data.payment_url){
            //     window.location.href=data.payment_url;
            // }
            console.log("created order data: ", data)
            dispatch({type:actions.CREATE_ORDER_SUCCESS,payload:data})
        }catch(error){
            console.log("error: ", error);
            dispatch({type:actions.CREATE_ORDER_FAILURE,payload:error})

        }
    }
};


export const getUsersOrder = (jwt) => {
    return async (dispatch) => {
        dispatch({type:actions.GET_USERS_ORDERS_REQUEST});
        try {
            const {data} = await api.get('/api/order/user', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("users order: ", data)
            dispatch({type:actions.GET_USERS_ORDERS_SUCCESS,payload:data});

        }catch(error){
            console.log("getOrder error: ", error);
            dispatch({type:actions.GET_USERS_ORDERS_FAILURE,payload:error})

        }
    }
}