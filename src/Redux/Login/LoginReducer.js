// import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./LoginTypes"
// import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
// import jwtDecode from 'jwt-decode'
// import JSEncrypt from 'jsencrypt';
// import consts from "../../Pages/Login/keys/const";
import { AuthActionType } from "./LoginAction";

const authState = {
    dataAdded: false,
    token: {}  
};
const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
      const authobj = JSON.parse(auth);
      const { token } = authobj.user;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return authobj;
        return authState;
    } catch (error) {
      return authState;
    }
};
const newAuth = getAuthState();
const authReducer = (state = authState, action) => {
    switch (action.type) {
        // case AuthActionType.REGISTER_SUCCESS:
        //   const newAuthState = {
        //     isLoggedIn: true,
        //     user: action.payload,
        //   };
        //   axios.defaults.headers.common[
        //     "Authorization"
        //   ] = `Bearer ${action.payload.jwttoken}`;
        //   localStorage.setItem("auth", JSON.stringify(newAuthState));
        //   return newAuthState;
    
        // case AuthActionType.LOGOUT_SUCCESS:
        //   localStorage.removeItem("auth");
        //   return authState;
    
        case AuthActionType.LOGIN_SUCCESS:
          const loginAuthState = {
            dataAdded: true,
            token: action.payload,
          };
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          console.log(action.payload.token)
          localStorage.setItem("auth", JSON.stringify(loginAuthState));
          return loginAuthState;
    
        default:
          return state;
      }
}
export default authReducer