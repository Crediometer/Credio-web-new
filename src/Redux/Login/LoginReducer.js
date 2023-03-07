// import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./LoginTypes"
// import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
// import jwtDecode from 'jwt-decode'
// import JSEncrypt from 'jsencrypt';
// import consts from "../../Pages/Login/keys/const";
import { AuthActionType } from "./LoginAction";

const authState = {
    dataAdded: false,
    token: {},
    error: ''
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
        case AuthActionType.LOGIN_START:
          const loginAuthStart = {
            dataAdded: true,
            error: ''
          };
          return loginAuthStart;
        case AuthActionType.LOGOUT_SUCCESS:
          localStorage.removeItem("auth", JSON.stringify(loginAuthState));
          console.log('log-outttttt')
          return authState;
    
        case AuthActionType.LOGIN_SUCCESS:
          const loginAuthState = {
            dataAdded: false,
            token: action.payload,
            error: ''
          };
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          console.log(action.payload.token)
          localStorage.setItem("auth", JSON.stringify(loginAuthState));
          return loginAuthState;
        case AuthActionType.LOGIN_FAIL:
          const loginfailState = {
            dataAdded: false,
            error: action.payload,
            token: {}
          }
          console.log(loginfailState)
          return loginfailState;
        default:
        return state;
      }
}
export default authReducer