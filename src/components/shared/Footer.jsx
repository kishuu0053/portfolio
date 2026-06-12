import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 body-font">

      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">

          {/* Logo & About */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">

            <div className="flex items-center md:justify-start justify-center">
              <img
                src="/oneimg.avif"
                alt="logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
              />

              <span className="ml-3 text-2xl font-bold text-white">
                Kishwar Zia
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-400">
              Frontend Developer passionate about building modern,
              responsive and user-friendly web applications using
              React, Tailwind CSS and JavaScript.
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-semibold text-white tracking-widest mb-4">
              Quick Links
            </h2>

            <nav className="list-none space-y-3">
              <li>
                <a className="hover:text-amber-400 transition cursor-pointer">
                  Home
                </a>
              </li>

              <li>
                <a className="hover:text-amber-400 transition cursor-pointer">
                  About
                </a>
              </li>

              <li>
                <a className="hover:text-amber-400 transition cursor-pointer">
                  Projects
                </a>
              </li>

              <li>
                <a className="hover:text-amber-400 transition cursor-pointer">
                  Contact
                </a>
              </li>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-semibold text-white tracking-widest mb-4">
              Services
            </h2>

            <nav className="list-none space-y-3">
              <li>Frontend Development</li>
              <li>React Applications</li>
              <li>Responsive Design</li>
              <li>UI / UX Design</li>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-white tracking-widest mb-4">
              Contact
            </h2>

            <p className="mb-2">
              📧 yourmail@gmail.com
            </p>

            <p className="mb-2">
              📱 +92 XXX XXXXXXX
            </p>

            <p>
              📍 Pakistan
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6 px-5 flex flex-col sm:flex-row items-center">

          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2026 Kishwar Zia. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center">

            <a className="text-gray-400 hover:text-amber-400 transition cursor-pointer">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a className="ml-4 text-gray-400 hover:text-amber-400 transition cursor-pointer">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>

            <a className="ml-4 text-gray-400 hover:text-amber-400 transition cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="18" cy="6" r="1"></circle>
              </svg>
            </a>

            <a className="ml-4 text-gray-400 hover:text-amber-400 transition cursor-pointer">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                <circle cx="4" cy="4" r="2"></circle>
                <path d="M2 9h4v12H2z"></path>
              </svg>
            </a>

          </span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;