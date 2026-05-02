import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What Is Local Seo?",
      answer: "Local SEO (search engine optimization) is the process of optimizing your online presence to improve your visibility in local search results. This is important for businesses that cater to a specific geographic area, and who want to show up when someone searches for something like \"seo agency near me\"."
    },
    {
      question: "How Long Does It Take For Seo To Show Results?",
      answer: "The timeline for SEO results can vary depending on factors such as your website and current state, competition, and algorithm updates. However, it typically takes 3-6 months to see significant improvements."
    },
    {
      question: "Why Is Social Media Marketing Important For My Business?",
      answer: "Social media marketing allows you to reach a wider audience, build brand loyalty, and engage directly with your customers where they spend their time."
    },
    {
      question: "Why Choose Our SEO Agency?",
      answer: "We focus on ROI and transparency. Our team operates with precision and speed to ensure your business stays ahead of the competition."
    },
    {
      question: "How Much Does Digital Marketing Cost?",
      answer: "Costs vary based on your goals and scope. We provide custom strategies tailored to your budget and desired outcomes."
    },
    {
      question: "What Makes Demo Website Different From Other Digital Marketing and Web Design Agencies?",
      answer: "We are results-obsessed. We don't just send reports; we deliver measurable growth using proprietary tactics and a powerhouse team of specialists."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header animate-fade-in">
          <div className="faq-badge glass">
            <span className="badge-icon">❔</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="faq-title">
            Got Questions? We've Got <br />
            <span className="gradient-text">Answers!</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-toggle">
                  <span className="toggle-icon">▲</span>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
