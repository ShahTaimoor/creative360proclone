import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "HOME", path: "#home" },
    { name: "ABOUT", path: "#about" },
    { 
      name: "SERVICES", 
      path: "#services",
      dropdown: [
        "SEO (SEARCH ENGINE OPTIMIZATION)",
        "WEBSITE DESIGN & DEVELOPMENT",
        "GOOGLE ADS",
        "SOCIAL MEDIA MARKETING"
      ]
    },
    { name: "PROJECTS", path: "#projects" },
    { name: "REVIEWS", path: "#reviews" },
    { name: "BLOG", path: "#blog" },
    { name: "CONTACT", path: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Demo Website Logo" className="logo-image" />
          </div>
        </div>

        <div className="navbar-center">
          <div className="nav-menu-wrapper glass-pill">
            <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.name} className={item.dropdown ? "has-dropdown" : ""}>
                  <a
                    href={item.path}
                    className={activeMenu === item.name ? "active" : ""}
                    onClick={() => setActiveMenu(item.name)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="nav-dropdown glass">
                      <ul>
                        {item.dropdown.map((subItem, idx) => (
                          <li key={idx}>
                            <a href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                              <span className="dot"></span> {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navbar-right">
          <button className="phone-button glass">
            (973) 563-1729 <span className="arrow-icon">↗</span>
          </button>
          
          <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={activeMenu === item.name ? "active" : ""}
                onClick={() => {
                  setActiveMenu(item.name);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className="phone-button-mobile">
              (973) 563-1729 ↗
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
