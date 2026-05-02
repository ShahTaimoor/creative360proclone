import React from "react";
import "./CTABanner.css";

function CTABanner({ title, pillText, subText, reverse = false }) {
  return (
    <section className={`cta-banner ${reverse ? "reverse" : ""}`}>
      <div className="cta-banner-container">
        <div className="cta-banner-content">
          <div className="cta-banner-left">
            <h2 className="cta-banner-title">
              <span className="star-icon">★</span> {title}
            </h2>
            <div className="cta-pill-wrapper">
              <div className="cta-pill gradient-btn">
                <span>{pillText}</span>
              </div>
              <span className="cta-extra-text">Your Sales</span>
            </div>
          </div>
          
          <div className="cta-banner-right">
            <p className="cta-banner-subtext">{subText}</p>
            <button className="cta-banner-btn gradient-btn">
              BOOK A DISCOVERY CALL <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
