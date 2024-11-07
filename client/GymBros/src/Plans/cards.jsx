import React from 'react';
import logimg from '.././assets/loginimg.jpg';
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
      {/* Heading */}
      <h1
        className="mb-10 text-center text-5xl font-bold text-yellow-500"
        style={{ fontFamily: 'Lobster, cursive' }}
      >
        EXPLORE FITNESS OPTIONS
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1: Workout Suggester */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              {/* Dumbbell Icon for Workout Suggester */}
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
                  d="M3 12h4l3 9h4l3-9h4"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Get personalized workout recommendations based on your fitness goals, skill level, and available equipment.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="/workout" className="text-white transition-all duration-300 group-hover:text-white">
                  Start your workout &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Diet Planner */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              {/* Fork and Knife Icon for Diet Planner */}
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
                  d="M9 3v3m0 6v10m3-16v3m0 3v10m3-16v10"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Receive tailored diet plans to meet your nutrition needs and fitness goals, crafted by our experts.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="/diet" className="text-white transition-all duration-300 group-hover:text-white">
                  Plan your meals &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Workout Scheduler */}
        <div
          className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          style={{ backgroundColor: '#272727' }}
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10] group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 group-hover:transition-delay-200"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#272727]"
            >
              {/* Calendar Icon for Workout Scheduler */}
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
                  d="M8.25 3v1.5M15.75 3V4.5m-10.5 4.5H18m-12.75 0H18M3 9v10.5A2.25 2.25 0 005.25 21.75h13.5A2.25 2.25 0 0021 19.5V9"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Organize and manage your workout routines with a customizable scheduler that fits your lifestyle.
              </p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="/schedule" className="text-white transition-all duration-300 group-hover:text-white">
                  Schedule now &rarr;
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
