import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { apolloClient } from "./config/apolloClient.config";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
