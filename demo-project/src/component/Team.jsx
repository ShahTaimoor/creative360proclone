import React from "react";
import "./Team.css";

function Team() {
  const services = [
    "Revenue-First Mapping",
    "Surgical Market Entry",
    "Radical Transparency",
    "Competitive Counter-Intelligence",
    "High-Velocity Execution"
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Left Column - Stacked Boxes */}
        <div className="team-left">
          <div className="services-stack">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-box ${index % 2 === 0 ? 'purple' : 'coral'}`}
              >
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="team-right">
          <div className="story-badge">
            <span className="badge-icon">⬛</span>
            <span>Our Story</span>
          </div>
          
          <h2 className="team-title">The Team Behind the Results</h2>
          
          <div className="team-content">
            <p>
              With a powerhouse team of over 50 specialists based in the
              United States, we provide cutting-edge digital marketing
              strategies to a diverse portfolio of 400+ American businesses.
              As the top-rated SEO agency on Google, we maintain a stellar
              5-star rating backed by more than 450 verified client reviews.
            </p>

            <p>
              Statistics are great, but what actually matters is your ROI. Our
              mission is straightforward: we amplify your online visibility to
              directly increase your revenue. We don't just promise results;
              we deliver them. By navigating the most competitive search
              landscapes in the country, we've generated millions in additional
              profit for our partners, moving them from page ten to the #1 spot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
