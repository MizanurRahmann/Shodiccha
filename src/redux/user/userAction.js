import { SET_USER, CLEAR_USER } from "./userType";

export const setUser = (currentUser) => {
  return {
    type: SET_USER,
    currentUser: currentUser,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
