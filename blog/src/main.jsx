import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux"
import notificationReducer from "./reducers/notificationReducer.js";
import blogReducer from "./reducers/blogReducer.js";
import userReducer from "./reducers/userReducer.js";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer,
    user: userReducer,
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
