import { CREDIT_FALIURE, CREDIT_REQUEST, CREDIT_SUCCESS } from "./CreditType"

const initialState ={
    loading: false,
    profile: [],
    error: ''
}

const creditReducer = (state = initialState, action) => {
    switch(action.type){
        case CREDIT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case CREDIT_SUCCESS:
            return{
                loading: false,
                profile: action.payload,
                error: ''
            }
        case CREDIT_FALIURE:
            return{
                loading:false,
                profile: [],
                error: action.payload
            }
        default: return state
    }
}

export default creditReducer