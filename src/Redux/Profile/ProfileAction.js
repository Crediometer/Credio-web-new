import {
  GET_CHAT,
  PEOPLE_ERROR,
  PEOPLE_SUCCESS,
  PROFILE_FALIURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "./ProfileType";
import axios from "axios";
import store from "../Store";
import io from "socket.io-client";

var socket;
export const profileRequest = () => {
  return {
    type: PROFILE_REQUEST,
  };
};

export const profileSuccess = (profile) => {
  return {
    type: PROFILE_SUCCESS,
    payload: profile,
  };
};

export const peopleSuccess = (profile) => {
  return {
    type: PEOPLE_SUCCESS,
    payload: profile,
  };
};
export const peopleError = (error) => {
  return {
    type: PEOPLE_ERROR,
    payload: error,
  };
};

//not sure
export const getChat = (chat) => {
  return {
    type: GET_CHAT,
    payload: chat,
  };
};

export const profileFaliure = (error) => {
  return {
    type: PROFILE_FALIURE,
    payload: error,
  };
};

const listenToPeople = () => {
  var profileData = store.getState().profile.profile;

  console.log("profileData.phoneNumber ", profileData);
  if (!socket) {
    socket = io.connect("http://192.168.0.174:3001/chat", {
      transports: ["websocket"],
      query: `phoneNumber=${profileData.message.phoneNumber}`,
    });
  }

  socket.emit("getPeople");

  socket.on("onPeople", (data) => {
    console.log(`just normal --- ${data}`);

    if (data.status !== 200) {
      // dispatch the 'requestState' action if the condition is true
      //   dispatch(requestState());
      // dispatch PEOPLE_ERROR
      const errorMsg = data.message;
      store.dispatch(peopleError(errorMsg));

      // run this and let me know
      //   socket.emit('requestState', { state: 'error' });
    } else {
      // dispatch the 'getChat' action if the condition is false

      socket.emit("getChat", { jwt: profileData.message.profile._id });

      var newList = data.message;

      newList = newList.filter(
        (item) => item.phoneNumber !== profileData.message.phoneNumber
      );
      var last = [];

      newList.forEach((e) => {
        last.push({ person: e, chats: [] });
      });

      store.dispatch(peopleSuccess(last));
    }
  });

  socket.on("onChat", (data) => {
    console.log(`just normal --- ${data}`);

    if (data.status !== 200) {
      // dispatch the 'requestState' action if the condition is true
      //   dispatch(requestState());
      // dispatch PEOPLE_ERROR
      const errorMsg = data.message;
      store.dispatch(peopleError(errorMsg));

      // run this and let me know
      //   socket.emit('requestState', { state: 'error' });
    } else {
      // dispatch the 'getChat' action if the condition is false

      var people = store.getState().profile.people;
      profileData = store.getState().profile.profile.message.profile;

      // people.forEach((e) => {
      //   var p;
      //   (peopleNew[peopleNew.length] = { person: e }),
      //     (p =
      //       profileData._id > e._id
      //         ? profileData._id + "___" + e._id
      //         : e._id > profileData._id
      //         ? e._id + "___" + profileData._id
      //         : profileData._id + "___" + e._id),
      data.message.forEach((f) => {
        var userId = getId(f.combo, profileData._id);

        var foundIndex = people.findIndex((x) => x.person._id == userId);
        if (foundIndex !== -1) {
          console.log("foundIndex ", foundIndex);
          console.log("foundIndex ", people[foundIndex]);
          console.log("foundIndex ", userId);
          people[foundIndex].chats.push(f);
        }
      });
      // });

      // people = people.filter((item) => item.chats);

      store.dispatch(peopleSuccess(people));
    }
  });
};
const getId = (combo, myUid) => {
  return combo.replace(myUid, "").replace("___", "");
};
export const fetchProfile = () => {
  return (dispatch) => {
    dispatch(profileRequest);
    console.log(`${localStorage.getItem("auth")}`);
    let datas = JSON.parse(localStorage.getItem("auth"));
    console.log(`data ----- ${datas}`);
    console.log(`this is data ${datas.token.token.token}`);
    axios
      .get("https://credio-api.herokuapp.com/api/v1/user/getProfile", {
        headers: {
          Authorization: `Bearer ${datas.token.token.token}`,
        },
      })
      .then((response) => {
        const profile = response.data;
        console.log(`this is profile--- ${profile}`);
        dispatch(profileSuccess(profile));

        listenToPeople();
        // Get this
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(profileFaliure(errorMsg));
      });
  };
};
