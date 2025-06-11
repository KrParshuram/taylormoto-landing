// src/components/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import productImage1 from "../assets/Images/productImage1.jpg";
import productImage2 from "../assets/Images/productImage2.jpg";
import productImage3 from "../assets/Images/productImage3.jpg";
import productImage4 from "../assets/Images/productImage4.jpg";
import productImage5 from "../assets/Images/productImage5.jpg";

const images = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
];

const ImageCarousel = () => {
  return (
    <section className=" py-12">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Trending Products
      </h2>
      <div className="max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile devices
          },
          768: {
            slidesPerView: 2, // Tablets and desktops
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-[500px] bg-gray-900 rounded-xl"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full max-h-[500px] object-contain rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
    </section>
  );
};

export default ImageCarousel;
