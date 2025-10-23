import React, { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "./images/hero1.jpg";
import hero2 from "./images/hero2.jpg";
import hero3 from "./images/hero3.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero" id="hero"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="hero-content">
        <h1>Together, We Can Make a Difference</h1>
        <p>Support meaningful causes and help change lives around the world.</p>
        <button
          className="hero-btn"
          onClick={() =>
            document
              .getElementById("card-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Start Donating
        </button>
      </div>

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
