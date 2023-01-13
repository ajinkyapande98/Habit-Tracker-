import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import App from "./App";
import "./Style/Navbar.css";
import "./Style/Calender.css";
import "./Style/showHabits.css";
import "./Style/Dashboard.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
