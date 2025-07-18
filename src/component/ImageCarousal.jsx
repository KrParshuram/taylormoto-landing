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
  {
    src: productImage1,
    alt: "Taylor Moto Engine Oil - Premium Performance",
  },
  {
    src: productImage2,
    alt: "Taylor Moto Engine Oil - High Mileage Blend",
  },
  {
    src: productImage3,
    alt: "Taylor Moto Synthetic Oil - Advanced Formula",
  },
  {
    src: productImage4,
    alt: "Taylor Moto Racing Oil - Ultimate Engine Protection",
  },
  {
    src: productImage5,
    alt: "Taylor Moto Lubricant - Smooth Ride Technology",
  },
];

const ImageCarousel = () => {
  return (
    <section
      className="py-12 bg-white"
      aria-label="Trending Taylor Moto Products"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Our Trending Engine Oils
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-[500px] bg-gray-100 rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
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
