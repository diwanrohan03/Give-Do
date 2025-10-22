import React from "react";
import Card from "./Card";
import "./CardSection.css";

import educationImg from "./images/edu.jpg";
import HealthcareImg from "./images/Health.png";
import FoodImg from "./images/food.jpg";
import ChristmasImg from "./images/christmas.jpg";
import AbandonedImg from "./images/abandoned.jpg";
import waterImg from "./images/water.jpg";
import AnimalImg from "./images/animal.jpg";

const CardSection = () => {
  const cards = [
    { image: educationImg, title: "Education", description: "Help kids get education.", link: "/education" },
    { image: HealthcareImg, title: "Healthcare", description: "Support medical care.", link: "/healthcare" },
    { image: FoodImg, title: "Food", description: "Fight hunger.", link: "/food" },
    { image: ChristmasImg, title: "Christmas", description: "Spread holiday joy.", link: "/christmas" },
    { image: AbandonedImg, title: "Abandoned", description: "Support abandoned people.", link: "/abandoned" },
    { image: waterImg, title: "Water", description: "Provide clean water.", link: "/water" },
    { image: AnimalImg, title: "Animals", description: "Help animals in need.", link: "/animal" },
  ];

  return (
    <section className="card-section" id="card-section">
      <h2>Our Causes</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
