import { createStore, combineReducers } from "redux";
import { authReducer, userReducer } from "./reducers.redux";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
