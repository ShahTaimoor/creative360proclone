import React from "react";
import "./Team.css";

function Team() {
  const services = [
    { name: "Revenue-First Mapping", color: "purple" },
    { name: "Surgical Market Entry", color: "coral" },
    { name: "Radical Transparency", color: "purple" },
    { name: "Competitive Counter-Intelligence", color: "coral" },
    { name: "High-Velocity Execution", color: "purple" }
  ];

  return (
    <section className="team-section" id="about">
      <div className="team-container">
        <div className="team-grid">
          <div className="team-left">
            <div className="services-stack animate-fade-in">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-card ${service.color} card-offset-${index % 2}`}
                >
                  <span className="service-name">{service.name}</span>
                </div>
              ))}
              <div className="zigzag-line"></div>
            </div>
          </div>

          <div className="team-right animate-fade-in">
            <div className="story-badge-wrapper">
              <div className="story-badge glass">
                <span className="badge-dot"></span>
                <span>Our Story</span>
              </div>
            </div>
            
            <h2 className="team-title">
              The Team Behind <br />
              <span className="gradient-text">the Results</span>
            </h2>
            
            <div className="team-description-wrapper">
              <p className="team-text">
                With a powerhouse team of over 50 specialists based in the United States, we provide cutting-edge digital marketing strategies to a diverse portfolio of 400+ American businesses. As the top-rated SEO agency on Google, we maintain a stellar 5-star rating backed by more than 450 verified client reviews.
              </p>

              <p className="team-text">
                Statistics are great, but what actually matters is your ROI. Our mission is straightforward: we amplify your online visibility to directly increase your revenue. We don't just promise results; we deliver them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
