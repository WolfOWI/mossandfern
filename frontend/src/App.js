import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlantDetailsPage from "./pages/PlantDetailsPage";
import AdminDash from "./pages/AdminDash";
import "./App.css";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants/:plantId" element={<PlantDetailsPage />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
