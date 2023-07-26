import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
