import React from "react";

function Hero() {
  return (
    <section className="bg-linear-to-b from-amber-50 via-white to-white text-gray-700 body-font min-h-screen flex items-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        {/* Left Content */}
        <div className="lg:-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
              KISHWAR ZIA-UL-HAQ
            </span>
            <br className="hidden lg:inline-block" /> Frontend Developer
          </h1>

          <p className="mb-8 leading-relaxed text-gray-600 max-w-md">
            I build responsive and modern websites using React, Tailwind CSS and JavaScript.
            I love creating clean UI and user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">

            <button className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 rounded-xl text-lg
              shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-amber-600 transition-all duration-300">
              View Projects
            </button>

            <button className="inline-flex text-amber-600 bg-white border border-amber-300 py-2 px-6 rounded-xl text-lg
              hover:bg-amber-50 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">

          {/* glow background */}
          <div className="absolute inset-0 bg-linear-to-r from-amber-200 via-yellow-100 to-orange-200 blur-3xl opacity-40 rounded-full"></div>

          <img
            className="relative z-10 object-cover object-center rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            alt="hero"
            src="./secondimg.avif"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;