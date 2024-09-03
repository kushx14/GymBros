import React from 'react';
import signimg from './darkgym.jpg';
import bgg from './loginimg.jpg';

function Signin() {
  return (
    <div 
      className="min-h-screen bg-gray-800 text-gray-900 flex justify-center"
      style={{ backgroundImage: `url(${bgg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-screen-xl m-0 sm:m-10 bg-black shadow sm:rounded-lg flex justify-center flex-1" 
      style={{backgroundColor:"#272727"}}>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl xl:text-3xl font-extrabold text-white">
              Sign up
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-500 text-gray-800 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="bg-white p-2 rounded-full">
                    {/* SVG for Google Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                      <path fill="#EA4335" d="M24 9.5c2.37 0 4.35.82 5.87 2.17l4.27-4.27C31.64 5.26 28.07 4 24 4 15.82 4 9.09 9.64 7.05 17h5.69c1.58-4.5 5.97-7.5 11.26-7.5z"/>
                      <path fill="#4285F4" d="M46.68 24.71c.31-1.63.49-3.32.49-5.04 0-1.72-.18-3.41-.49-5.04H24v9.5h12.8c-.57 2.84-2.11 5.22-4.39 6.84v5.7h7.07c4.16-3.84 6.63-9.48 6.63-16z"/>
                      <path fill="#FBBC05" d="M12.74 27.54c-.39-1.17-.61-2.41-.61-3.54s.22-2.37.61-3.54H7.05c-.65 1.53-1.05 3.22-1.05 5.04s.39 3.51 1.05 5.04l5.69-3z"/>
                      <path fill="#34A853" d="M24 44c4.07 0 7.64-1.26 10.37-3.41l-4.8-4.8c-1.52 1.35-3.5 2.18-5.57 2.18-5.3 0-9.69-3-11.26-7.5H7.05C9.09 38.36 15.82 44 24 44z"/>
                      <path fill="none" d="M0 0h48v48H0z"/>
                    </svg>
                  </div>
                  <span className="ml-4 text-black">
                    Sign Up with Google
                  </span>
                </button>

                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-500 text-gray-800 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 mt-5"
                >
                  <div className="bg-white p-1 rounded-full">
                    {/* SVG for GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="#000000">
                      <path d="M10.9,2c-5,0-9.1,4.1-9.1,9.1c0,4,2.6,7.4,6.2,8.6c0.5,0.1,0.7-0.2,0.7-0.5v-1.8c-2.5,0.5-3-1.2-3-1.2
                      c-0.5-1.3-1.3-1.7-1.3-1.7c-1.1-0.8,0.1-0.8,0.1-0.8c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.9,2.9,1.3,3.6,1c0.1-0.8,0.4-1.3,0.7-1.6
                      c-2-0.2-4-1-4-4.4c0-1,0.4-1.8,1-2.5c-0.1-0.2-0.5-1.2,0.1-2.4c0,0,0.8-0.2,2.5,1c0.7-0.2,1.4-0.3,2.1-0.3c0.7,0,1.4,0.1,2.1,0.3
                      c1.7-1.2,2.5-1,2.5-1c0.6,1.2,0.2,2.2,0.1,2.4c0.6,0.7,1,1.5,1,2.5c0,3.4-2.1,4.2-4.1,4.4c0.4,0.4,0.7,1,0.7,2v2.9
                      c0,0.3,0.2,0.6,0.7,0.5c3.6-1.2,6.2-4.6,6.2-8.6C20,6.1,15.9,2,10.9,2z"/>
                    </svg>
                  </div>
                  <span className="ml-4 text-black">
                    Sign Up with GitHub
                  </span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-orange-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Email" 
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-grey-500 border border-grey-500 placeholder-orange-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" 
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Sign Up
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by GYM BROs ...
                  <a href="#" className="border-b border-gray-500 border-dotted">
                     Terms of Service...
                  </a>
                  and its...
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:flex">
          <div 
            className="m-0 w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${signimg})`, backgroundColor: '#272727' }} 
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
