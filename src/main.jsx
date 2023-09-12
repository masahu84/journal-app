import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles.css";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
