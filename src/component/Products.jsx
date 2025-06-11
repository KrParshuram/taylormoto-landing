// src/components/Products.jsx
import React from "react";
import ProductCard from "./ProductCard";
import productImage1 from "../assets/Images/productImage1.jpg";
import productImage2 from "../assets/Images/productImage2.jpg";
import productImage3 from "../assets/Images/productImage3.jpg";
import productImage4 from "../assets/Images/productImage4.jpg";
import productImage5 from "../assets/Images/productImage5.jpg";

const products = [
  {
    image: productImage1,
    name: "Premium Plus 5W-30",
    description: "High performance synthetic oil for daily and sports bikes.",
  },
  {
    image: productImage2,
    name: "TurboGuard 10W-40",
    description: "Extra protection under high temperature and load.",
  },
  {
    image: productImage3,
    name: "EcoDrive 15W-50",
    description: "Designed for longer intervals and smoother performance.",
  },
  {
    image: productImage4,
    name: "Premium Plus 5W-30",
    description: "High performance synthetic oil for daily and sports bikes.",
  },
  {
    image: productImage5,
    name: "TurboGuard 10W-40",
    description: "Extra protection under high temperature and load.",
  },
  {
    image: productImage1,
    name: "EcoDrive 15W-50",
    description: "Designed for longer intervals and smoother performance.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
