import React from 'react'

function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Projects
          </h1>
          <p className="mt-3 text-gray-500">
            Some of the projects I built while learning and improving my frontend development skills
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="eightimg.webp" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">HTML / CSS</h3>
              <h2 className="text-gray-900 text-lg font-medium">Landing Page Design</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Responsive landing page built with HTML and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="twelveimg.avif" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">JavaScript</h3>
              <h2 className="text-gray-900 text-lg font-medium">Calculator App</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Functional calculator using vanilla JavaScript.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="nineimg.webp" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">React</h3>
              <h2 className="text-gray-900 text-lg font-medium">Portfolio Website</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Personal portfolio built with React and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="tenimg.webp" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">React</h3>
              <h2 className="text-gray-900 text-lg font-medium">Todo App</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Task management app with React state handling.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="elevenimg.avif" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">UI Design</h3>
              <h2 className="text-gray-900 text-lg font-medium">Dashboard UI</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Modern admin dashboard layout design.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="fourteenimg.avif" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">Tailwind</h3>
              <h2 className="text-gray-900 text-lg font-medium">Business Website</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Multi-section responsive business website.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="fifteenimg.avif" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">React</h3>
              <h2 className="text-gray-900 text-lg font-medium">E-commerce UI</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Product listing UI with React components.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img className="object-cover object-center w-full h-full block" src="thirdimg.webp" alt="project" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest">Frontend</h3>
              <h2 className="text-gray-900 text-lg font-medium">UI Practice Project</h2>
              <p className="mt-1 text-gray-600 text-sm">
                Layout practice using Tailwind CSS.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects