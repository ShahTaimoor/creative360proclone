import React from "react";
import "./Solutions.css";

function Solutions() {
  const solutions = [
    {
      title: "Data-Driven ROI",
      desc: "We swap \"gut feelings\" for hard analytics. Every move we make is engineered to move the needle on your bottom line, not just your traffic.",
      color: "coral"
    },
    {
      title: "Precision Engineering",
      desc: "We don't just \"fix\" websites, we build digital powerhouses. From technical SEO to high-conversion UX, we ensure your brand is structurally superior.",
      color: "purple"
    },
    {
      title: "First-Move Advantage",
      desc: "The US market moves fast, we move faster. We deploy next-gen strategies and proprietary tactics that our competitors haven't even heard of yet.",
      color: "purple"
    },
    {
      title: "Zero-Fluff Transparency",
      desc: "Forget vanity metrics. We provide clear, direct reporting that focuses on the only numbers that actually pay the bills, leads and sales.",
      color: "coral"
    }
  ];

  return (
    <section className="solutions-section" id="services">
      <div className="solutions-container">
        <div className="solutions-grid">
          <div className="solutions-left animate-fade-in">
            <h2 className="solutions-title">
              End-to-End <br />
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="solutions-main-desc">
              Our Methodology Claiming to master every facet of the search landscape is a big swing, but it's one we knock out of the park daily. We operate like a pack of wolves, attacking your competition from every possible flank.
            </p>
            <p className="solutions-sub-desc">
              From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As leaders in the American SEO space, we're already deploying the next-gen strategies other agencies are still trying to figure out.
            </p>
          </div>

          <div className="solutions-right">
            <div className="solutions-cards animate-fade-in">
              {solutions.map((sol, index) => (
                <div key={index} className={`solution-card ${sol.color}`}>
                  <div className="card-bubble">
                    <h3 className="card-title">{sol.title}</h3>
                    <p className="card-desc">{sol.desc}</p>
                    <div className="bubble-tail"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
