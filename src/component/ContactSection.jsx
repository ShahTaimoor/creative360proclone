import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top-banner">
        <div className="guarantee-badge glass">
          <span className="icon">🛡️</span>
          <span>100% Satisfaction Guarantee — Love your site or we revise it free.</span>
        </div>
        
        <div className="contact-btns">
          <button className="strategy-btn gradient-btn">GET MY FREE STRATEGY CALL →</button>
          <button className="call-now-btn glass">
            <span className="phone-icon">📞</span> CALL NOW: (973) 563-1729
          </button>
        </div>

        <div className="trust-signals">
          <div className="signal">
            <span className="icon">⏱️</span>
            <span>Response within 1 business hour</span>
          </div>
          <div className="signal">
            <span className="icon">✅</span>
            <span>No contracts, no commitments</span>
          </div>
          <div className="signal">
            <span className="icon">🏆</span>
            <span>Best Agency Passaic County NJ 2026</span>
          </div>
        </div>
      </div>

      <div className="contact-main-grid">
        <div className="contact-left">
          <h2 className="lets-talk">
            Let's <br />
            <span className="talk-accent">Talk!</span>
          </h2>
        </div>

        <div className="contact-right">
          <div className="consultation-form-card glass">
            <h3 className="form-title">Claim Your Free Consultation</h3>
            <form className="consult-form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label>Inquiring About</label>
                <select>
                  <option>Inquiring About</option>
                  <option>SEO</option>
                  <option>Web Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
