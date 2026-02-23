"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import your images
import image1 from "../../public/images/new.jpg";
import image2 from "../../public/images/new.jpg";
import image3 from "../../public/images/new.jpg";
import image4 from "../../public/images/new.jpg";
import image5 from "../../public/images/new.jpg";

export function Banner() {
  return (
    <section>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#261235] via-[#2b0f3a] to-[##261235] text-white">
        <div className="absolute top-20 left-16 w-6 h-6 border border-pink-500 rounded-full opacity-60"></div>
        <div className="absolute  bottom-36 right-28 w-8 h-8 border border-pink-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-500 rounded-full opacity-50"></div>

        <div className="absolute top-80 left-24 w-6 h-6 border border-pink-500 rounded-full opacity-60"></div>
        <div className="absolute  bottom-80 right-80 w-8 h-8 border border-pink-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-500 rounded-full opacity-50"></div>

        <div className="absolute top-60 left-64 w-6 h-6 border border-pink-500 rounded-full opacity-60"></div>
        <div className="absolute  bottom-96 right-28 w-8 h-8 border border-pink-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-500 rounded-full opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
            Design Your Digital <br />
            Success With Our <br />
            Expert Agency!
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Welcome to our design agency, where creativity knows no bounds! We
            are a team of passionate designers, artists, and innovators who
            believe in the power of design to transform businesses and captivate
            audiences.
          </p>

          <div className="mt-8">
            <button className="bg-pink-600 hover:bg-pink-700 transition duration-300 px-8 py-3 rounded-full font-medium shadow-lg">
              Lets Talk →
            </button>
          </div>

          <div className="mt-16 border border-pink-500/50 rounded-xl px-6 py-6 bg-black/40 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 text-lg font-semibold">
              <span>reddit</span>
              <span>Microsoft</span>
              <span>NETFLIX</span>
              <span>Google</span>
              <span>amazon</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
