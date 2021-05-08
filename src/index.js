import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import consts from "./app/shared/constants";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

axios.interceptors.request.use(
  (req) => {
    // Interceptor de requisição para adequar API do Github.
    let auth = consts.USER_AUTH;
    if (auth) req.headers.Authorization = `${auth}`;
    return req;
  },
  (err) => Promise.reject(err)
);
