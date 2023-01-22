import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

//created store

const store = createStore(allReducers, composeWithDevTools);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
