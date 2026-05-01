import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Team from "./component/Team";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Team />
      {/* Add your other content here */}
    </div>
  );
}

export default App;
