import * as actions from './ActionType';

const initialState = {
    loading: false,
    error: null,
    orders: []
}

export const artStudiosOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ARTSTUDIOS_ORDER_REQUEST:
        case actions.UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actions.GET_ARTSTUDIOS_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders:action.payload
            };
        case actions.UPDATE_ORDER_STATUS_SUCCCESS:
            const updatedOrders = state.orders.map((order) => 
             order.id === action.payload.id? action.payload: order);
            return {
                ...state,
                loading: false,
                orders: updatedOrders
            };
        case actions.GET_ARTSTUDIOS_ORDER_FAILURE:
        case actions.UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
            default:
                return state;    
    }
}