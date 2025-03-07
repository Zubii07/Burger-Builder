import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Burger from "./Components/BurgerContent/Burger";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Burger />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}
