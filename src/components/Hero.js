import React, { useState, useEffect, useCallback } from "react";
import "./Hero.css";

import hero1 from "./images/hero1.jpg";
import hero2 from "./images/hero2.jpg";
import hero3 from "./images/hero3.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  // Move to next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Move to previous slide
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Together, We Can Make a Difference</h1>
        <p>Support meaningful causes and help change lives around the world.</p>
        <button className="hero-btn">Start Donating</button>
      </div>

      {/* Manual Controls */}
      <button className="arrow left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right-arrow" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default Hero;
