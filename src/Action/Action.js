import axios from "axios"
import { FETCH_FAIL_CARD_DATA, FETCH_REQUEST_CARD_DATA, FETCH_SUCCESS_CARD_DATA } from "../Constant/Constant"

export const showCardAction=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:FETCH_REQUEST_CARD_DATA})

            const card = await axios.get("http://localhost:3003/cards")

            dispatch({
                type:FETCH_SUCCESS_CARD_DATA,
                payload:card.data
            })
        }catch(error){
            dispatch({
                type:FETCH_FAIL_CARD_DATA,
                payload:"Error"
            })
        }
    }
}