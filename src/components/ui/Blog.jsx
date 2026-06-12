import React from "react";

function Blog() {
  return (
    <section className="text-gray-700 body-font bg-linear-to-b from-white to-amber-50">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-14">
          <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
            Latest Blogs
          </span>
        </h1>

        <div className="flex flex-wrap -m-4">

          {/* Card 1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white border border-amber-100 rounded-2xl overflow-hidden
              shadow-sm hover:shadow-2xl transition-all duration-300
              hover:-translate-y-2 hover:border-amber-300">

              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 transition duration-500"
                src="fifthimg.webp"
                alt="blog"
              />

              <div className="p-6">

                <h2 className="text-xs font-medium text-amber-500 mb-1 tracking-widest">
                  CATEGORY
                </h2>

                <h1 className="text-lg font-bold text-gray-900 mb-3">
                  The Catalyzer
                </h1>

                <p className="leading-relaxed mb-3 text-gray-600">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing.
                </p>

                <a className="text-amber-600 inline-flex items-center hover:gap-2 transition-all">
                  Learn More →
                </a>

              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white border border-amber-100 rounded-2xl overflow-hidden
              shadow-sm hover:shadow-2xl transition-all duration-300
              hover:-translate-y-2 hover:border-amber-300">

              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 transition duration-500"
                src="thirdimg.webp"
                alt="blog"
              />

              <div className="p-6">

                <h2 className="text-xs font-medium text-amber-500 mb-1 tracking-widest">
                  CATEGORY
                </h2>

                <h1 className="text-lg font-bold text-gray-900 mb-3">
                  The 400 Blows
                </h1>

                <p className="leading-relaxed mb-3 text-gray-600">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing.
                </p>

                <a className="text-amber-600 inline-flex items-center hover:gap-2 transition-all">
                  Learn More →
                </a>

              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white border border-amber-100 rounded-2xl overflow-hidden
              shadow-sm hover:shadow-2xl transition-all duration-300
              hover:-translate-y-2 hover:border-amber-300">

              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 transition duration-500"
                src="fourthimg.webp"
                alt="blog"
              />

              <div className="p-6">

                <h2 className="text-xs font-medium text-amber-500 mb-1 tracking-widest">
                  CATEGORY
                </h2>

                <h1 className="text-lg font-bold text-gray-900 mb-3">
                  Shooting Stars
                </h1>

                <p className="leading-relaxed mb-3 text-gray-600">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing.
                </p>

                <a className="text-amber-600 inline-flex items-center hover:gap-2 transition-all">
                  Learn More →
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;