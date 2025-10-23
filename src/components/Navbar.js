import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


const goHome = () => {
    navigate("/"); // navigate to homepagSe
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };


const goToCauses = () => {
  navigate("/"); // first go to homepage
  setTimeout(() => {
    const element = document.getElementById("causes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 50); // slight delay ensures CardSection exists
};

  return (
    <nav className="navbar">
      <div className="nav-logo">GiveDo</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><span className="nav-link" onClick={goHome}>Home</span></li>
        <li><span className="nav-link" onClick={goToCauses}>Causes</span></li>
        <li>About</li>
        <li>Contact</li>
        <Link to="/login">
        <button className="donate-btn">Login</button>
        </Link>
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
