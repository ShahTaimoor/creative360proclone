import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PROJECTS",
    "REVIEWS",
    "BLOG",
    "CONTACT",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Creative 360 Pro Logo" className="logo-image" />
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
        </div>

        <button className="phone-button">
          CALL US NOW <span className="arrow-icon">↗</span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeMenu === item ? "active" : ""}
                  onClick={() => {
                    setActiveMenu(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
