import React from 'react'

function Journey() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

        {/* Image */}
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="developer"
          src="fourthimg.webp"
        />

        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">

          {/* Heading */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Frontend Developer Journey
          </h1>

          {/* Main Content */}
          <p className="mb-8 leading-relaxed">
            I am a passionate Frontend Developer focused on building clean,
            responsive and user-friendly web interfaces. My journey started
            with HTML and CSS, where I learned how to structure and style web pages.
            Over time, I moved into JavaScript to make websites interactive and dynamic.
          </p>

          <p className="mb-8 leading-relaxed">
            Currently, I work with React and Tailwind CSS to build modern
            web applications. I enjoy turning ideas into real, functional
            and visually appealing digital products. My goal is to continuously
            improve my skills and become a professional full-stack developer.
          </p>

          {/* Input Section */}
          <div className="flex w-full justify-center items-end">

            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
                my Career Goal
              </label>

              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="e.g. Become a Full Stack Developer"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200 focus:bg-transparent border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Save
            </button>

          </div>

          {/* Footer Note */}
          <p className="text-sm mt-4 text-gray-500">
            Always learning, building and improving one project at a time.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Journey