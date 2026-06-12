import {Link} from "react-router-dom"
import React from "react";

function Navbar() {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">

        {/* Logo */}
        <a className="flex items-center text-gray-900 mb-4 md:mb-0">

          <img
            src="oneimg.avif"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-200"
            alt="logo"
          />

          <span className="ml-3 text-xl font-bold">
            <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </span>

        </a>

        {/* Nav Links */}
        <nav  className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-6">

          <  Link to ="/"  className="text-gray-700 hover:text-amber-600 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
            Home
          </Link>

          <Link Link to="about"    className="text-gray-700 hover:text-amber-600 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
            About
          </Link>

          < Link to="service"     className="text-gray-700 hover:text-amber-600 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
            Services
          </Link>

          < Link to="contact"     className="text-gray-700 hover:text-amber-600 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
            Contact
          </Link>

        </nav>

        {/* Button */}
        <button className="inline-flex items-center bg-amber-500 text-white border-0 py-2 px-5 rounded-full
          shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-amber-600 transition-all duration-300 mt-4 md:mt-0">

          Hire Me

        </button>

      </div>
    </header>
  );
}

export default Navbar;