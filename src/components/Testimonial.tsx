"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Client",
    review:
      "Absolutely amazing work! The wedding video felt like a cinematic movie. Every emotion was captured perfectly, and the editing was beyond my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Podcast Host",
    review:
      "Professional and fast delivery. The audio cleanup and video syncing were flawless. My podcast now looks and sounds like a studio production.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Brand Owner",
    review:
      "The brand videos helped us grow our online presence. Very creative storytelling and high-quality visuals that truly represent our identity.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Lee",
    role: "Content Creator",
    review:
      "My short-form content went viral after working together. Editing style is modern, engaging, and perfectly optimized for social media.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-[#0f0f0f] text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        <p className="text-gray-400 mt-3">
          Real feedback from clients who trusted my video editing services
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="relative bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,115,0,0.2)]"
          >
            {/* Quote glow line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>

            {/* Rating */}
            <div className="flex gap-1 text-orange-500 mb-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              “{item.review}”
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-xs text-gray-400">{item.role}</span>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-500 bg-orange-500/5"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
