import { GET_CHAT, PEOPLE_ERROR, PEOPLE_SUCCESS, PROFILE_FALIURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./ProfileType"
import axios from "axios"
import store from "../Store";
import io from 'socket.io-client'

const socket = io.connect("https://credio-api.herokuapp.com/chat", {
  transports: ["websocket"],
  query: "phoneNumber=+2347049581457",
});

export const profileRequest = () =>{
    return{
        type:PROFILE_REQUEST
    }
}

export const profileSuccess = (profile) =>{
    return{
        type: PROFILE_SUCCESS,
        payload: profile
    }
}

export const peopleSuccess = (profile) =>{
    return{
        type: PEOPLE_SUCCESS,
        payload: profile
    }
}
export const peopleError = (error) =>{
    return{
        type: PEOPLE_ERROR,
        payload: error
    }
}

//not sure
export const getChat = (chat) =>{
    return{
        type: GET_CHAT,
        payload: chat
    }
}

export const profileFaliure = (error) =>{
    return{
        type: PROFILE_FALIURE,
        payload: error
    }
}


const listenToPeople = () => {
    return (dispatch) => {

      socket.on('onPeople', (data) => {
        if (!data.sent && data.status !== 200) {
          // dispatch the 'requestState' action if the condition is true
        //   dispatch(requestState());
        // dispatch PEOPLE_ERROR
            const errorMsg = data.error.message
            dispatch(peopleError(errorMsg))

            // run this and let me know
        //   socket.emit('requestState', { state: 'error' });
        } else {
          // dispatch the 'getChat' action if the condition is false
          var profileData  = store.getState().profile.profile._id;
          dispatch(getChat(profileData));
          socket.emit('getChat', { jwt: profileData});
      
          const newList = data.message;
          console.log(newList)
          var people = [];
          newList.forEach((element) => {
            if (element.businessName !== null) {
                //i changed contacts to element  
              if (element.includes(element.phoneNumber)) {
                if (!people.includes(element)) {
                  people.push(element);
                  
                }
              }
            }
          });

          dispatch(peopleSuccess(people));
        }
      });
    }
  }

export const fetchProfile = () => {
    return(dispatch) => {
        dispatch(profileRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/user/getProfile', {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const profile = response.data
                console.log(`this is profile--- ${profile}`)
                dispatch(profileSuccess(profile))

                listenToPeople();
                // Get this 
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}