import * as actions from './ActionType'

const initialState = {
    artStudios: [],
    usersArtStudio: null,
    artStudio: null,
    loading: false,
    error: null,
    genres:[]
}

export const artStudioReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.CREATE_ARTSTUDIO_REQUEST:
        case actions.GET_ALL_ARTSTUDIOS_REQUEST:
        case actions.DELETE_ARTSUDIO_REQUEST:
        case actions.UPDATE_ARTSTUDIO_REQUEST:
        case actions.GET_ARTSTUDIO_BY_ID_REQUEST:
        case actions.GET_ARTSTUDIO_BY_USER_ID_REQUEST:
        case actions.CREATE_GENRE_REQUEST:
        // case actions.GET_ARTSUDIO_GENRE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,

            };
        case actions.CREATE_ARTSTUDIO_SUCCESS:
            return {
                ...state,
                loading: false,
                usersArtStudio: action.payload
            }
        case actions.GET_ALL_ARTSTUDIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                artStudios: action.payload
            }
        case actions.GET_ARTSTUDIO_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                artStudio: action.payload
            }
        case actions.GET_ARTSTUDIO_BY_USER_ID_SUCCESS:
        case actions.UPDATE_ARTSTUDIO_SUCCESS:
        case actions.UPDATE_ARTSTUDIO_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersArtStudio: action.payload
            };
        case actions.DELETE_ARTSUDIO_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                artStudios: state.artStudios.filter(
                    (item) => item.id !== action.payload
                ),
                usersArtStudio: state.usersArtStudio.filter(
                    (item) => item.id !== action.payload
                )

            };
        case actions.CREATE_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                genres: [...state.genres,action.payload],
            };
        case actions.GET_ARTSUDIO_GENRE_SUCCESS:
            return{
                ...state,
                loading:false,
                genres:action.payload,
            };
        case actions.CREATE_ARTSTUDIO_FAILURE:
        case actions.GET_ALL_ARTSTUDIOS_FAILURE:
        case actions.DELETE_ARTSUDIO_FAILURE:
        case actions.UPDATE_ARTSTUDIO_FAILURE:
        case actions.GET_ARTSTUDIO_BY_ID_FAILURE:
        case actions.CREATE_GENRE_FAILURE:
        case actions.GET_ARTSUDIO_GENRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
    

}