import {
    SAVING_FALIURE,
    SAVING_REQUEST,
    SAVING_SUCCESS,
  } from "./SavingType";
  import axios from "axios";
  export const savingRequest = () => {
    return {
      type: SAVING_REQUEST,
    };
  };
  export const savingSuccess = (saving) => {
    return {
      type: SAVING_SUCCESS,
      payload: saving,
    };
  };
  
  
  export const savingFaliure = (error) => {
    return {
      type: SAVING_FALIURE,
      payload: error,
    };
  };
  
  export const savingData = (savingState) => {
    return async (dispatch) => {
      try {
        console.log(`${localStorage.getItem("auth")}`);
        let datas = JSON.parse(localStorage.getItem("auth"));
        console.log(`data ----- ${datas}`);
        console.log(`this is data ${datas.token.token.token}`);
        const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas.token.token.token}`,
        };
        console.log(savingState);
        const res = await axios.post(
          "https://credio-merchant.herokuapp.com/api/v1/user/savings/new/initiate",
          savingState,
          { headers: headers }
        );
        const { data } = res;
        console.log(res);
        console.log(data);
        if (res.status === 200) {
          dispatch(savingSuccess(data)); 
        }
      } catch (error) {
        if (error.response) {
          dispatch(savingFaliure(error));
        }
      }
    };
  };
  