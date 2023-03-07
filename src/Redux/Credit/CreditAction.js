import {CREDIT_FALIURE, CREDIT_REQUEST, CREDIT_SUCCESS } from "./CreditType"
import axios from "axios"

export const creditRequest = () =>{
    return{
        type:CREDIT_REQUEST
    }
}

export const creditSuccess = (credit) =>{
    return{
        type: CREDIT_SUCCESS,
        payload: profile
    }
}

export const creditFaliure = (error) =>{
    return{
        type: CREDIT_FALIURE,
        payload: error
    }
}

export const fetchcredit = () => {
    return(dispatch) => {
        dispatch(creditRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/user/getCreditScore', {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const credit = response.data
                console.log(`this is profile--- ${credit}`)
                dispatch(creditSuccess(credit))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(creditFaliure(errorMsg))
            })
    }
}