// src/components/Chart/ExportChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { state: "Bihar", volume: 250 },
  { state: "Maharashtra", volume: 240 },
  { state: "Tamil Nadu", volume: 210 },
  { state: "Karnataka", volume: 180 },
  { state: "Delhi", volume: 160 },
  { state: "Gujarat", volume: 130 },
  { state: "West Bengal", volume: 120 },
  { state: "Uttar Pradesh", volume: 100 },
];

const ExportChart = () => {
  return (
    <section
      id="export-chart"
      className="w-full bg-gray-50 py-16 px-4 sm:px-8 text-gray-800"
      aria-labelledby="export-chart-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="export-chart-heading"
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Export Volume by Indian States
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-base md:text-lg">
          Our engine oil products are trusted across India. Here's a
          representation of the highest export volumes by state (in thousands of
          litres).
        </p>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <figure role="group" aria-label="Bar chart showing export volume">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" />
              <YAxis
                label={{
                  value: "Litres (K)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
              <Bar
                dataKey="volume"
                fill="#dc2626"
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
                animationDuration={3000}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
          <figcaption className="mt-4 text-center text-sm text-gray-500">
            Chart: Distribution of export volume by Indian states
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ExportChart;
