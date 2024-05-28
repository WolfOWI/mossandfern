import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlantDetailsPage from "./pages/PlantDetailsPage";
import "./App.css";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants/:plantId" element={<PlantDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
