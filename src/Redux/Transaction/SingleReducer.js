import { SINGLE_FALIURE, SINGLE_REQUEST, SINGLE_SUCCESS } from "./SingleType"

const initialState ={
    loading: false,
    transaction: [],
    error: ''
}

const singleReducer = (state = initialState, action) => {
    switch(action.type){
        case SINGLE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SINGLE_SUCCESS:
            return{
                loading: false,
                transaction: action.payload,
                error: ''
            }
        case SINGLE_FALIURE:
            return{
                loading:false,
                transaction: [],
                error: action.payload
            }
        default: return state
    }
}

export default singleReducer