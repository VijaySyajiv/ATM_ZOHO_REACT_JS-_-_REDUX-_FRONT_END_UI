import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./zoho-logo-512px.png"
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <img className="logo" src={logo} alt="zoho-logo"/>    
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

