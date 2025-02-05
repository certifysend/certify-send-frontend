import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LandingPage from "./pages/LandingPage"


function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
