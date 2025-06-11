import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import indiaGeo from "../../assets/map/india.json"; // ✅ local file

const activeStates = [
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Delhi",
  "Gujarat",
  "West Bengal",
  "Uttar Pradesh",
];

const ExportMap = () => {
  const [hovered, setHovered] = useState("");

  return (
<section className="w-full h-full bg-white py-16 px-4 sm:px-8 text-gray-800">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    Taylor Moto Export Presence in India
  </h2>

  <div className="w-full flex justify-center">
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 1000, center: [82.8, 22.6] }}
      width={800}
      height={600}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: "1000px",
      }}
    >
      <Geographies geography={indiaGeo}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties.st_nm;
            const isActive = activeStates.includes(name);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHovered(name)}
                
                onMouseLeave={() => setHovered("")}
                style={{
                  default: {
                    fill: isActive ? "#dc2626" : "#E2E8F0",
                    stroke: "#CBD5E0",
                    outline: "none",
                  },
                  hover: {
                    fill: "#9f1239",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#9f1239",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  </div>

  {hovered && (
    <div className="text-center mt-6 text-lg font-medium text-gray-700">
      Taylor Moto active in <span className="text-red-600">{hovered}</span>
    </div>
  )}
</section>

  );
};

export default ExportMap;
