// src/App.jsx
import React from "react";
import "./App.css";

import Header from "./component/Header";
import Hero from "./component/Hero";
import ParallaxHeroWrapper from "./component/ParallaxHeroWrapper";
import engineBg from "./assets/3d-metal-gear.png";
import ImageCarousel from "./component/ImageCarousal";
import Products from "./component/Products";
import AboutWrapper from "./component/About/AboutWrapper";
import ExportMap from "./component/About/ExportMap";
import ExportChart from "./component/ExportChart";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <ParallaxHeroWrapper bgImage={engineBg}>
        <Hero />
      </ParallaxHeroWrapper>
      <ImageCarousel />
      <Products />
      <AboutWrapper />
      <ExportMap />
      <ExportChart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
