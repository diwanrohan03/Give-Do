import React from "react";
import Card from "./Card";
import "./CardSection.css";

import educationImg from "./edu.jpg";
import HealthcareImg from "./Health.png";
import FoodImg from "./food.jpg";
import ChristmasImg from "./christmas.jpg";
import AbandonedImg from "./abandoned.jpg";

const CardSection = () => {
  const cards = [
    {
      image: educationImg,
      title: "Education for All",
      description: "Help underprivileged children access quality education."
    },
    {
      image: HealthcareImg,
      title: "Healthcare Support",
      description: "Provide essential medical aid to those in need."
    },
    {
      image: FoodImg,
      title: "Feed the Hungry",
      description: "Contribute meals to families struggling with hunger."
    },
    {
      image: ChristmasImg,
      title: "Christmas celebration",
      description: "Provide essential needs to those in need."
    },
    {
      image: AbandonedImg,
      title: "protect abandoned elders",
      description: "Provide essential needs to those in need."
    },
    
  ];

  return (
    <section className="card-section">
      <h2>Our Causes</h2>
      <div className="card-container">
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
