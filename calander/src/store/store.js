import { createStore } from "redux";
import { reducers } from "../reducers/reducer";

//create store take first argument as reducers and second argument as as redux-devtools connector
const store = createStore(
  reducers,
  window.__REDUX__DEVTOOL_EXTENSION__ && window.__REDUX__DEVTOOL_EXTENSION__
);

export default store;
