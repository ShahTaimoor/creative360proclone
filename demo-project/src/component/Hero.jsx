import React from "react";
import "./Hero.css";
import googleReviewsImg from "../assets/google-reviews.png";
import googlePartnerImg from "../assets/google-partner.png";
import threeBestRatedImg from "../assets/three-best-rated.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-text">
            <p className="hero-subtitle">STOP SEARCHING</p>
            <h1 className="hero-title">
              <span className="hero-line purple-text">YOU'VE FOUND THE TOP</span>
              <span className="hero-line">DIGITAL MARKETING AGENCY</span>
            </h1>
          </div>
          <div className="hero-description-wrapper">
            <p className="hero-description-tag">OUR STORY</p>
            <p className="hero-description">
              Most agencies are great at sending monthly reports full of "vanity
              metrics" that don't pay the bills. We're different. We operate
              like a pack of wolves-calculated, aggressive, and hitting your
              market from every possible angle to ensure your competitors never
              see you coming.
            </p>
            <button className="hero-cta-button">BOOK A CALL WITH US →</button>
            <div className="reviews-box-container">
              <div className="reviews-box">
                <p className="reviews-heading">OUR CLIENTS LOVE WORKING WITH<br />US</p>
                <div className="reviews-divider"></div>
                <div className="reviews-content">
                  <div className="google-icon">
                    <svg viewBox="0 0 48 48" className="g-logo-svg" width="40" height="40">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                  </div>
                  <div className="rating-details">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} viewBox="0 0 24 24" fill="#fbbc04" width="16" height="16" style={{ marginRight: '2px' }}>
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="review-count">267+ 5 Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="hero-lower">
        {/* Badges Section */}
        <div className="badges-container">
          <div className="badge-item">
            <img src={googleReviewsImg} alt="Google Reviews" className="badge-img google-reviews-img" />
          </div>
          <div className="badge-item">
            <img src={googlePartnerImg} alt="Google Partner" className="badge-img google-partner-img" />
          </div>
          <div className="badge-item">
            <img src={threeBestRatedImg} alt="Three Best Rated" className="badge-img three-best-rated-img" />
          </div>
        </div>
      </div>


    </section>
  );
}

export default Hero;
