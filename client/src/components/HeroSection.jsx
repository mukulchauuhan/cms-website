import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-radial-[at_50%_15%] from-sky-200 via-blue-400 to-indigo-300 to-90% px-4 pb-16 pt-5 md:px-8 lg:px-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Next-Gen CMS
        <br />
        Designed for Creators
      </h1>

      <h2 className="text-balance text-black italic md:pr-7 mt-6">
        Manage, publish, and inspire — all from one magical dashboard.
      </h2>
      {/* Get started & Learn More -> Button tailwind classes below */}

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="/login"
          className="rounded relative inline-flex group items-center justify-center px-6 py-3 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white transition duration-200 ease-in-out"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative z-10">Get Started</span>
        </a>

        <a
        // TODO :: Create a learn-more route with proper details and styling
          href="/learn-more"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>

          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>

          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>

          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Learn More
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
