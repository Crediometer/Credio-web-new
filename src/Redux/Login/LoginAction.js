// import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./LoginTypes" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthActionType = {
    // REGISTER_SUCCESS: "REGISTER_SUCCESS",
    // REGISTER_FAIL: "REGISTER_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
      try {
        const res = await axios.post("https://credio-api.herokuapp.com/api/v1/auth/login", loginState);
        const { data } = res;
        // console.log(res)
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
        if(res.status===200){
            history();
        }
      } catch (error) {
        if (error.response) {
          dispatch({
            type: AuthActionType.LOGIN_FAIL,
            payload: error.response.data.message,
          });
        }
        setErrorHandler({ hasError: true, message: error.response.data.message });
      }
    };
};
const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      // const res = await axios.get("https://credio-api.herokuapp.com/api/v1/auth/login");
      // const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        // payload: data.message,
      });
      history();
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGOUT_FAIL,
          // payload: error.response.data.message,
        });
      }
    }
  };
};
export {
    // RegisterAuthAction,
    AuthActionType,
    LogOutAuthAction,
    LoginAuthAction,
};