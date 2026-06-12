import React from "react";

function Testimonials() {
  return (
    <section className="text-gray-700 body-font bg-linear-to-b from-white to-amber-50">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-14">
          <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text animate-pulse">
            What Clients Say
          </span>
        </h1>

        <div className="flex flex-wrap -m-4">

          {/* Testimonial 1 */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-2xl border border-amber-100
              shadow-sm transition-all duration-300 relative overflow-hidden
              hover:-translate-y-3 hover:scale-[1.02]
              hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)]
              hover:border-amber-400">

              {/* glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300
              bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50"></div>

              <div className="relative z-10">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  className="w-6 h-6 text-amber-500 mb-4"
                  viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601..." />
                </svg>

                <p className="leading-relaxed mb-6 italic text-gray-700">
                  “He delivered my website on time with a very clean and modern design.
                  Highly recommended for frontend work.”
                </p>

                <div className="inline-flex items-center">
                  <img
                    src="https://dummyimage.com/106x106"
                    alt="testimonial"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-200"
                  />

                  <span className="flex flex-col pl-4">
                    <span className="font-semibold text-gray-900">
                      Ahmed Khan
                    </span>
                    <span className="text-gray-500 text-sm">
                      Small Business Owner
                    </span>
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-2xl border border-amber-100
              shadow-sm transition-all duration-300 relative overflow-hidden
              hover:-translate-y-3 hover:scale-[1.02]
              hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)]
              hover:border-amber-400">

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300
              bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50"></div>

              <div className="relative z-10">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  className="w-6 h-6 text-amber-500 mb-4"
                  viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601..." />
                </svg>

                <p className="leading-relaxed mb-6 italic text-gray-700">
                  “Great communication and excellent UI skills.
                  My portfolio website looks very professional now.”
                </p>

                <div className="inline-flex items-center">
                  <img
                    src="https://dummyimage.com/107x107"
                    alt="testimonial"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-200"
                  />

                  <span className="flex flex-col pl-4">
                    <span className="font-semibold text-gray-900">
                      Sara Ali
                    </span>
                    <span className="text-gray-500 text-sm">
                      Graphic Designer
                    </span>
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;