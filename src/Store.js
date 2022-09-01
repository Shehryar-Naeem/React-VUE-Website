import { createStore,combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { showCardDataReducer } from "./Reducer/Reducer";

const rootReducer=combineReducers({
    showCard:showCardDataReducer

})
const store = createStore(rootReducer,composeWithDevTools())

export default store;