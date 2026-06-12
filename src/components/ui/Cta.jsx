import React from 'react'

function Cta() {
  return (
    <div>
      <section className="text-gray-700 body-font bg-linear-to-r from-amber-50 to-yellow-50">
  <div className="container px-5 py-20 mx-auto">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">

      <h1 className="grow sm:pr-16 text-2xl md:text-3xl font-bold text-gray-900">
        Have a project in mind?
        <span className="block text-yellow-500 mt-2">
          Let's build something amazing together.
        </span>
      </h1>

      <button
        className="shrink-0 text-white bg-linear-to-r
        from-yellow-500 to-amber-500 py-3 px-8 rounded-lg
        font-medium hover:scale-105 hover:shadow-xl
        transition-all duration-300 mt-10 sm:mt-0"
      >
        Contact Me
      </button>

    </div>
  </div>
</section>
    </div>
  )
}

export default Cta
