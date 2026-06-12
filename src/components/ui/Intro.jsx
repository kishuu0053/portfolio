import React from "react";

function Intro() {
  return (
    <section className="text-gray-700 body-font bg-linear-to-b from-white to-amber-50">
      <div className="container mx-auto px-5 py-24">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-14">
          <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
            About Us
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left Side Images */}
          <div className="md:w-1/2 w-full relative flex justify-center">

            {/* Big Circle Image */}
            <img
              src="sevenimg.avif"
              alt="about main"
              className="w-80 h-80 object-cover rounded-full shadow-xl hover:scale-105 transition duration-500"
            />

            {/* Small Circle Image */}
            <img
              src="siximg.avif"
              alt="about small"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg
              absolute -bottom-6 -right-6 hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              We Build Modern & Creative Experiences
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi repellendus eveniet deserunt, optio voluptate 
              facilis cumque, non eaque itaque exercitationem 
              architecto quod. We focus on clean design, performance 
              and user experience.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to deliver high quality digital products 
              that help businesses grow faster and look more professional.
            </p>

            <button className="px-6 py-3 bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500
              text-white font-semibold rounded-full shadow-md hover:shadow-xl
              hover:scale-105 transition duration-300">
              Learn More
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;