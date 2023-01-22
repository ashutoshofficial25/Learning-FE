import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./login";

const allReducers = combineReducers({
  counter: counterReducer,
  idLogged: loggedReducer,

  //we can pass more reducers like this
});

export default allReducers;
