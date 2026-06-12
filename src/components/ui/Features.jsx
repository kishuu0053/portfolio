import React from "react";

function Features() {
  return (
    <section className="text-gray-700 body-font bg-linear-to-b from-white to-amber-50">
      <div className="container px-5 py-24 mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Services
          </h1>

          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            I help businesses and individuals create modern, responsive,
            and engaging web experiences using the latest frontend
            technologies.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-8">

          {/* Service 1 */}
          <div className="p-4 md:w-1/3 flex group">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 shrink-0 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>

            <div className="grow pl-6">
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                Responsive Web Design
              </h2>

              <p className="leading-relaxed text-gray-600">
                Creating beautiful and fully responsive websites that work
                seamlessly across desktops, tablets, and mobile devices.
              </p>

              <a className="mt-4 text-yellow-500 inline-flex items-center font-medium cursor-pointer hover:gap-3 transition-all duration-300">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-4 md:w-1/3 flex group">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 shrink-0 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>

            <div className="grow pl-6">
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                React Development
              </h2>

              <p className="leading-relaxed text-gray-600">
                Building fast, scalable, and interactive web applications
                with React and reusable components for better performance.
              </p>

              <a className="mt-4 text-yellow-500 inline-flex items-center font-medium cursor-pointer hover:gap-3 transition-all duration-300">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="p-4 md:w-1/3 flex group">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 shrink-0 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <div className="grow pl-6">
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                UI / UX Implementation
              </h2>

              <p className="leading-relaxed text-gray-600">
                Transforming designs into clean, modern, and user-friendly
                interfaces that enhance engagement and user satisfaction.
              </p>

              <a className="mt-4 text-yellow-500 inline-flex items-center font-medium cursor-pointer hover:gap-3 transition-all duration-300">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;