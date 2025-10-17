import React from "react";
import "./Card.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-btn">Donate</button>
    </div>
  );
};

export default Card;
