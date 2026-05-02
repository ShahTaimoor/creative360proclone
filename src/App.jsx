import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Team from "./component/Team";
import Solutions from "./component/Solutions";
import Partners from "./component/Partners";
import CTABanner from "./component/CTABanner";
import ReviewsSlider from "./component/ReviewsSlider";
import FAQ from "./component/FAQ";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <main>
        <Hero />

        <CTABanner
          title="Turn Visitors Into Customers"
          pillText="BOOST"
          subText="Gain a fresh perspective on your most important touchpoints. Let's connect today."
        />

        <Team />
        <Solutions />





        <Partners />
        <CTABanner
          title="Let's talk about"
          pillText="WINNING STRATEGIES"
          subText="Your next level starts with a strategy built to perform. Let's make it happen."
          reverse={true}
        />
        <ReviewsSlider />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
