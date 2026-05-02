import React, { useState } from "react";
import "./ReviewsSlider.css";

function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Muskan Chaudhary",
      date: "1 month ago",
      text: "Demo Website is an outstanding company. They designed a beautiful,...",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Paula Henriques",
      date: "1 month ago",
      text: "Demo Website is an outstanding local agency. They've handled our website...",
      rating: 5,
      avatar: "PH"
    },
    {
      name: "High Caliber Plumbing",
      date: "1 month ago",
      text: "Huge thanks to Simon and the 360 team for the incredible work on our web design and SEO...",
      rating: 5,
      avatar: "H"
    },
    {
      name: "William Polinsky",
      date: "1 month ago",
      text: "I was referred to Simon at Demo Website by a friend, and I'm very glad I reached ou...",
      rating: 5,
      avatar: "W"
    },
    {
      name: "Sarah Jenkins",
      date: "2 months ago",
      text: "Amazing results! Our organic traffic tripled in just 3 months. Highly recommend the SEO team.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 3)); // Shows 4 cards at once
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (reviews.length - 3)) % (reviews.length - 3));
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-slider-container glass">
        <div className="reviews-header">
          <div className="google-brand">
            <span className="google-blue">G</span>
            <span className="google-red">o</span>
            <span className="google-yellow">o</span>
            <span className="google-blue">g</span>
            <span className="google-green">l</span>
            <span className="google-red">e</span>
            <span className="reviews-label"> Reviews</span>
          </div>
          <div className="overall-rating">
            <span className="rating-num">4.9</span>
            <div className="stars">★★★★★</div>
            <span className="count">(267)</span>
          </div>
          <button className="review-btn glass">Review us on Google</button>
        </div>

        <div className="reviews-grid-wrapper">
          <div 
            className="reviews-slider-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {reviews.map((rev, i) => (
              <div key={i} className="review-card glass">
                <div className="rev-stars">★★★★★</div>
                <p className="rev-text">{rev.text}</p>
                <a href="#" className="read-more">Read more</a>
                <div className="rev-footer">
                  <div className="rev-google-logo">Google</div>
                  <div className="rev-user">
                    <div className="rev-avatar">{rev.avatar}</div>
                    <div className="rev-user-info">
                      <span className="rev-name">{rev.name} <span className="verified">✓</span></span>
                      <span className="rev-date">{rev.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-arrow left" onClick={handlePrev}>❮</button>
          <button className="slider-arrow right" onClick={handleNext}>❯</button>
        </div>
        
        <div className="slider-dots">
          {[0, 1].map((dot) => ( // Simplified dots for the demo
            <span 
              key={dot} 
              className={`dot ${currentIndex === dot ? "active" : ""}`}
              onClick={() => setCurrentIndex(dot)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSlider;
