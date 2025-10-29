import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [giftDropdown, setGiftDropdown] = useState(false);
  const navigate = useNavigate();

  const aboutTimer = useRef(null);
  const giftTimer = useRef(null);

  // Delay helpers for hover
  const handleMouseEnter = (setDropdown, timerRef) => {
    clearTimeout(timerRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown, timerRef) => {
    timerRef.current = setTimeout(() => setDropdown(false), 200);
  };

  // Navigation functions
  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // close menu on mobile
  };

  const goToCauses = () => {
    navigate("/");
    setIsOpen(false); // close menu on mobile
    setTimeout(() => {
      const element = document.getElementById("causes");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">GiveDo</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <span className="nav-link" onClick={goHome}>
            Home
          </span>
        </li>

        <li>
          <span className="nav-link" onClick={goToCauses}>
            Causes
          </span>
        </li>

        {/* ABOUT DROPDOWN */}
        <li
          className="dropdown"
          onMouseEnter={() =>
            window.innerWidth > 768 &&
            handleMouseEnter(setAboutDropdown, aboutTimer)
          }
          onMouseLeave={() =>
            window.innerWidth > 768 &&
            handleMouseLeave(setAboutDropdown, aboutTimer)
          }
        >
          <span
            className="dropdown-title"
            onClick={() =>
              window.innerWidth <= 768 && setAboutDropdown(!aboutDropdown)
            }
          >
            About <FaChevronDown className="dropdown-icon" />
          </span>
          <ul className={`dropdown-menu ${aboutDropdown ? "show" : ""}`}>
            <li>Our Story</li>
            <li>How You Donation Works</li>
            <li>Blog</li>
            <li>Start a Fundraiser</li>
          </ul>
        </li>

        {/* GIFT CARD DROPDOWN */}
        <li
          className="dropdown"
          onMouseEnter={() =>
            window.innerWidth > 768 &&
            handleMouseEnter(setGiftDropdown, giftTimer)
          }
          onMouseLeave={() =>
            window.innerWidth > 768 &&
            handleMouseLeave(setGiftDropdown, giftTimer)
          }
        >
          <span
            className="dropdown-title"
            onClick={() =>
              window.innerWidth <= 768 && setGiftDropdown(!giftDropdown)
            }
          >
            Gift Cards <FaChevronDown className="dropdown-icon" />
          </span>
          <ul className={`dropdown-menu ${giftDropdown ? "show" : ""}`}>
            <li>Buy New Gift Card</li>
            <li>Claim Gift Card</li>
          </ul>
        </li>

        <li>Contact</li>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <button className="donate-btn-secondary">Donate Now</button>
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
