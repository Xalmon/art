
import * as actions from './ActionType';

const initialState = {
    artworkItems: [],
    loading: false,
    error: null,
    search:[],
    message: null
};

export const artworkReducer = (state= initialState, action) => {
    switch (action.type){
        case actions.CREATE_ARTWORK_ITEM_REQUEST:
        case actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_REQUEST:
        case actions.DELETE_ARTWORK_REQUEST:
        case actions.SEARCH_ARTWORK_REQUEST:
        case actions.UPDATE_ARTWORK_AVAILABILITY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null
           };
        case actions.CREATE_ARTWORK_ITEM_SUCCESS:
            return{
                ...state,
                loading: false,
                artworkItems: [...state.artworkItems,action.payload],
                message: "Artwork Created Successfully"
            };
        case actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                artworkItems: action.payload
            }
        case actions.UPDATE_ARTWORK_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                artworkItems: state.artworkItems.map(
                    (artworkItem) => artworkItem.id === action.payload.id?
                    action.payload:artworkItem
                )
            }
        case actions.DELETE_ARTWORK_SUCCESS:
            return{
                ...state,
                loading: false,
                artworkItems: state.artworkItems.filter(
                    (artworkItem) => artworkItem.id !== action.payload
                )
            }
        case actions.SEARCH_ARTWORK_SUCCESS:
            return{
                ...state,
                loading: false,
                search: action.payload
            }
        case actions.CREATE_ARTWORK_ITEM_FAILURE:
        case actions.GET_ARTWORKS_BY_ARTSTUDIO_ID_FAILURE:
        case actions.DELETE_ARTWORK_FAILURE:
        case actions.SEARCH_ARTWORK_FAILURE:
        case actions.UPDATE_ARTWORK_AVAILABILITY_FAILURE:
            return {
                ...state,
                error: action.payload,
                message: null

            }
        default:
            return state;
    }

}

