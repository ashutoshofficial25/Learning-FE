import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { reducers } from "../reducers/reducer";

const store = createStore(reducers, composeWithDevTools());

export default store;
