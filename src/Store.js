import { createStore,combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { showCardDataReducer } from "./Reducer/Reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"


const rootReducer=combineReducers({
    showCard:showCardDataReducer
})
const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)))

export default store;