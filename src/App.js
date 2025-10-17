import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <Footer />
    </>
  );
};

export default App;
