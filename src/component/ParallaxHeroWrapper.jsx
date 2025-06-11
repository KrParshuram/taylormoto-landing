// src/components/ParallaxHeroWrapper.jsx
import React from "react";
import { Parallax } from "react-parallax";

const ParallaxHeroWrapper = ({ bgImage, overlayImage, children }) => {
  return (
    <Parallax bgImage={bgImage} strength={400}>
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Transparent PNG (like engine oil) */}
        {overlayImage && (
        <img
            src={overlayImage}
            alt="Overlay Graphic"
            className="
            absolute top-10 left-1/2 transform -translate-x-1/3
            w-[70%] sm:w-[300px] md:w-[600px]
            max-w-[90vw] opacity-70 z-10 pointer-events-none
            "
        />
        )}


        <div className="relative z-20 w-full px-4">{children}</div>
      </div>
    </Parallax>
  );
};

export default ParallaxHeroWrapper;
