import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
