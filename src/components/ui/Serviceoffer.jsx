import React from "react";

function Serviceoffer() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">

        {/* Heading */}
        <div className="w-full text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Services
          </h1>
          <p className="mt-3 text-gray-500">
            Services I offer as a Frontend Developer
          </p>
        </div>

        {/* Timeline */}

        {/* Service 1 */}
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 text-sm font-medium">
            1
          </div>

          <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            <div className="grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium text-gray-900 mb-1 text-xl">
                Responsive Web Design
              </h2>
              <p className="leading-relaxed">
                I create fully responsive websites that work on all devices using HTML, CSS and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 text-sm font-medium">
            2
          </div>

          <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M12 3v18" />
              </svg>
            </div>

            <div className="grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium text-gray-900 mb-1 text-xl">
                Interactive UI Development
              </h2>
              <p className="leading-relaxed">
                Building dynamic and interactive user interfaces using JavaScript and React.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 text-sm font-medium">
            3
          </div>

          <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="3" />
                <path d="M12 22V8" />
              </svg>
            </div>

            <div className="grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium text-gray-900 mb-1 text-xl">
                React Development
              </h2>
              <p className="leading-relaxed">
                Creating modern single page applications (SPA) using React and reusable components.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>

          <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 text-sm font-medium">
            4
          </div>

          <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div className="grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium text-gray-900 mb-1 text-xl">
                UI/UX Optimization
              </h2>
              <p className="leading-relaxed">
                Improving website performance, usability and modern UI/UX design practices.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Serviceoffer;