import React from "react";

function Ending() {
  return (
    <section className="text-gray-700 body-font bg-linear-to-b from-white to-amber-50">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">

        <div className="lg:w-2/3 mx-auto">

          {/* MAIN CARD */}
          <div className="relative mb-6 overflow-hidden rounded-2xl group">

            <img
              alt="project"
              className="w-full h-96 object-cover opacity-30 absolute inset-0 group-hover:scale-110 transition duration-700"
              src="fifteenimg.avif"
            />

            <div className="relative z-10 text-center py-24 px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Let’s Build Something Amazing
              </h2>
              <p className="text-gray-700 mb-4">
                I create modern React websites, UI designs & responsive web apps.
              </p>

              <a className="text-yellow-600 font-medium inline-flex items-center hover:gap-2 transition-all">
                Contact Me
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* TWO SMALL CARDS */}
          <div className="flex flex-wrap -mx-2">

            {/* Card 1 */}
            <div className="px-2 w-1/2">
              <div className="relative overflow-hidden rounded-xl group">

                <img
                  alt="project"
                  className="w-full h-72 object-cover opacity-30 absolute inset-0 group-hover:scale-110 transition duration-700"
                  src="nineimg.webp"
                />

                <div className="relative z-10 text-center py-16 px-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Freelance Projects
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Available for React & Tailwind projects
                  </p>

                  <a className="text-yellow-600 mt-3 inline-flex items-center text-sm hover:gap-1 transition">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="px-2 w-1/2">
              <div className="relative overflow-hidden rounded-xl group">

                <img
                  alt="project"
                  className="w-full h-72 object-cover opacity-30 absolute inset-0 group-hover:scale-110 transition duration-700"
                  src="thirdimg.webp"
                />

                <div className="relative z-10 text-center py-16 px-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    UI / UX Practice
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Clean modern interfaces & landing pages
                  </p>

                  <a className="text-yellow-600 mt-3 inline-flex items-center text-sm hover:gap-1 transition">
                    View Work
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Ending;