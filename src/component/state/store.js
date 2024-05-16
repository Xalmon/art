import {applyMiddleware, combineReducers,legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import {thunk} from "redux-thunk";
import {artStudioReducer} from "./ArtStudio/Reducer"
import { artworkReducer } from "./Artwork/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { artStudiosOrderReducer } from "./ArtStudioOrder/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    artStudio:artStudioReducer,
    artWork: artworkReducer,
    cart: cartReducer,
    order:orderReducer,
    artStudiosOrder : artStudiosOrderReducer,
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))