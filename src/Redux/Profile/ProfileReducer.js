import { PROFILE_FALIURE, PROFILE_REQUEST, PROFILE_SUCCESS, PEOPLE_SUCCESS, PEOPLE_ERROR, GET_CHAT} from "./ProfileType"

const initialState ={
    loading: false,
    loadingPeople: false,
    errorPeople: '',
    profile: [],
    people: {},
    error: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PROFILE_SUCCESS:
            return{
                loading: false,
                profile: action.payload,
                error: ''
            }

        case PEOPLE_SUCCESS:
            console.log("new People ---- ",action.payload ) ;
                return{
                    ...state,
                    loadingPeople: true,
                    people: action.payload,
                } 
                
        case PEOPLE_ERROR:
                return{
                    ...state,
                    loadingPeople: false,
                    errorPeople: action.payload,
                }
        //NOT SURE

        case GET_CHAT:
            return{
                ...state,
                loadingchat: true,
                chat: action.payload
            }
            
        case PROFILE_FALIURE:
            return{
                loading:false,
                profile: [],
                error: action.payload
            }
        default: return state
    }
}

export default profileReducer