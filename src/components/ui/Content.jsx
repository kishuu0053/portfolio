import React from "react";

function Content() {
  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 transition duration-500 hover:text-amber-500">
            Words From My Clients
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here’s what my clients have to say about working with me and the
            frontend solutions I delivered for their projects.
          </p>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="flex flex-wrap -m-4">

          {/* Review 1 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div
              className="h-full text-center bg-white rounded-2xl p-6 shadow-md
              hover:shadow-2xl hover:-translate-y-3 hover:scale-105
              
              transition-all duration-500 border border-amber-100"
            >
              <img
                alt="client"
                src="https://dummyimage.com/302x302"
                className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block
                border-2 border-amber-300
                transition-all duration-500 hover:scale-110 hover:border-amber-500"
              />

              <p className="leading-relaxed text-gray-600">
                “He delivered my landing page exactly how I wanted. The design
                was modern, clean and fully responsive. Great communication
                throughout the project.”
              </p>

              <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Ahmed Khan
              </h2>

              <p className="text-gray-500 text-sm">
                Small Business Owner
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div
              className="h-full text-center bg-white rounded-2xl p-6 shadow-md
              hover:shadow-2xl hover:-translate-y-3 hover:scale-105
             
              transition-all duration-500 border border-amber-100"
            >
              <img
                alt="client"
                src="https://dummyimage.com/300x300"
                className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block
                border-2 border-amber-300
                transition-all duration-500 hover:scale-110 hover:border-amber-500"
              />

              <p className="leading-relaxed text-gray-600">
                “Very skilled frontend developer. My portfolio website looks
                professional now and loads much faster than before. Highly
                recommended!”
              </p>

              <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Sara Ali
              </h2>

              <p className="text-gray-500 text-sm">
                UI/UX Designer
              </p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div
              className="h-full text-center bg-white rounded-2xl p-6 shadow-md
              hover:shadow-2xl hover:-translate-y-3 hover:scale-105
            
              transition-all duration-500 border border-amber-100"
            >
              <img
                alt="client"
                src="https://dummyimage.com/305x305"
                className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block
                border-2 border-amber-300
                transition-all duration-500 hover:scale-110 hover:border-amber-500"
              />

              <p className="leading-relaxed text-gray-600">
                “Amazing work! The website is fully responsive and the UI looks
                very premium. He understands requirements very quickly and
                delivers on time.”
              </p>

              <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Ali Raza
              </h2>

              <p className="text-gray-500 text-sm">
                Startup Founder
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Content;