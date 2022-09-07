// import axios from "axios"
import { FETCH_FAIL_CARD_DATA, FETCH_REQUEST_CARD_DATA, FETCH_SUCCESS_CARD_DATA } from "../Constant/Constant"


const initialState={
    loading:false,
    cards:[],
    error:''
}

export const showCardDataReducer=(state=initialState,action)=>{

    switch(action){
        case FETCH_REQUEST_CARD_DATA:
            console.log("hello");
            return {...state,
                loading:true
            }
    
        case FETCH_SUCCESS_CARD_DATA:
            console.log("text");
            return {
                ...state,
                loading:false,
                cards:action.payload,
                error:""
            }
        case FETCH_FAIL_CARD_DATA:
            console.log("hello");
            return {
                ...state,
                loading:false,
                cards:[],
                error:action.payload
            }
        default:
            return state;
    }
}