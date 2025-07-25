import React from "react";
import AboutIntro from "./AboutIntro";
import AboutStats from "./AboutStats";

const AboutWrapper = () => {
  return (
    <section
      className="bg-white py-26 px-4 md:px-20 text-gray-800"
      id="about"
      aria-labelledby="about-heading"
    >
      <AboutIntro />
      <AboutStats />
      {/* <ExportMap /> */}
    </section>
  );
};

export default AboutWrapper;
