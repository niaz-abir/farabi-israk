"use client";

import React, { useState, useEffect } from "react";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { PiFilmSlateLight } from "react-icons/pi";

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
    <>
      {/* Changed from 'fixed' to 'sticky' so it stays at the top but remains 
        part of the natural document flow. This allows it to push content down 
        when its height increases on mobile toggle.
      */}
      <nav className="bg-[#202020] shadow-md shadow-[#232323] sticky top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <PiFilmSlateLight
              size={42}
              className="text-orange-500 flex-shrink-0"
            />
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">
                FARABI SAMIR
              </h1>
              <span className="text-orange-400 text-xs md:text-sm whitespace-nowrap overflow-hidden animate-pulse">
                Film editor • Cinematic Storytelling
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenuFold size={32} />
          </button>

          {/* Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto transition-all duration-300`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 rounded-lg md:flex-row md:space-x-8 text-white">
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-lg lg:text-[20px]"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/#work"
                  className="block py-2 px-3 text-lg lg:text-[20px]"
                >
                  Work
                </a>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block py-2 px-3 text-lg lg:text-[20px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/#testimonial"
                  className="block py-2 px-3 text-lg lg:text-[20px]"
                >
                  Testimonial
                </a>
              </li>

              <li className="mt-2 md:mt-0">
                <a
                  href="tel:+8801648680963"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-orange-500 px-4 py-2 text-white transition-all duration-300 hover:bg-orange-500"
                >
                  <MdOutlinePermPhoneMsg />
                  +880 1736-489522
                </a>
              </li>

              <li className="mt-2 md:mt-0">
                <a
                  href="https://drive.google.com/drive/folders/1XIUZKiuJhtSw0iMN8wA21anKGrBOaB_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 px-5 py-2 text-white transition-all duration-300 hover:bg-transparent hover:text-orange-400"
                >
                  View My Work →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      {isScrolled && (
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href="https://wa.me/8801736489522"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <FaWhatsapp
              size={55}
              className="p-2 text-[#25D366] bg-[#23131c] rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
