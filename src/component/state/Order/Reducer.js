
import * as actions from './ActionType'

const initialState = {
    loading:false,
    orders: [],
    error: null,
    
};

export const orderReducer = (state = initialState,{type,payload} ) => {
    switch (type) {
        case actions.GET_USERS_ORDERS_REQUEST:
        case actions.CREATE_ORDER_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actions.GET_USERS_ORDERS_SUCCESS:
        case actions.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                orders: payload,
            }
        case actions.GET_USERS_ORDERS_FAILURE:
        case actions.CREATE_ORDER_FAILURE:
            return{
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
}
}