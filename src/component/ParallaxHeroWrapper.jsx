// src/components/ParallaxHeroWrapper.jsx
import React from "react";
import { Parallax } from "react-parallax";

const ParallaxHeroWrapper = ({ bgImage, overlayImage, children }) => {
  return (
    <Parallax bgImage={bgImage} strength={400}>
      <section
        role="region"
        aria-label="Hero Banner Section"
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true"></div>

        {/* Overlay engine oil image */}
        {overlayImage && (
          <img
            src={overlayImage}
            alt="Stylized transparent engine oil visual"
            className="
              absolute top-10 left-1/2 transform -translate-x-1/3
              w-[70%] sm:w-[300px] md:w-[600px]
              max-w-[90vw] opacity-70 z-10 pointer-events-none
            "
            loading="lazy"
            role="presentation"
            aria-hidden="true"
          />
        )}

        {/* Actual hero content */}
        <div className="relative z-20 w-full px-4">{children}</div>
      </section>
    </Parallax>
  );
};

export default ParallaxHeroWrapper;
