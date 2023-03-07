import { SAVING_FALIURE, SAVING_REQUEST, SAVING_SUCCESS } from "./SavingType";

  
  const initialState = {
    loading: false,
    saving: [],
    error: "",
  };
  
  const savingReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVING_REQUEST:
        return {
          loading: true,
          requestData: {},
          saving: [],
          error: "",
        };
    
      case SAVING_SUCCESS:
        return {
          loading: false,
          saving: action.payload,
          error: "",
        };
      case SAVING_FALIURE:
        return {
          loading: false,
          requestData: {},
          saving: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default savingReducer;