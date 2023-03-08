import { SINGLE_FALIURE, SINGLE_REQUEST, SINGLE_SUCCESS } from "./SingleType"
import axios from "axios"
export const singleRequest = () =>{
    return{
        type:SINGLE_REQUEST
    }
}

export const singleSuccess = (single) =>{
    return{
        type: SINGLE_SUCCESS,
        payload: single
    }
}

export const singleFaliure = (error) =>{
    return{
        type: SINGLE_FALIURE,
        payload: error
    }
}


export const fetchSingle = (_id) => {
    return(dispatch) => {
        dispatch(singleRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get(`https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history/${_id}`
        , {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const single = response.data.transaction
                console.log(`this is transaction--- ${single}`)
                dispatch(singleSuccess(single))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(singleFaliure(errorMsg))
            })
    }
}