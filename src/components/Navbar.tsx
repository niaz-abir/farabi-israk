"use client";
import React, { useState, useEffect } from "react";
import { GiBee } from "react-icons/gi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0a202d] shadow-md shadow-[#0a202d] ml-0 lg:ml-6 mr-0 lg:mr-6 rounded-sm">
      <nav className="mt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
          <h1 className="flex gap-2 ml-0 lg:-ml-8 text-white font-bold items-center text-3xl">
            <MdVideoLibrary size={35} />
            <Link href="/">TUHINFX</Link>
          </h1>

          {/* <img src={image3} alt=""/> */}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm   rounded-lg md:hidden text-[24px] focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenuFold size={40} />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white  ">
              <li>
                <Link
                  href="about-us"
                  className="block py-2 px-3 text-[20px] lg:w-full  w-36 text-white rounded md:border-0"
                >
                  Service
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="block py-2 px-3 text-[20px] lg:w-full   w-36 text-white rounded md:border-0"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#package"
                  className="block py-2 px-3 text-[20px] lg:w-full   w-36 text-white rounded md:border-0"
                >
                  Faq
                </a>
              </li>
              <li>
                <a
                  href="/#package"
                  className="block py-2 px-3 text-[20px] lg:w-full   w-36 text-white rounded md:border-0"
                >
                  Testimonial
                </a>
              </li>

              <li>
                <a
                  href="tel:+1 716 406 7972"
                  className="p-2 flex items-center gap-2 text-[20px] lg:w-full bg-pink-500  w-56 text-white rounded md:border-0"
                >
                  <MdOutlinePermPhoneMsg /> +880 1648-680963
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isScrolled && (
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href="https://wa.me/+880 1648-680963"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-3 rounded-full shadow-lg text-white"
          >
            <FaWhatsapp
              size={50}
              className="p-2 text-[#25D366] bg-[#23131c] rounded-md"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
