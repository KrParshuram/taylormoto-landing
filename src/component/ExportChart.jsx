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
  { state: "Bihar", volume: 250 } , 
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
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-8 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Export Volume by State
      </h2>

      <div className="max-w-5xl mx-auto w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" />
            <YAxis label={{ value: "Litres (K)", angle: -90, position: "insideLeft" }} />
            <Tooltip />

            <Bar
              dataKey="volume"
              fill="#dc2626"
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={3500}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ExportChart;
