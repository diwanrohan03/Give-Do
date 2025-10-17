import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">GiveDo</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Causes</li>
        <li>About</li>
        <li>Contact</li>
        <button className="donate-btn">Donate Now</button>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
