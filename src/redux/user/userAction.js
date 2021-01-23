import { SET_USER, CLEAR_USER } from "./userType";

export const setUser = (currentUser) => {
  return {
    type: SET_USER,
    currentUser: {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      emailVerified: currentUser.emailVerified,
    },
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
