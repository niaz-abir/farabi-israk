"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoDocumentSharp } from "react-icons/io5";
import { FaPodcast } from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";
import { MdSettingsVoice } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { PiFilmReel } from "react-icons/pi";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Documentary Video",
      icon: <IoDocumentSharp />,
      details:
        "Cinematic documentary editing with smooth storytelling, emotional pacing, and professional color grading for impactful visual narratives.",
    },
    {
      id: 2,
      name: "Podcast",
      icon: <FaPodcast />,
      details:
        "Professional podcast editing with clean audio enhancement, noise reduction, and engaging video sync for better audience experience.",
    },
    {
      id: 3,
      name: "Shorts Video",
      icon: <PiFilmReel />,
      details:
        "High-performing short-form videos optimized for TikTok, Instagram, and YouTube Shorts to boost reach and audience engagement.",
    },
    {
      id: 4,
      name: "Brand Building",
      icon: <TbBrandAirtable />,
      details:
        "Strategic brand content creation that strengthens identity, improves recognition, and builds a consistent digital presence.",
    },
    {
      id: 5,
      name: "Voice Over",
      icon: <MdSettingsVoice />,
      details:
        "Clear and professional voice-over editing with studio-level sound quality and smooth, natural audio delivery.",
    },
    {
      id: 6,
      name: "3D Animation",
      icon: <Md3dRotation />,
      details:
        "Creative 3D animation services that bring ideas to life with realistic motion, cinematic visuals, and storytelling depth.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl text-white">Discover Our Services</h1>
        <p className="text-gray-300 mt-4 text-lg">
          Professional video editing and creative media solutions for modern
          brands
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="group relative bg-[#282828] lg:w-96 text-white rounded-lg p-6 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated Border */}
            <span className="absolute top-0 left-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></span>
            <span className="absolute top-0 right-0 w-[2px] h-0 bg-orange-500 group-hover:h-full transition-all duration-500 delay-100"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500 delay-200"></span>
            <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-orange-500 group-hover:h-full transition-all duration-500 delay-300"></span>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                <span className="text-orange-500 text-3xl">{service.icon}</span>
                {service.name}
              </h2>

              <p className="text-gray-300 text-[16px] leading-relaxed">
                {service.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
