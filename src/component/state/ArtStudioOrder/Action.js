
import * as actions from './ActionType'
import { api } from '../../config/api'

export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        try {
            dispatch({type:actions.UPDATE_ORDER_STATUS_REQUEST});

            const response = await api.put(`/api/admin/order/${orderId}/${orderStatus}`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("updated order", response.data);
            dispatch({type:actions.UPDATE_ORDER_STATUS_SUCCCESS,payload:response.data});
        }catch(error){
            dispatch({type:actions.UPDATE_ORDER_STATUS_FAILURE,payload:error});
            console.log("updated error", error);

        }
    }
}

export const getArtStudiosOrder = ({artStudioId, orderStatus, jwt}) => {
    return async (dispatch) => {
        try {
            dispatch({type:actions.GET_ARTSTUDIOS_ORDER_REQUEST});

            const {data} = await api.get( `/api/admin/order/artWork/${artStudioId}`,{
                params: {order_status:orderStatus},
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }

            );
            console.log("artStudio order: ", data);
            dispatch({type:actions.GET_ARTSTUDIOS_ORDER_SUCCESS,payload:data});

        }catch(error){
            dispatch({type:actions.GET_ARTSTUDIOS_ORDER_FAILURE,payload:error});
            console.log("updated error", error);

        }
    }
}