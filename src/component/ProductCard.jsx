// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ image, name, description }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg w-full sm:w-[90%] md:w-[360px] transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      
      {/* Product Image */}
      <div className="w-full h-[440px] bg-gray-800 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
