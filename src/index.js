import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";
import { Provider } from "react-redux";

import Store from "./feature/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
