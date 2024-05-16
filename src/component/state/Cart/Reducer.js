import {LOGOUT} from "../Authentication/ActionType";
import * as actions from './ActionType'


const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
    success: null,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FIND_CART_REQUEST:
        case actions.GET_ALL_CART_ITEMS_REQUEST:
        case actions.UPDATE_CARTITEM_REQUEST:
        case actions.REMOVE_CARTITEM_REQUEST:
            return{
                ...state,
                loading:true,
                error: null
                
            }
        case actions.FIND_CART_SUCCESS:
        case actions.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.item,
            };
        case actions.ADD_ITEM_TO_CART_SUCCESS:
            return {
               ...state,
               loading: false,
               cartItems: [action.payload, ...state.cartItems], 
            };
        case actions.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )

            };
        case actions.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) => 
                item.id !== action.payload
            )
            };
            case actions.REMOVE_CARTITEM_FAILURE:
            case actions.FIND_CART_FAILURE:
            case actions.UPDATE_CARTITEM_FAILURE:
                return {
                    ...state,
                    loading: false,
                     error: action.payload
                };
            case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                cartItems:[],
                cart: null,
                success: "logout success"
            };
        
        default:
            return state;   
    }  
  
}
