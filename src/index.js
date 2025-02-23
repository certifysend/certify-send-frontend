import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProgressProvider } from "./context/ProgressContext"; // Import ProgressProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <ProgressProvider> {/* Wrap the app with ProgressProvider */}
      <App />
      </ProgressProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
