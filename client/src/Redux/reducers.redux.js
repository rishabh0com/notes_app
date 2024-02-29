import { AUTH, USER } from "./actionTypes.redux";

const authStates = {
  isAuth: false,
};
export const authReducer = (state = { ...authStates }, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

const userStates = {
  user: { displayName: "", email: "", displayImage: "" },
};

export const userReducer = (state = { ...userStates }, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
