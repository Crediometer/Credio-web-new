import { LOGOUT } from "./LogoutType";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;