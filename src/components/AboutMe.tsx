/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

import image from "../../public/images/samir.png"

export default function AboutMe() {
  return (
    <section className="relative min-h-screen lg:min-h-[700px] w-full bg-[#202020] text-white flex items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-16 lg:py-0">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="order-2 lg:order-1 lg:col-span-7 z-10 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Subtitle with accent line */}
          <div className="flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
            <span className="w-6 h-[2px] bg-[#E06A55]" />
            <span>Motion Graphics Animator</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide leading-[1.1] text-[#F3F3F3]">
            FARABI
            <span className="text-[#E2E2E2]"> ISRAK</span>
          </h1>

          {/* Bottom Meta & Description block */}
          <div className="flex items-start space-x-4 max-w-md pt-2 md:pt-4">
            {/* Left Accent Pillar */}
            <div className="w-[4px] sm:w-[6px] h-28 sm:h-32 bg-[#E06A55] shrink-0" />

            <div className="space-y-4">
              {/* React Icons Socials */}
              <div className="flex space-x-4 text-[#E06A55] items-center">
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={15} />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Dribbble"
                >
                  <FaDribbble size={15} />
                </a>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Hi, I'm Farabi Samir, a passionate video editor dedicated to
                creating cinematic and emotionally engaging content. From
                weddings and events to promotional videos and social media
                content, I focus on delivering high-quality edits that bring
                every story to life.
              </p>

              {/* Button */}
              <div className="pt-2">
                <a href="https://www.instagram.com/israk.farabi/">
                  <button className="border border-gray-600 px-6 py-2 text-xs uppercase tracking-widest text-gray-300 hover:bg-[#E06A55] hover:border-[#E06A55] hover:text-white transition-all duration-300 w-full sm:w-auto">
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end items-center w-full min-h-[350px] sm:min-h-[450px] lg:h-full pt-6 lg:pt-0">
          {/* Decorative Coral Border Box behind the portrait */}
          <div className="absolute right-[10%] sm:right-4 bottom-0 sm:bottom-4 w-[75%] sm:w-[85%] h-[85%] border-4 border-[#E06A55] pointer-events-none z-0 transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6" />

          {/* Photographer Portrait */}
          <div className="relative w-[75%] sm:w-[85%] aspect-[3/4] max-w-[360px] lg:max-w-[400px] z-10  shadow-2xl">
            <Image
              src={image}
              alt="Alexander Durham Portrait"
              fill
              priority
              sizes="(max-w-640px) 75vw, (max-w-1024px) 50vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
