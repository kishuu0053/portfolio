import React from "react";

function Email() {
  return (
    <section className="text-gray-700 body-font relative bg-linear-to-b from-white to-amber-50">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get In Touch
          </h1>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project idea or want to discuss an opportunity?
            I'd be happy to connect and help build something amazing.
          </p>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap">

          {/* Left Side - Map & Contact Info */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl sm:mr-10 p-10 flex items-end justify-start relative">

            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Punjab%20Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded-xl shadow-md w-full">

              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  LOCATION
                </h2>

                <p className="mt-1">
                  Punjab, Pakistan
                </p>
              </div>

              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>

                <a className="text-yellow-500 leading-relaxed">
                  yourname@gmail.com
                </a>

                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  SPECIALIZATION
                </h2>

                <p className="leading-relaxed">
                  React • Tailwind CSS • JavaScript
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-2xl shadow-xl p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-0">

            <h2 className="text-gray-900 text-2xl mb-2 font-bold">
              Let's Work Together
            </h2>

            <p className="leading-relaxed mb-6 text-gray-600">
              I'm a passionate Frontend Developer specializing in React,
              Tailwind CSS, and modern web technologies. Whether you need
              a responsive website, a portfolio, or a custom web application,
              I'd love to help bring your ideas to life.
            </p>

            {/* Name */}
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded-lg border border-gray-300
                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200
                text-base outline-none text-gray-700 py-2 px-4
                transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded-lg border border-gray-300
                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200
                text-base outline-none text-gray-700 py-2 px-4
                transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded-lg border border-gray-300
                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200
                h-32 text-base outline-none text-gray-700 py-2 px-4
                resize-none transition-all duration-300"
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="text-white bg-linear-to-r from-yellow-500 to-amber-500
              border-0 py-3 px-6 rounded-lg text-lg font-medium
              hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Open to freelance projects, internships, collaborations,
              and frontend development opportunities.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Email;