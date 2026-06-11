import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-[#202020] shadow-md shadow-[#232323] text-orange-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Brand Logo Link */}
          <a
            href="https://pagedone.io/"
            className="flex justify-center"
            aria-label="Pagedone Home"
          ></a>

          {/* Navigation Menu Links */}

          <div>
            <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
              <li>
                <a
                  href="about-us"
                  className="text-orange-600 hover:text-orange-600transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-600transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-600transition-colors"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-600transition-colors"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-600transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>

            <div className="text-center mb-10">
              <p className="text-gray-200 text-lg">
                Email: farabisamir54@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links (Using React Icons) */}
          <div className="flex space-x-10 justify-center items-center mb-14">
            <a
              href="#"
              className="text-orange-600transition-all duration-500 hover:text-indigo-600"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/israk.farabi/"
              className="text-orange-600transition-all duration-500 hover:text-indigo-600"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="transition-all duration-500 hover:text-indigo-600"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-6" />
            </a>
            <a
              href="#"
              className="text-orange-600transition-all duration-500 hover:text-indigo-600"
              aria-label="YouTube"
            >
              <FaYoutube className="w-7 h-6" />
            </a>
          </div>

          {/* Copyright Section */}
          <span className="text-lg text-gray-500 text-center block">
            © <a className="hover:underline">farabisamir</a> {currentYear}, All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
