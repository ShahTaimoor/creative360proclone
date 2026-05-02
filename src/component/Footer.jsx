import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-contact-cards">
            <div className="contact-card glass">
              <div className="card-icon">✉️</div>
              <p>Hello@demowebsite.com</p>
            </div>
            <div className="contact-card glass">
              <div className="card-icon">📞</div>
              <p>(973) 563-1729</p>
            </div>
            <div className="contact-card glass">
              <div className="card-icon">📍</div>
              <p>51 Frances St. Clifton, NJ 07014, US</p>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-column">
              <h4 className="column-title">Menu</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Review</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h4 className="column-title">Services</h4>
              <ul>
                <li><a href="#">SEO</a></li>
                <li><a href="#">Google Ads</a></li>
                <li><a href="#">Website Design</a></li>
                <li><a href="#">Social Media Marketing</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h4 className="column-title">Other Pages</h4>
              <ul>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cancellation Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-section">
            <h5 className="follow-us">Follow us:</h5>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">G</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">📷</a>
            </div>
          </div>
          <p className="copyright-text">© 2024 Demo Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
