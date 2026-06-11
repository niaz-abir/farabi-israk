"use client";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { GiClothespin, GiMoneyStack, GiPriceTag } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { MdApproval, MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillProduct } from "react-icons/ai";

const ChooseUs = () => {
  const allChooseUs = [
    {
      id: 1,
      name: "Exceptional Quality",
      icon: <AiFillProduct />,
      color: "#00A9A5",
      text: "Count on us for top-notch apparel made with premium materials, ensuring comfort and durability in every piece.",
    },
    {
      id: 2,
      name: "Custom Designs",
      icon: <MdDesignServices />,
      color: "#7E1891",
      text: "Bring your vision to life with our personalized cap and t-shirt designs, tailored to reflect your unique style or brand.",
    },
    {
      id: 3,
      name: "Affordable Prices",
      icon: <GiPriceTag />,
      color: "#000000",
      text: "Enjoy competitive pricing without compromising on quality, making stylish apparel accessible for everyone.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const iconAndNameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
  };

  return (
    <section>
      <section className="mt-16 mb-8 mr-0 lg:mr-8 rounded-sm  p-4">
        <h1 className="font-bold text-center text-black text-4xl pt-4">
          Why Choose us?
        </h1>
        <p className=" pb-8 pt-2 text-black text-[18px] text-center">
          We have lot of support form us .You can watch it and discuss with us.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {allChooseUs?.map((choose) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              key={choose?.id}
              className="lg:w-96 m-6  p-6 rounded-md bg-[#acb5bc]/40   "
            >
              <div className="backdrop-blur-xl p-4 rounded-sm   ">
                <motion.h1
                  variants={iconAndNameVariants}
                  className="text-3xl lg:text-4xl mt-4 mb-2   "
                  style={{ color: choose?.color }}
                >
                  {" "}
                  {choose?.icon}
                </motion.h1>
                <motion.h1
                  variants={iconAndNameVariants}
                  className="text-2xl text-black font-bold gap-2 items-center pb-2 "
                >
                  {choose?.name}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  className="mb-4 text-black text-[18px] pt-2"
                >
                  {choose?.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
        <div className="relative w-full  mb-4 px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                FAQ
              </h2>
              <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                Frequently asked questions
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {/* Item 1 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>How does the billing work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">
                    We offer a variety of billing options, including monthly and
                    annual subscription plans, as well as pay-as-you-go pricing
                    for certain services. Payments are processed securely
                    online.
                  </p>
                </details>
              </div>

              {/* Item 2 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Can I get a refund for my subscription?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">
                    We offer a 30-day money-back guarantee. Refunds beyond this
                    period are reviewed on a case-by-case basis.
                  </p>
                </details>
              </div>

              {/* Item 3 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>How do I cancel my subscription?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">
                    You can cancel anytime from your account dashboard under
                    subscription settings.
                  </p>
                </details>
              </div>

              {/* Item 4 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Is there a free trial?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">
                    Yes, we offer a limited-time free trial with access to
                    selected features.
                  </p>
                </details>
              </div>

              {/* Item 5 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>How do I contact support?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">
                    You can contact our support team through the website or by
                    emailing support@ourwebsite.com.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChooseUs;
