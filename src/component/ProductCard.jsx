import React from "react";

const ProductCard = ({ image, name, description }) => {
  return (
    <div className="bg-[#111827] text-white rounded-2xl shadow-xl w-full sm:w-[90%] md:w-[360px] transition-transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      
      {/* Image block with auto-adjusted image */}
      <div className="w-full h-[440px] bg-[#1f2937] flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-fill"
        />
      </div>

      {/* Text content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
