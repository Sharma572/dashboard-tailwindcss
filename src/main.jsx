import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApiProvider from "./Context-Api/ContextApi";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextApiProvider>
      <App />
  </ContextApiProvider>
 
);
