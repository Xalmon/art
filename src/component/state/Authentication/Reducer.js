
import * as actions from './ActionType'
import { isPresentInFavorites } from "../../config/logic"

const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null,
    favorites:[],
    success:null


}

export const authReducer=(state=initialState,action)=>{
    switch (action.type){
        case actions.REGISTER_REQUEST:
        case actions.LOGIN_REQUEST:
        case actions.GET_USER_REQUEST:
        case actions.ADD_TO_FAVORITE_REQUEST:
            return {...state,isLoading:true,error:null,success:null}
        case actions.REGISTER_SUCCESS:
        case actions.LOGIN_SUCCESS:
            return {...state,
                isLoading:false,
                jwt:action.payload,
                success:"Register Success"};
        
        case actions.GET_USER_SUCCESS:
            return {...state,
                isLoading:false,
                user:action.payload,
                favorites:action.payload.favorites,
                };    

        case actions.ADD_TO_FAVORITE_SUCCESS:
            return{...state,
                isLoading:false,
                error:null,
                favorites:isPresentInFavorites(state.favorites,action.payload)
                ? state.favorites.filter((item)=>item.id!==action.payload.id)
                :[action.payload,...state.favorites]
            }
            case actions.LOGOUT:
                return initialState;
                
            case actions.REGISTER_FAILURE:
            case actions.LOGIN_FAILURE:
            case actions.GET_USER_FAILURE:
            case actions.ADD_TO_FAVORITE_FAILURE:
                return {...state,isLoading:false,error:action.payload,success:null}
        
        default:
            return state;    
    }

      

}