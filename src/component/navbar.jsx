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
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
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
    { name: "BLOG", path: "#blog" },
    { name: "CONTACT", path: "#contact" },
    { name: "REVIEWS", path: "#reviews" },
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
          
          <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-right">
          <button className="phone-button glass">
            (973) 563-1729 <span className="arrow-icon">↗</span>
          </button>
          
          <button className="call-us-now-mobile gradient-btn" onClick={() => window.location.href = "tel:9735631729"}>
            CALL US NOW <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <button className="close-btn" onClick={closeMenu}>
            <span className="close-icon">✕</span>
          </button>
        </div>
        
        <ul className="mobile-links">
          {menuItems.map((item) => (
            <li key={item.name} className={activeMenu === item.name ? "active-pill" : ""}>
              <a
                href={item.path}
                onClick={() => {
                  setActiveMenu(item.name);
                  closeMenu();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <button className="mobile-phone-btn glass" onClick={() => window.location.href = "tel:9735631729"}>
            (973) 563-1729
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
