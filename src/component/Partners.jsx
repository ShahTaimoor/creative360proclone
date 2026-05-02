import React from "react";
import "./Partners.css";

function Partners() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "2000+", label: "Successful Projects" },
    { value: "1900+", label: "Happy Clients" },
    { value: "267+", label: "5 Star Reviews" }
  ];

  return (
    <section className="partners-section">
      <div className="consultation-box animate-fade-in">
        <button className="consult-btn gradient-btn">
          GET 30 MIN FREE CONSULTATION <span className="arrow">→</span>
        </button>
      </div>

      <div className="partners-logos animate-fade-in">
        <div className="logo-row">
          <div className="partner-logo">SEMRUSH</div>
          <div className="partner-logo">HUBSPOT</div>
          <div className="partner-logo">META</div>
          <div className="partner-logo">GOOGLE PARTNER</div>
          <div className="partner-logo">MENA SEARCH AWARDS</div>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-text">
          Strategy ★ Website Design ★ SEO ★ Strategy ★ Website Design ★ SEO ★
        </div>
      </div>

      <div className="stats-container animate-fade-in">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-circle glass">
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
