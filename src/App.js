import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";

// Pages
import EducationPage from "./pages/EducationPage";
import HealthcarePage from "./pages/HealthcarePage";
import FoodPage from "./pages/FoodPage";
import ChristmasPage from "./pages/ChristmasPage";
import AbandonedPage from "./pages/AbandonedPage";
import WaterPage from "./pages/WaterPage";
import AnimalPage from "./pages/AnimalPage";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CardSection />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/education" element={<EducationPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/christmas" element={<ChristmasPage />} />
        <Route path="/abandoned" element={<AbandonedPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/animal" element={<AnimalPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
