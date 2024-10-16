import React from 'react';
import logimg from './loginimg.jpg';

// Import the Lobster font
import '@fontsource/lobster';

function Cards() {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      style={{
        backgroundImage: `url(${logimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fancy Heading */}
      <h1
        className="mb-10 text-center text-5xl font-bold text-yellow-500"
        style={{ fontFamily: '' }}
      >
        EXPLORE FITNESS OPTIONS
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="#" className="text-white transition-all duration-300 group-hover:text-white">
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Great for adding new features to your existing project or creating a new one from scratch.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="#" className="text-white transition-all duration-300 group-hover:text-white">
                  Explore more &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m0 0H4m5 0h5"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Ideal for deploying your project to production, with all the necessary tools and integrations.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="#" className="text-white transition-all duration-300 group-hover:text-white">
                  Get started &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
