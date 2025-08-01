import React from "react";
import { ShieldCheck, Droplet, Gauge } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: <ShieldCheck size={32} className="text-red-600" aria-hidden="true" />,
    label: "Years in Market",
    value: 10,
    suffix: "+",
  },
  {
    icon: <Droplet size={32} className="text-red-600" aria-hidden="true" />,
    label: "Litres Sold",
    value: 1,
    suffix: "M+",
  },
  {
    icon: <Gauge size={32} className="text-red-600" aria-hidden="true" />,
    label: "Customer Satisfaction",
    value: 95,
    suffix: "%",
  },
];

const AboutStats = () => (
  <section
    aria-labelledby="about-stats-heading"
    className="mt-12 flex flex-col items-center"
  >
    <h2 id="about-stats-heading" className="text-2xl font-bold mb-6 text-center">
      Our Performance in Numbers
    </h2>

    <div className="flex flex-wrap justify-center gap-8 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md px-6 py-8 w-[260px]"
        >
          <div className="mb-4 flex justify-center" aria-hidden="true">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold text-gray-800">
            <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
          </div>
          <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutStats;
