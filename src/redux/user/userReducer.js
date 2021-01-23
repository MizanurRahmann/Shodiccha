import { CLEAR_USER, SET_USER } from "./userType";

const initialState = {
  loading: true,
  isLogedIn: false,
  currentUser: null,
  currentUserProfile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.currentUser,
        isLogedIn: true,
        loading: false,
      };
    case CLEAR_USER:
      return {
        currentUser: null,
        isLogedIn: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
