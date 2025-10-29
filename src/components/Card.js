import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="card-btn" onClick={() => navigate(link)}>
          Donate for {title}
        </button>
      </div>
    </div>
  );
};

export default Card;
