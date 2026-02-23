"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { RiPaintBrushLine, RiTShirt2Line, RiWebhookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Documentary video",
      no: "01",
      icon: <RiPaintBrushLine />,
      details:
        "Create personalized caps that showcase your unique style. From trendy designs to brand logos, we bring your vision to life.",
    },
    {
      id: 2,
      name: "Podcast",
      no: "02",
      icon: <RiTShirt2Line />,
      details:
        "Get high-quality t-shirts printed with your custom designs. Perfect for personal use, events, or promoting your brand.",
    },
    {
      id: 3,
      name: "Shorts video",
      no: "03",
      icon: <FiShoppingBag />,
      details:
        "Order caps and t-shirts in bulk with competitive pricing. Ideal for businesses, teams, or special events.",
    },
  ];

  return (
    <section id="services">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">
          Discover Our Services
        </h1>
        <p className="text-[18px] text-white">
          From crafting unique apparel to delivering exceptional customer
          experiences, <br /> we provide solutions that drive your clothing
          business forward.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#0c1c29] text-white rounded-md p-4 lg:w-96 m-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <motion.h1
                className="font-bold flex  rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[28px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-pink-500 p-2 rounded-md">
                  {service.icon}
                </span>
                {service.name}
              </motion.h1>
              <motion.h2
                className="text-[18px] pt-4 pb-6"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {service.details}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
